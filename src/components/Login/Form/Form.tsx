import Image from "next/image"
import { Button } from "../../Button/Button"
import { Input } from "../../Input/Input"
import { LoginButtonContainer, ProvidersContainer, StyledForm, StyledLogoContainer, StyledProvider } from "./style"


export const Form:React.FC = () => {
    return(
        <StyledForm>
            <Input labelFor="Email" name="email" type="email"/>
            <Input labelFor="Senha" name="password" type="password"/>
            <LoginButtonContainer>
                <Button type="submit">
                    Login
                </Button>
            </LoginButtonContainer>
            <ProvidersContainer>
                <StyledProvider>
                    <StyledLogoContainer>                
                        <Image src="/facebook-svgrepo-com.svg" alt="facebook icon" height={40} width={40}/>
                    </StyledLogoContainer>  
                    <strong>Continuar com o Facebook</strong>
                </StyledProvider>
                <StyledProvider>
                    <StyledLogoContainer>                
                        <Image src="/google-svgrepo-com.svg" alt="facebook icon" height={40} width={40}/>
                    </StyledLogoContainer>  
                    <strong>Continuar com o Google</strong>
                </StyledProvider>
            </ProvidersContainer>
        </StyledForm>
    )
}