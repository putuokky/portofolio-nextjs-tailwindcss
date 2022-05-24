import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mahesora &mdash; It's Show Time</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
