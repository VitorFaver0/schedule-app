import styled from 'styled-components'

export const MainContainer = styled.main`
    height: 85vh;
    max-height: 85vh;
    overflow: auto;
    padding: 16px;
`
export const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 4px;

    img{
        border-radius:8px;
    }
   
`
export const ContentSectionContainer = styled.div`
    margin:8px;

    h2{
        padding:4px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${props => props.theme.colors.darkText};
        font-size: 2rem;
    }

    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${props => props.theme.colors.darkText};
        padding:4px;
        max-width: 700px;
    }
`