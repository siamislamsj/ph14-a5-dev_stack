import Logo from './Logo'

function Footer() {
  return (
    <footer id="about" className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 md:px-6 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-xs leading-5 text-slate-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex gap-4 text-xs text-slate-600">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div id="projects">
          <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">Product</h4>
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a className="block" href="#home">Home</a>
            <a className="block" href="#technologies">Technologies</a>
            <a className="block" href="#projects">Projects</a>
          </div>
        </div>

        <div id="contact">
          <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">Company</h4>
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a className="block" href="#about">About</a>
            <a className="block" href="#contact">Contact</a>
            <a className="block" href="#">Careers</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">Legal</h4>
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a className="block" href="#">Privacy Policy</a>
            <a className="block" href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-slate-100 px-5 py-7 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  )
}

export default Footer
