import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070A0F] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-black/20 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Flames Dev — Crafted in the cosmos.
      </footer>
    </div>
  )
}

export default App
