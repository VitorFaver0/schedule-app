import Image from "next/image"
import { ContentSectionContainer, MainContainer, SectionContainer } from "./style"

export const Content:React.FC = () =>{
    return(
       <MainContainer>
            <SectionContainer>
                <ContentSectionContainer>
                    <h2>O que é?</h2>
                    <p>
                        Um software de controle de agendas de trabalho permite que o usuário registre
                        compromissos; para cada compromisso é possível registrar data, horário inicial,
                        duração, local, tipo de compromisso e participantes (nome e endereço de mail). Ao
                        registrar um compromisso na agenda o usuário pode solicitar que o software de agenda
                        apresente um aviso na tela do computador quando o horário estiver próximo (definindo
                        o intervalo de antecedência do aviso). Quando o aviso é exibido é possível também ao
                        usuário solicitar que ele seja re-exibido após um certo período de tempo, ou então
                        encerrar o aviso.
                    </p>
                </ContentSectionContainer>
                <Image src="/landing-page-agenda.jpg" height={400} width={700} alt="Imagem ilustrativa de uma agenda"/>
            </SectionContainer>
            <SectionContainer>
                <ContentSectionContainer>
                    <h2>What is Lorem Ipsum?</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                         PageMaker including versions of Lorem Ipsum.
                    </p>
                </ContentSectionContainer>
                <Image src="/timer-svgrepo-com.svg" height={300} width={600} alt="Imagem ilustrativa de uma agenda"/>
            </SectionContainer>
       </MainContainer>
    )
}