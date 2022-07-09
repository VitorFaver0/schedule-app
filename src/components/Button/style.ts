import styled from 'styled-components'

export const StyledButton = styled.button`
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.ligthText};
    border-radius: 8px;
    padding:12px;
    transition: ease-out 500ms;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    
    :hover{
        background: ${props => props.theme.colors.terceary};
    }

`