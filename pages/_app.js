import Head from 'next/head'
import '../styles/globals.css'
import favicon from '../public/favicon.ico'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <link rel="icon" href={favicon.src} />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
