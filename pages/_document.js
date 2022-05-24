import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth dark'>
      <Head>
        <meta name="description" content="Portofolio My Sites" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Computer, Portofolio" />
        <meta name="author" content="Okky Maheswara" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
