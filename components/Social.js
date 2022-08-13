import Link from 'next/link'
import { SiFacebook, SiTwitter, SiInstagram, SiYoutube, SiLinkedin, SiGithub } from 'react-icons/si'

export default function Social({ className }) {
  return (
    <>
      {/* Facebook */}
      <Link href="https://facebook.com/">
        <a target="_blank" className={`flex items-center justify-center mr-3 border rounded-full w-9 h-9 hover:border-primary hover:bg-primary hover:text-white ${className}`} title='Facebook'>
          <SiFacebook className='text-xl' />
        </a>
      </Link>
      {/* Twitter */}
      <Link href="https://twitter.com/">
        <a target="_blank" className={`flex items-center justify-center mr-3 border rounded-full w-9 h-9 hover:border-primary hover:bg-primary hover:text-white ${className}`}>
          <SiTwitter className='text-xl' />
        </a>
      </Link>
      {/* Instagram */}
      <Link href="https://www.instagram.com/">
        <a target="_blank" className={`flex items-center justify-center mr-3 border rounded-full w-9 h-9 hover:border-primary hover:bg-primary hover:text-white ${className}`}>
          <SiInstagram className='text-xl' />
        </a>
      </Link>
      {/* Youtube */}
      <Link href="https://www.youtube.com/">
        <a target="_blank" className={`flex items-center justify-center mr-3 border rounded-full w-9 h-9 hover:border-primary hover:bg-primary hover:text-white ${className}`}>
          <SiYoutube className='text-xl' />
        </a>
      </Link>
      {/* Linkedin */}
      <Link href="https://www.linkedin.com/">
        <a target="_blank" className={`flex items-center justify-center mr-3 border rounded-full w-9 h-9 hover:border-primary hover:bg-primary hover:text-white ${className}`}>
          <SiLinkedin className='text-xl' />
        </a>
      </Link>
      {/* Github */}
      <Link href="https://github.com/">
        <a target="_blank" className={`flex items-center justify-center mr-3 border rounded-full w-9 h-9 hover:border-primary hover:bg-primary hover:text-white ${className}`}>
          <SiGithub className='text-xl' />
        </a>
      </Link>
    </>
  )
}
