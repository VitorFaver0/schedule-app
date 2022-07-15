import styled from 'styled-components'

export const StyledForm = styled.form`
    border: solid 0.4px ${props => props.theme.colors.ligthBackground};
    padding: 32px;
    border-radius:12px;
    gap: 8px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const LoginButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
export const ProvidersContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 12px;
    padding:8px;
`
export const StyledProvider = styled.div`
    border: solid 0.4px ${props => props.theme.colors.ligthBackground};
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    border-radius: 8px;
    
    strong{
        padding: 4px;
        font-size:0.8rem;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${props => props.theme.colors.darkText};
        transition: ease-in-out 300ms;
    }

    :hover{
        strong{
            color: ${props => props.theme.colors.primary};
        }
    }
`
export const StyledLogoContainer = styled.div`
    padding: 4px;
    border-right: solid 0.4px ${props => props.theme.colors.ligthBackground};
    background: ${props => props.theme.colors.white};
    border-radius: 8px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
`