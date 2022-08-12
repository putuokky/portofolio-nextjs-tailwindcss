import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [activeNavbar, setActiveNavbar] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-10 flex items-center w-full bg-transparent navbar-fixed">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link href="/">
              <a className="block py-6 font-serif text-3xl font-bold uppercase text-primary hover:text-primary/70">Joe Marley</a>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button type="button" className="absolute block right-4 lg:hidden" onClick={() => setActiveNavbar(!activeNavbar)}>
              <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${activeNavbar ? 'rotate-45' : ''}`}></span>
              <span className={`hamburger-line transition duration-300 ease-in-out ${activeNavbar ? 'scale-0' : ''}`}></span>
              <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${activeNavbar ? '-rotate-45' : ''}`}></span>
            </button>
            <nav onClick={() => setActiveNavbar(!activeNavbar)} className={`absolute py-5 bg-white shadow-lg rounded-b-xl max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:lg:bg-transparent dark:shadow-slate-700 ${activeNavbar ? '' : 'hidden'}`}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link href="#">
                    <a className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white">Beranda</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#about">
                    <a className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white">Tentang Saya</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#portfolio">
                    <a className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white">Portfolio</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#clients">
                    <a className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white">Clients</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#blog">
                    <a className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white">Blog</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#contact">
                    <a className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white">Contact</a>
                  </Link>
                </li>
                <li className="flex items-center pl-8 mt-3 lg:mt-0">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    <input type="checkbox" className="hidden" id="dark-toggle" />
                    <label htmlFor="dark-toggle">
                      <div className="flex items-center h-5 p-1 rounded-full cursor-pointer w-9 bg-slate-500">
                        <div className="w-4 h-4 transition duration-300 ease-in-out bg-white rounded-full toggle-circle"></div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
