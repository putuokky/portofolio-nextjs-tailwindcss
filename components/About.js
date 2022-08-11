import Social from './Social'

export default function About() {
  return (
    <section id="about" className="pb-16 pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="mb-3 text-lg font-bold uppercase text-primary">Tentang Saya</h4>
            <h2 className="max-w-md mb-5 text-3xl font-bold text-dark lg:text-4xl dark:text-white">Yuk Gass</h2>
            <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam magni explicabo illum tempore aliquid consequuntur.</p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-dark lg:text-3xl lg:pt-10 dark:text-white">Mari berteman</h3>
            <p className="mb-6 text-base font-medium text-secondary lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis maiores facilis enim mollitia nam dolorem ipsum quisquam?</p>
            <div className="flex items-center">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
