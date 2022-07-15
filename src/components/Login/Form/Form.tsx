import Image from "next/image"
import { Button } from "../../Button/Button"
import { InputContainer, LoginButtonContainer, ProvidersContainer, StyledForm, StyledLogoContainer, StyledProvider } from "./style"
import { useAuth } from "../../../contexts/AuthContext"
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Alert } from "@mui/material";
import Link from "next/link";

const TAM_PROVIDDER_LOGO = 35

export const Form:React.FC = () => {
    const {loginWithGoogle, loginWithFacebook, login} = useAuth()    
    const {handleSubmit, register} = useForm()
    const [alert, setAlert] = useState(<></>)
    async function handleSignIn(data:signUpData) {
        setAlert(<></>)
        login(data.email, data.password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(error.code==="auth/wrong-password")
                setAlert(<Alert severity="error">Senha incorreta!</Alert>)
            throw errorCode;
        });
    }

    return(
        <StyledForm onSubmit={handleSubmit(handleSignIn)}>
            <InputContainer>
                <TextField
                        id="standard-password-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="current-password"
                        variant="standard"      
                        {...register("email")}
                        required          
                    />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    variant="standard"
                    {...register("password")}
                    required       
                />
            </InputContainer>
            {alert}
            <LoginButtonContainer>
                <Button type="submit">
                    Login
                </Button>
                <p>Não tem uma conta?</p>
                <Link href="/signUp">Registrar-se</Link>
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