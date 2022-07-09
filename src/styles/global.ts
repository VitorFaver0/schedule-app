import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font: 400 16px Roboto, sans-serif;
  }
  body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.ligthText};
    color: ${props => props.theme.colors.darkText};
  }
`