import styled from 'styled-components'

export const FooterContainer = styled.footer`
    bottom:0;
    width:100vw;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 0.4px solid ${props => props.theme.colors.ligthBackground};

    strong{
        color: ${props => props.theme.colors.darkText};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
    }

`