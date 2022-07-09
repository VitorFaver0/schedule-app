import styled from 'styled-components'

export const StyledButton = styled.button`
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.ligthText};
    border-radius: 8px;
    padding:12px;
    transition: ease-out 500ms;
    cursor: pointer;

    :hover{
        background: ${props => props.theme.colors.terceary};
    }

`