import Image from 'next/image'
import Link from 'next/link'
// import ME from "../public/img/me.png";
import ME from "../public/img/sandhika.png";

export default function Beranda() {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">Hallo Semua 🤞👏, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">Okky Maheswara</span></h1>
            <h2 className="font-medium text-secondary text-lg mt-2 mb-5 lg:text-2xl">Developer & <span className="text-dark dark:text-white">Content Creator</span></h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">Belajar web programming itu mudah dan menyenangkan bukan. <span className="text-dark font-bold dark:text-white">bukann!</span></p>
            <Link href="mailto:okkymahes@gmail.com">
              <a className="text-base font-semibold text-white bg-primary py-3 px-6 rounded-full transition duration-700 ease-in-out hover:shadow-lg hover:opacity-80">Email Saya</a>
            </Link>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <Image src={ME} height={500} width={500} alt="My Photo" className="max-w-full mx-auto relative z-10" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#14b8a6" d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z" transform="translate(100 100) scale(1.1)"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
