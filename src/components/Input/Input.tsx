import { InputContainer, Label, StyledInput } from "./style"
import { v4 as uuidv4 } from 'uuid';

interface Props {
    labelFor: string
    type: 'text' | 'email' | 'password' | 'checkbox' | 'date' | 'date-time'
    name: string
}

export const Input:React.FC<Props> = ({type, labelFor}) =>{
    return(
        <InputContainer>  
            <Label htmlFor="1">{labelFor}</Label>
            <StyledInput id={uuidv4()} type={type}/>
        </InputContainer>
    )
}