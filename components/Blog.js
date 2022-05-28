import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-lg mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Tulisan Terkini</h2>
            <p className="font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas ipsum dicta porro.</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
              <Image src="/img/blog/programming.jpg" height={230} width={450} layout="responsive" alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Tips Belajar Programming</a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, similique.</p>
                <Link href="#">
                  <a className="font-medium text-sm text-white bg-primary py-3 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
              <Image src="/img/blog/mechanical-keyboard.jpg" height={230} width={450} layout="responsive" alt="Mechanical Keyboard" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Review Keyboad Mechanical Terbaru</a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae rerum repellat?</p>
                <Link href="#">
                  <a className="font-medium text-sm text-white bg-primary py-3 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
              <Image src="/img/blog/coffe.jpg" height={230} width={450} layout="responsive" alt="Coffe" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Menikmati Coffe Disaat Ngoding</a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam repellendus eum.</p>
                <Link href="#">
                  <a className="font-medium text-sm text-white bg-primary py-3 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
