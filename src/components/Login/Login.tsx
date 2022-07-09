import { Form } from "./Form/Form"
import { FormContainer, MainContainer } from "./style"

export const Login:React.FC = () => {
    return(
        <MainContainer>
            <FormContainer>
                <h2>Login</h2>
                <Form/>
            </FormContainer>
        </MainContainer>
    )
}