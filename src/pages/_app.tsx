import type { AppProps } from 'next/app'
import ToastProvider from '../providers/toast-provider'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ToastProvider />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
