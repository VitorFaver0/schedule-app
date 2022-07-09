import { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { Button } from "../components/Button/Button";
import { useAuth } from "../contexts/AuthContext";

const Index: NextPage = () => {
    const {user, logout} = useAuth();
    if(user!=null){
      return (
        <div style={{height:'100vh', width: '100vw'}}>
          <Head>
              <title>Schedule App</title>
              <meta name="description" content="Clock - First is an application to control and determine the time for your tasks" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Button onClick={()=> logout()}>Logout</Button>
        </div>
      )
    }
    else
      Router.push("/signIn")
  }
  
  export default Index;