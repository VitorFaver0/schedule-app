import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../styles/pages/404'

const NotFound: NextPage = () => {
  return (
    <Container>
        <h1>404 - Page Not Found</h1>
        {/* <Image alt="Error 404 - Page not found" src="/undraw_page_not_found_re_e9o6.svg" width='500' height='500'/> */}
        <Link href="/">
            <a>
                Go back
            </a>
        </Link>
    </Container>
  )
}

export default NotFound