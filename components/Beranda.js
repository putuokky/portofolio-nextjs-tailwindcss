import Image from 'next/image'
import Link from 'next/link'
import ME from "../public/img/sandhika.png";

export default function Beranda() {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="self-center w-full px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">Hallo Semua 🤞👏, saya <span className="block mt-1 text-4xl font-bold text-dark lg:text-5xl dark:text-white">Joe Marley</span></h1>
            <h2 className="mt-2 mb-5 text-lg font-medium text-secondary lg:text-2xl">Developer & <span className="text-dark dark:text-white">Content Creator</span></h2>
            <p className="mb-10 font-medium leading-relaxed text-secondary">Belajar web programming itu mudah dan menyenangkan bukan. <span className="font-bold text-dark dark:text-white">bukann!</span></p>
            <Link href="mailto:nama-email@gmail.com">
              <a className="px-6 py-3 mx-3 text-base font-semibold text-white transition duration-500 ease-in-out rounded-full bg-primary hover:shadow-lg hover:opacity-70">Hire Me</a>
            </Link>
            <Link href="#">
              <a className="px-6 py-3 mx-3 text-base font-semibold text-white transition duration-500 ease-in-out rounded-full bg-primary hover:shadow-lg hover:opacity-70">Download CV</a>
            </Link>
          </div>
          <div className="self-end w-full px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <Image src={ME} height={500} width={500} alt="My Photo" className="relative z-10 max-w-full mx-auto" />
              <span className="absolute bottom-0 -translate-x-1/2 left-1/2 md:scale-125">
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#14B8A6" d="M51.8,-19.2C57.3,0.3,45.3,23.1,26.3,37.1C7.3,51.1,-18.8,56.4,-32.9,46C-47,35.6,-49.1,9.5,-41.7,-12.6C-34.2,-34.7,-17.1,-52.8,3,-53.8C23.1,-54.8,46.2,-38.7,51.8,-19.2Z" transform="translate(100 100)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
