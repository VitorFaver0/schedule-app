import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext({} as AuthContextType)

export const useAuth = () => useContext(AuthContext)

interface Props {
    children: ReactNode
}

export function AuthContextProvider({ children }:Props) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    return result;
  }

  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider()
    provider.addScope('user_birthday')
    const result = await signInWithPopup(auth, provider)
    return result;
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loginWithGoogle, loginWithFacebook}}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}