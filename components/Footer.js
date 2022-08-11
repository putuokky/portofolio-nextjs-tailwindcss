import Social from './Social'

export default function Footer() {
  return (
    <footer className="pt-10 pb-12 bg-dark dark:opacity-95">
      <div className="container">
        <div className="w-full">
          <div className="flex items-center justify-center mb-5">
            <Social />
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
