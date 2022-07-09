import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Register } from '../components/Register/Register';
import { useAuth } from '../contexts/AuthContext';

const SignUp: NextPage = () => {
  const {user} = useAuth()
  if(user!=null)
    Router.push('/home')

  return (
    <div style={{height:'100vh', width: '100vw'}}>
       <Head>
          <title>Schedule App - Sign Up</title>
          <meta name="description" content="Clock - First is an application to control and determine the time for your tasks" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header exibirBotoes={false}/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default SignUp;