import Header from './Header';
import Footer from "./Footer";

export default function Layout({ children }) {

  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {children}

      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}

      {/* Back to Top Start */}
      {/* <a href="#home" className="fixed bottom-4 right-4 z-[9999] h-14 w-14 rounded-full bg-primary p-4 flex justify-center items-center hover:animate-bounce">
        <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a> */}
      {/* Back to Top End */}
    </>
  )
}
