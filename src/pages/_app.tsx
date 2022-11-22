import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
