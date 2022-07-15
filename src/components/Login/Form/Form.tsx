import Image from "next/image"
import { Button } from "../../Button/Button"
import { InputContainer, LoginButtonContainer, ProvidersContainer, StyledForm, StyledLogoContainer, StyledProvider } from "./style"
import { useAuth } from "../../../contexts/AuthContext"
import TextField from '@mui/material/TextField';

const TAM_PROVIDDER_LOGO = 35

export const Form:React.FC = () => {
    const {loginWithGoogle, loginWithFacebook, login} = useAuth()    

    return(
        <StyledForm>
            <InputContainer>
                <TextField
                        id="standard-password-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="current-password"
                        variant="standard"                
                    />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    variant="standard"
                />
            </InputContainer>
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