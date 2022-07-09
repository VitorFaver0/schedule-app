import styled from 'styled-components'

export const Nav = styled.nav`
    position:sticky;
    top: 0;
    width:100vw;
    border-bottom: 0.4px solid ${props => props.theme.colors.ligthBackground};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height:100%
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap:16px;
    align-items: center;
    justify-content: space-around;
    p{
        cursor: pointer;
        :hover{
            text-decoration:underline;
        }
    }
`
export const LogoConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    h1{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.7rem;
        font-weight: bold;
    }

`