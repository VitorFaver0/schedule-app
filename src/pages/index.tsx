import { NextPage } from 'next'
import Head from 'next/head'
import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div style={{height:'100vh', width: '100vw'}}>
       <Head>
          <title>Schedule App</title>
          <meta name="description" content="Clock - First is an application to control and determine the time for your tasks" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header exibirBotoes={true}/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Home;