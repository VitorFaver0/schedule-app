import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';
import { useAuth } from '../contexts/AuthContext';

const SignIn: NextPage = () => {
  const {user} = useAuth()
  if(user!=null)
    Router.push('/home')
    
  return (
    <div style={{height:'100vh', width: '100vw'}}>
       <Head>
          <title>Schedule App - Sign In</title>
          <meta name="description" content="Clock - First is an application to control and determine the time for your tasks" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header exibirBotoes={false}/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default SignIn;