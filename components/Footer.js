import Link from 'next/link'
import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className="bg-dark pt-10 pb-12 dark:opacity-95">
      <div className="container">
        <div className="w-full">
          <div className="flex items-center justify-center mb-5">
            <Social />
          </div>
          <p className="font-medium text-xs text-slate-500 text-center">
            Dibuat dengan sepenuh 🧡 oleh <Link href="/"><a className="font-bold text-primary">Okky Maheswara</a></Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
