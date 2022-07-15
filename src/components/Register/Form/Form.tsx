import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../../Button/Button"
import { LoginButtonContainer, StyledForm, InputContainer} from "./style"
import TextField from '@mui/material/TextField';
import { Alert } from "@mui/material";
import { passwordStrength } from "../../../common/utils/passwordStrength";
import { useAuth } from "../../../contexts/AuthContext";


export const Form:React.FC = () => {
    const {handleSubmit, register} = useForm()
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(<></>)
    const [validPass, setValidPass] = useState(false)
    const {UserRegister} = useAuth()  

    async function handleSignUp(data:signUpData) {
        if(validPass)
            console.log(UserRegister(data.email, data.password))
    }

    function handlePassword(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        e.target.value = e.target.value.trim()   
        if(e.target.value.trim().length>0){
            if(passwordStrength(e.target.value)){
                setPassword(e.target.value)
                setAlert(<></>)
            }
            else
                setAlert(<Alert severity="warning">
                            A senha deve ter entre 6 e 16 caracteres, ao menos uma letra maiúscula e uma minúscula, um número e um símbolo.
                        </Alert>)
        }
        else{
            setPassword("")
            setAlert(<></>)
        }
    }

    function handleRepeatPassword(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        e.target.value = e.target.value.trim()   
        if(e.target.value.trim().length>0){
            if(e.target.value==password){
                setValidPass(true)
                setAlert(<></>)
            }
            else{
                setAlert(<Alert severity="warning">
                            As senhas não conferem.
                        </Alert>)
                setValidPass(false)
            }
        }
        else
            setValidPass(false)
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
                        onChange={(e) => handleRepeatPassword(e)}                        
                    />
                :
                    <></>
                }
                {alert}
            </InputContainer>
            <LoginButtonContainer>
                <Button type="submit">
                    Finalizar
                </Button>
            </LoginButtonContainer>
        </StyledForm>
    )
}