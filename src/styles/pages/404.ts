import styled from 'styled-components'
import tw from "tailwind-styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    color: ${props => props.theme.colors.darkText};
  }
  a{
    color: ${props => props.theme.colors.darkText};
  }
`

