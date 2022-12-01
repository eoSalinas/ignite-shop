import type { AppProps } from 'next/app'
import Header from '../components/Header'
import CartProvider from '../contexts/CartContext'
import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
