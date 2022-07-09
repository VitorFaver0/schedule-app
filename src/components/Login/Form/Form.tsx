import Image from "next/image"
import { Button } from "../../Button/Button"
import { Input } from "../../Input/Input"
import { LoginButtonContainer, ProvidersContainer, StyledForm, StyledLogoContainer, StyledProvider } from "./style"
import { useAuth } from "../../../contexts/AuthContext"

const TAM_PROVIDDER_LOGO = 35

export const Form:React.FC = () => {
    const {loginWithGoogle, loginWithFacebook} = useAuth()    

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
                <StyledProvider onClick={() => loginWithFacebook()}>
                    <StyledLogoContainer>                
                        <Image src="/facebook-svgrepo-com.svg" alt="facebook icon" height={TAM_PROVIDDER_LOGO} width={TAM_PROVIDDER_LOGO}/>
                    </StyledLogoContainer>  
                    <strong>Continuar com o Facebook</strong>
                </StyledProvider>
                <StyledProvider onClick={() => loginWithGoogle()}>
                    <StyledLogoContainer>                
                        <Image src="/google-svgrepo-com.svg" alt="facebook icon" height={TAM_PROVIDDER_LOGO} width={TAM_PROVIDDER_LOGO}/>
                    </StyledLogoContainer>  
                    <strong>Continuar com o Google</strong>
                </StyledProvider>
            </ProvidersContainer>
        </StyledForm>
    )
}