
import Image from "next/image"
import Link from "next/link"
import Router from "next/router"
import {Button} from "../Button/Button"
import { ButtonsContainer, LogoConteiner, Nav } from "./style"

interface Props {
    exibirBotoes: boolean;
}

export const Header:React.FC<Props> = ({exibirBotoes}) =>{
    return(
        <header style={{height:"8vh"}}>
            <Nav>
                <LogoConteiner onClick={()=> Router.push('/')}>
                    <Image src="/schedule.svg" width={50} height={50} alt="Logo agenda"/>
                    <h1>SCHEDULE APP</h1>
                </LogoConteiner>
                {exibirBotoes?
                <ButtonsContainer>
                    <Link href="/signUp"><p>Registrar</p></Link>
                    <Button type="button" onClick={()=> Router.push('/signIn')}>Entrar</Button>
                </ButtonsContainer>
                :
                <></>}
            </Nav>
        </header>
    )
}