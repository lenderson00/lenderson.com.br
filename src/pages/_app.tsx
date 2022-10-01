import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SEO } from '../component/SEO'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <SEO />
    <Component {...pageProps} />
  </>
}

export default MyApp
