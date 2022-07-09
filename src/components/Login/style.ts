import styled from 'styled-components'

export const MainContainer = styled.main`
    height: 85vh;
    max-height: 85vh;
    overflow: auto;
    padding: 16px;
    display: flex;
`
export const FormContainer = styled.div`
    height:100%;
    width:100%;
    display: flex;
    flex-direction:column;
    align-items:center;

    h2{
        padding:4px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${props => props.theme.colors.darkText};
        font-size: 2rem;
    }
`