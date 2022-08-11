import Header from './Header';
import Footer from "./Footer";
import Head from 'next/head';

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Joe Marley &mdash; Portfolio Site</title>
      </Head>
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {children}

      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}

      {/* Back to Top Start */}
      {/* <a href="#home" className="fixed bottom-4 right-4 z-[9999] h-14 w-14 rounded-full bg-primary p-4 flex justify-center items-center hover:animate-bounce">
        <span className="block w-5 h-5 mt-2 rotate-45 border-t-2 border-l-2"></span>
      </a> */}
      {/* Back to Top End */}
    </>
  )
}
