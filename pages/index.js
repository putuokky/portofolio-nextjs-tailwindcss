export default function Home() {
  return (
    <>
      {/* Hero Section Start */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">Hallo Semua 🤞👏, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Okky Maheswara</span></h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">Lecturer & <span className="text-dark">Content Creator</span></h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">Belajar web programming itu mudah dan menyenangkan bukan. <span className="text-dark font-bold">bukann!</span></p>
              <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src="img/sandhika.png" alt="Okky Maheswara" className="max-w-full mx-auto" />
                <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#14B8A6" d="M23.1,-24.1C37.2,-9,61,-4.5,65.6,4.7C70.3,13.9,56,27.7,41.9,28.3C27.7,28.9,13.9,16.2,3.7,12.5C-6.4,8.7,-12.8,14,-26.8,13.4C-40.8,12.8,-62.4,6.4,-69.3,-6.9C-76.1,-20.1,-68.3,-40.3,-54.3,-55.4C-40.3,-70.5,-20.1,-80.5,-7.8,-72.7C4.5,-64.9,9,-39.2,23.1,-24.1Z" transform="translate(100 100) scale(1.1)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-3">

      </section>
      {/* About Section End */}
    </>
  )
}
