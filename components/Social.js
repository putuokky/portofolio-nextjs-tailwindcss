import Link from 'next/link'
import { SiFacebook, SiTwitter, SiInstagram, SiYoutube, SiLinkedin, SiGithub } from 'react-icons/si'

export default function Social() {
  return (
    <>
      {/* Facebook */}
      <Link href="https://facebook.com/">
        <a target="_blank" className="flex items-center justify-center mr-3 border rounded-full w-9 h-9 border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" title='Facebook'>
          <SiFacebook className='text-xl' />
        </a>
      </Link>
      {/* Twitter */}
      <Link href="https://twitter.com/">
        <a target="_blank" className="flex items-center justify-center mr-3 border rounded-full w-9 h-9 border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
          <SiTwitter className='text-xl' />
        </a>
      </Link>
      {/* Instagram */}
      <Link href="https://www.instagram.com/">
        <a target="_blank" className="flex items-center justify-center mr-3 border rounded-full w-9 h-9 border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
          <SiInstagram className='text-xl' />
        </a>
      </Link>
      {/* Youtube */}
      <Link href="https://www.youtube.com/">
        <a target="_blank" className="flex items-center justify-center mr-3 border rounded-full w-9 h-9 border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
          <SiYoutube className='text-xl' />
        </a>
      </Link>
      {/* Linkedin */}
      <Link href="https://www.linkedin.com/">
        <a target="_blank" className="flex items-center justify-center mr-3 border rounded-full w-9 h-9 border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
          <SiLinkedin className='text-xl' />
        </a>
      </Link>
      {/* Github */}
      <Link href="https://github.com/">
        <a target="_blank" className="flex items-center justify-center mr-3 border rounded-full w-9 h-9 border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
          <SiGithub className='text-xl' />
        </a>
      </Link>
    </>
  )
}
