import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import logoImg from '../assets/logo.svg'
import { GlobalStyle } from '../styles/global'
import { Cart, Container, Header } from '../styles/pages/app'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>

        <Cart>
          <span>1</span>
          <Handbag weight="bold" size={24} />
        </Cart>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
