import { InputContainer, Label, StyledInput } from "./style"

interface Props {
    labelFor: string
    type: 'text' | 'email' | 'password' | 'checkbox' | 'date' | 'date-time'
    name: string
}

export const Input:React.FC<Props> = ({type, labelFor}) =>{
    return(
        <InputContainer>  
            <Label htmlFor="1">{labelFor}</Label>
            <StyledInput id={"1"} type={type}/>
        </InputContainer>
    )
}