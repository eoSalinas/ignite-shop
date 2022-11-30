import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}
