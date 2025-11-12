import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <a href="#" className="text-sm font-semibold tracking-wide text-white/90">FLAMES.DEV</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#work" className="text-sm text-white/80 hover:text-white">Work</a>
            <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Let's Talk</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar