import Image from 'next/image'

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-lg mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Project Terbaru</h2>
            <p className="font-medium text-secondary md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae cumque sequi maiores iure eum, iste voluptas blanditiis repudiandae perferendis!</p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center lg:w-10/12 lg:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image src="/img/portfolio/1.png" alt="Portfolio 1" height={400} width={650} />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Portfolio Pertama Saya</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image src="/img/portfolio/2.png" alt="Portfolio 2" height={400} width={650} />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Portfolio Kedua Saya</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image src="/img/portfolio/3.png" alt="Portfolio 2" height={400} width={650} />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Portfolio Ketiga Saya</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image src="/img/portfolio/4.png" alt="Portfolio 4" height={400} width={650} />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Portfolio Keempat Saya</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt quisquam distinctio.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
