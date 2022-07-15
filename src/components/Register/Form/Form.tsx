import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../../Button/Button"
import { LoginButtonContainer, StyledForm, InputContainer} from "./style"
import TextField from '@mui/material/TextField';
import { Alert } from "@mui/material";

interface signUpData {
    email: string
    password: string
}

export const Form:React.FC = () => {
    const {handleSubmit, register} = useForm()
    const [password, setPassword] = useState("")

    async function handleSignUp(data:signUpData) {
        console.log(data)
    }

    function handlePassword(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        e.target.value = e.target.value.trim()   
        if(e.target.value.trim().length>0)
            setPassword(e.target.value)
        else
            setPassword("")
    }

    function handleRepeatPassword(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        e.target.value = e.target.value.trim()   
        if(e.target.value.trim().length>0)
            setPassword(e.target.value)
        else
            setPassword("")
    }

    return(
        <StyledForm onSubmit={handleSubmit(handleSignUp)} >
            <InputContainer>
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="current-password"
                    variant="standard"
                    {...register("email")}
                    required
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    variant="standard"
                    {...register("password")}
                    onChange={(e) => handlePassword(e)}
                    InputProps={{ inputProps: { minLength: 6, maxLength: 16 } }}
                    required
                />
                {password.length>0 ?
                    <TextField
                        id="rPassword"
                        label="Repeat Password"
                        type="password"
                        name="rPassword"
                        autoComplete="current-password"
                        variant="standard"
                        required
                        onChange={(e) => handlePassword(e)}                        
                    />
                :
                    <></>
                }
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
            </InputContainer>
            <LoginButtonContainer>
                <Button type="submit">
                    Finalizar
                </Button>
            </LoginButtonContainer>
        </StyledForm>
    )
}