import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [activeNavbar, setActiveNavbar] = useState(false);

  return (
    <header className="top-0 left-0 w-full flex items-center z-10 sticky bg-transparent navbar-fixed">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link href="/">
              <a className="font-bold text-3xl text-primary block py-6 uppercase font-serif hover:text-primary/70">Mahesora</a>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button type="button" className="block absolute right-4 lg:hidden" onClick={() => setActiveNavbar(!activeNavbar)}>
              <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${activeNavbar ? 'rotate-45' : ''}`}></span>
              <span className={`hamburger-line transition duration-300 ease-in-out ${activeNavbar ? 'scale-0' : ''}`}></span>
              <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${activeNavbar ? '-rotate-45' : ''}`}></span>
            </button>
            <nav onClick={() => setActiveNavbar(!activeNavbar)} className={`absolute py-5 bg-white shadow-lg rounded-b-xl max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:lg:bg-transparent dark:shadow-slate-700 ${activeNavbar ? '' : 'hidden'}`}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link href="#about">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Tentang Saya</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#portfolio">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Portfolio</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#clients">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Clients</a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#blog">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Blog</a>
                  </Link>
                </li>
                {/* <li className="mt-3 lg:mt-0 flex items-center pl-8">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500">light</span>
                      <input type="checkbox" className="hidden" id="dark-toggle" />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <span className="ml-2 text-sm text-slate-500">dark</span>
                    </div>
                  </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
