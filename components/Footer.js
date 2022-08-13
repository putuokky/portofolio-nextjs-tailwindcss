import Link from 'next/link'
import Name from './Name'
import Social from './Social'

export default function Footer() {
  return (
    <footer className="pt-10 pb-12 bg-dark dark:opacity-95">
      <div className="container">
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-12 font-medium text-slate-300 md:w-1/3'>
            <h2 className='mb-5 text-4xl font-bold text-white capitalize'><Name /></h2>
            <h3 className='mb-2 text-2xl font-bold'>Hubungi Kami</h3>
            <p>nama-email@gmail.com</p>
            <p>Jalan Raya Sesetan</p>
            <p>Denpasar, Bali</p>
          </div>
          <div className='w-full px-4 mb-12 md:w-1/3'>
            <h3 className='mb-5 text-xl font-semibold text-white'>Kategori Tulisan</h3>
            <ul className='text-slate-300'>
              <li>
                <Link href='#'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Programming</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Teknologi</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Gaya Hidup</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full px-4 mb-12 md:w-1/3'>
            <h3 className='mb-5 text-xl font-semibold text-white'>Tautan</h3>
            <ul className='text-slate-300'>
              <li>
                <Link href='#'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Beranda</a>
                </Link>
              </li>
              <li>
                <Link href='#about'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Tentang Saya</a>
                </Link>
              </li>
              <li>
                <Link href='#portfolio'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href='#clients'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Clients</a>
                </Link>
              </li>
              <li>
                <Link href='#blog'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='#contact'>
                  <a className='inline-block mb-3 text-base hover:text-primary'>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            <Social className="text-slate-300" />
          </div>
          <p className="text-xs font-medium text-center text-slate-500">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.<br />
            Dibuat dengan sepenuh 🧡 oleh <span className='font-bold text-primary'>Developer</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
