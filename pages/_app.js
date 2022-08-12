import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import SEO from "@bradgarropy/next-seo"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <SEO
        title="My website"
        description="A blog and portfolio"
        keywords={["website", "blog", "portfolio"]}
        icon="/favicon.ico"
        themeColor="#000000"
        colorScheme="dark"
        facebook={{
          image: "/facebook.png",
          url: "https://website.com",
          type: "website",
        }}
        twitter={{
          image: "/twitter.png",
          site: "@twitter",
          card: "summary",
        }} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
