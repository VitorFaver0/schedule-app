import Image from "next/image"
import { Button } from "../../Button/Button"
import { Input } from "../../Input/Input"
import { LoginButtonContainer, ProvidersContainer, StyledForm, StyledLogoContainer, StyledProvider } from "./style"


export const Form:React.FC = () => {
    return(
        <StyledForm>
            <Input labelFor="Nome" name="name" type="email"/>
            <Input labelFor="Email" name="email" type="email"/>
            <Input labelFor="Senha" name="password" type="password"/>
            <Input labelFor="Repetir Senha" name="rPass" type="password"/>
            <LoginButtonContainer>
                <Button type="submit">
                    Finalizar
                </Button>
            </LoginButtonContainer>
        </StyledForm>
    )
}