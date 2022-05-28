import Link from 'next/link'
import Social from './Social'

export default function About() {
  return (
    <section id="about" className="pt-36 pb-16 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
            <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-white">Yuk Belajar cuyyy</h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam magni explicabo illum tempore aliquid consequuntur.</p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-white">Mari berteman</h3>
            <p className="font-medium text-base text-secondary mb-6  lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis maiores facilis enim mollitia nam dolorem ipsum quisquam?</p>
            <div className="flex items-center">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
