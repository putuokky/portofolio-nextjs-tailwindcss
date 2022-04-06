import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [headerOn, setHeaderOn] = useState(false);
  // window.onscroll = function () {
  //   const header = document.querySelector('header');
  //   const fixedNav = header.offsetTop;
  //   if (window.pageYOffset > fixedNav) {
  //     header.classList.add('navbar-fixed');
  //   } else {
  //     header.classList.remove('navbar-fixed');

  //   }
  // }

  return (
    <>
      {/* Header Start */}
      <header onScroll={() => setHeaderOn()} className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="#home">
                <a className="font-bold text-lg text-primary block py-6 uppercase">Mahesora</a>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button type="button" className="block absolute right-4 lg:hidden" onClick={() => setActiveNavbar(!activeNavbar)}>
                <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${activeNavbar ? 'rotate-45' : ''}`}></span>
                <span className={`hamburger-line transition duration-300 ease-in-out ${activeNavbar ? 'scale-0' : ''}`}></span>
                <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${activeNavbar ? '-rotate-45' : ''}`}></span>
              </button>
              <nav onClick={() => setActiveNavbar(!activeNavbar)} className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${activeNavbar ? '' : 'hidden'}`}>
                <ul className="block lg:flex">
                  <li className="group">
                    <Link href="#home">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Beranda</a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#about">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#portfolio">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portfolio</a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#clients">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Clients</a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#blog">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#contact">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">Hallo Semua 🤞👏, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Okky Maheswara</span></h1>
              <h2 className="font-medium text-secondary text-lg mt-2 mb-5 lg:text-2xl">Lecturer & <span className="text-dark">Content Creator</span></h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">Belajar web programming itu mudah dan menyenangkan bukan. <span className="text-dark font-bold">bukann!</span></p>
              <Link href="#">
                <a className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
              </Link>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <Image src="/img/sandhika.png" height={500} width={500} alt="Okky Maheswara" className="max-w-full mx-auto" />
                <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#14B8A6" d="M23.1,-24.1C37.2,-9,61,-4.5,65.6,4.7C70.3,13.9,56,27.7,41.9,28.3C27.7,28.9,13.9,16.2,3.7,12.5C-6.4,8.7,-12.8,14,-26.8,13.4C-40.8,12.8,-62.4,6.4,-69.3,-6.9C-76.1,-20.1,-68.3,-40.3,-54.3,-55.4C-40.3,-70.5,-20.1,-80.5,-7.8,-72.7C4.5,-64.9,9,-39.2,23.1,-24.1Z" transform="translate(100 100) scale(1.1)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-3">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Yuk Belajar cuyyy</h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam magni explicabo illum tempore aliquid consequuntur.</p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari berteman</h3>
              <p className="font-medium text-base text-secondary mb-6  lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis maiores facilis enim mollitia nam dolorem ipsum quisquam?</p>
              <div className="flex items-center">
                {/* Facebook */}
                <Link href="https://facebook.com/okkymahes">
                  <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                </Link>
                {/* Twitter */}
                <Link href="https://twitter.com/okkymhwr">
                  <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </a>
                </Link>
                {/* Instagram */}
                <Link href="https://www.instagram.com/okkymahesora/">
                  <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                  </a>
                </Link>
                {/* Youtube */}
                <Link href="https://www.youtube.com/c/OkkyMaheswara">
                  <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>
                </Link>
                {/* Linkedin */}
                <Link href="https://www.linkedin.com/in/okky-maheswara-527719b5/">
                  <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </Link>
                {/* Github */}
                <Link href="https://github.com/putuokky">
                  <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-lg mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
              <p className="font-medium text-secondary md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae cumque sequi maiores iure eum, iste voluptas blanditiis repudiandae perferendis!</p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center lg:w-10/12 lg:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src="/img/portfolio/1.png" alt="Portfolio 1" height={400} width={650} />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Portfolio Pertama Saya</h3>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src="/img/portfolio/2.png" alt="Portfolio 2" height={400} width={650} />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Portfolio Kedua Saya</h3>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src="/img/portfolio/3.png" alt="Portfolio 2" height={400} width={650} />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Portfolio Ketiga Saya</h3>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src="/img/portfolio/4.png" alt="Portfolio 4" height={400} width={650} />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Portfolio Keempat Saya</h3>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Clients Section Start */}
      <section id="clients" className="pt-36 pb-32 bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Bekerjasama</h2>
              <p className="font-medium text-secondary md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, earum. Eum, eius.</p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <Link href="#">
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                  <Image src="/img/clients/google.svg" height={90} width={270} alt="Google" />
                </a>
              </Link>
              <Link href="#">
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                  <Image src="/img/clients/gojek.svg" height={25} width={110} alt="Gojek" />
                </a>
              </Link>
              <Link href="#">
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                  <Image src="/img/clients/tokopedia.svg" height={85} width={400} alt="Tokopedia" />
                </a>
              </Link>
              <Link href="#">
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                  <Image src="/img/clients/traveloka.svg" height={200} width={500} alt="Traveloka" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section End */}

      {/* Blog Section Start */}
      <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-lg mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
              <p className="font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas ipsum dicta porro.</p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image src="/img/blog/programming.jpg" height={200} width={360} alt="Programming" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <Link href="#">
                      <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Tips Belajar Programming</a>
                    </Link>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, similique.</p>
                  <Link href="#">
                    <a className="font-medium text-sm text-white bg-primary py-3 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image src="/img/blog/mechanical-keyboard.jpg" height={200} width={360} alt="Mechanical Keyboard" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <Link href="#">
                      <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Review Keyboad Mechanical Terbaru</a>
                    </Link>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae rerum repellat?</p>
                  <Link href="#">
                    <a className="font-medium text-sm text-white bg-primary py-3 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image src="/img/blog/coffe.jpg" height={200} width={360} alt="Coffe" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <Link href="#">
                      <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Menikmati Coffe Disaat Ngoding</a>
                    </Link>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam repellendus eum.</p>
                  <Link href="#">
                    <a className="font-medium text-sm text-white bg-primary py-3 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}

      {/* Contact Section Start */}
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-lg mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
              <p className="font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas ipsum dicta porro.</p>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
                <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
                <input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="message" className="text-base font-bold text-primary">Pesan</label>
                <textarea type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
              </div>
              <div className="w-full">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer Section Start */}
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">Mahesora</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>okkymahes@gmail.com</p>
              <p>Jalan Tegal Wangi</p>
              <p>Denpasar</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
              <ul className="text-slate-300">
                <li>
                  <Link href="#">
                    <a className="inline-block text-base hover:text-primary mb-3">Programming</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="inline-block text-base hover:text-primary mb-3">Hardware</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="inline-block text-base hover:text-primary mb-3">Gaya Hidup</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <Link href="#home">
                    <a className="inline-block text-base hover:text-primary mb-3">Beranda</a>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <a className="inline-block text-base hover:text-primary mb-3">Tentang Saya</a>
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio">
                    <a className="inline-block text-base hover:text-primary mb-3">Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="#clients">
                    <a className="inline-block text-base hover:text-primary mb-3">Client</a>
                  </Link>
                </li>
                <li>
                  <Link href="#blog">
                    <a className="inline-block text-base hover:text-primary mb-3">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a className="inline-block text-base hover:text-primary mb-3">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              {/* Facebook */}
              <Link href="https://facebook.com/okkymahes">
                <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
              </Link>
              {/* Twitter */}
              <Link href="https://twitter.com/okkymhwr">
                <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
              </Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/okkymahesora/">
                <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                </a>
              </Link>
              {/* Youtube */}
              <Link href="https://www.youtube.com/c/OkkyMaheswara">
                <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </Link>
              {/* Linkedin */}
              <Link href="https://www.linkedin.com/in/okky-maheswara-527719b5/">
                <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </Link>
              {/* Github */}
              <Link href="https://github.com/putuokky">
                <a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg width="20" className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
              </Link>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan 🧡 oleh <Link href="https://www.instagram.com/okkymahesora/"><a target={"_blank"} className="font-bold text-primary">Okky Maheswara</a></Link> menggunakan <Link href="https://tailwindcss.com/"><a target={"_blank"} className="font-bold text-sky-500">Tailwind CSS</a></Link>
            </p>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  )
}
