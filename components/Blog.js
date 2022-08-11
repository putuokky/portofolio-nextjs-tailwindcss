import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  return (
    <section id="blog" className="pb-32 pt-36 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-lg mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl dark:text-white">Tulisan Terkini</h2>
            <p className="font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas ipsum dicta porro.</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-800">
              <Image src="/img/blog/programming.jpg" height={230} width={450} layout="responsive" alt="Programming" className="w-full" />
              <div className="px-6 py-8">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary dark:text-white">Tips Belajar Programming</a>
                  </Link>
                </h3>
                <p className="mb-6 text-base font-medium truncate text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, similique.</p>
                <Link href="#">
                  <a className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:opacity-80">Baca Selengkapnya</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-800">
              <Image src="/img/blog/mechanical-keyboard.jpg" height={230} width={450} layout="responsive" alt="Mechanical Keyboard" className="w-full" />
              <div className="px-6 py-8">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary dark:text-white">Review Keyboad Mechanical Terbaru</a>
                  </Link>
                </h3>
                <p className="mb-6 text-base font-medium truncate text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae rerum repellat?</p>
                <Link href="#">
                  <a className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:opacity-80">Baca Selengkapnya</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-800">
              <Image src="/img/blog/coffe.jpg" height={230} width={450} layout="responsive" alt="Coffe" className="w-full" />
              <div className="px-6 py-8">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary dark:text-white">Menikmati Coffe Disaat Ngoding</a>
                  </Link>
                </h3>
                <p className="mb-6 text-base font-medium truncate text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam repellendus eum.</p>
                <Link href="#">
                  <a className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:opacity-80">Baca Selengkapnya</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
