import React from 'react'
import {AppProps} from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { AuthContextProvider } from '../contexts/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default MyApp
