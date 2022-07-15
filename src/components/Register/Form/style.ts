import styled from 'styled-components'

export const StyledForm = styled.form`
    border: solid 0.4px ${props => props.theme.colors.ligthBackground};
    padding: 32px;
    border-radius:12px;
    gap: 8px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
`
export const LoginButtonContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`
