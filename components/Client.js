import Image from 'next/image'
import Link from 'next/link'

export default function Client() {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">Yang Pernah Bekerjasama</h2>
            <p className="font-medium text-secondary md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, earum. Eum, eius.</p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src="/img/clients/google.svg" height={90} width={270} alt="Google" />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src="/img/clients/gojek.svg" height={25} width={110} alt="Gojek" />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src="/img/clients/tokopedia.svg" height={85} width={400} alt="Tokopedia" />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src="/img/clients/traveloka.svg" height={200} width={500} alt="Traveloka" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
