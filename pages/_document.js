import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head>
        <title>Mahesora - It's Show Time</title>
        <meta name="description" content="Portofolio My Sites" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Computer, Portofolio" />
        <meta name="author" content="Okky Maheswara" />
        <meta property="og:title" content="Mahesora - It's Show Time" key="title" />
        {/* <link rel="icon" type="image/x-icon" href="/favicon.ico"></link> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
