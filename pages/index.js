import About from "@components/About";
import Beranda from "@components/Beranda";
import Blog from "@components/Blog";
import Client from "@components/Client";
import Contact from "@components/Contact";
import Layout from "@components/Layout";
import Portfolio from "@components/Portfolio";

export default function Home() {

  return (
    <Layout>

      {/* Hero Section Start */}
      <Beranda />
      {/* Hero Section End */}

      {/* About Section Start */}
      <About />
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <Portfolio />
      {/* Portfolio Section End */}

      {/* Clients Section Start */}
      <Client />
      {/* Clients Section End */}

      {/* Blog Section Start */}
      <Blog />
      {/* Blog Section End */}

      {/* Contact Section Start */}
      <Contact />
      {/* Contact Section End */}

    </Layout>
  )
}
