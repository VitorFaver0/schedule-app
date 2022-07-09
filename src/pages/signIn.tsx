import { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';

const SignIn: NextPage = () => {
  return (
    <div style={{height:'100vh', width: '100vw'}}>
       <Head>
          <title>Schedule App</title>
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