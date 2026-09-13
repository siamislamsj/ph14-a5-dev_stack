import { useState } from 'react'
import Logo from './Logo'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-5 md:px-6">
        <div className="hidden md:block">
          <Logo />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-slate-800 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="md:hidden">
          <Logo />
        </div>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={index === 0 ? 'font-medium text-pink-500' : 'text-slate-500 hover:text-slate-900'}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm">
          <button className="hidden text-slate-600 sm:block">Sign In</button>
          <button className="rounded-full bg-[#e31583] px-5 py-2.5 font-semibold text-white">Sign Up</button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
