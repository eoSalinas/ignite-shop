import * as Dialog from '@radix-ui/react-dialog'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import logoImg from '../assets/logo.svg'
import Cart from '../components/Cart'
import { GlobalStyle } from '../styles/global'
import { CartButton, Container, Header } from '../styles/pages/app'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
              <span>1</span>
              <Handbag weight="bold" size={24} />
            </CartButton>
          </Dialog.Trigger>
          <Cart />
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
