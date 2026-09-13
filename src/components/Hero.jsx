import bannerStack from '../assets/banner-stack.png'

function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-20 md:grid-cols-2 md:px-6 md:pb-28 md:pt-28">
      <div>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[56px]">
          Build Your Ideal
          <span className="brand-gradient block">Development Stack</span>
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="brand-bg rounded-lg px-5 py-3 text-sm font-semibold text-white"
          >
            Explore Technologies
          </a>
          <a
            href="#technologies"
            className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={bannerStack} alt="" className="w-full max-w-[330px] object-contain sm:max-w-[370px]"
        />
      </div>
    </section>
  )
}

export default Hero
