import { Form } from "./Form/Form"
import { FormContainer, MainContainer } from "./style"

export const Register:React.FC = () =>{
    return(
        <MainContainer>
            <FormContainer>
                <h2>Registrar-se</h2>
                <Form/>
            </FormContainer>
        </MainContainer>
    )
}