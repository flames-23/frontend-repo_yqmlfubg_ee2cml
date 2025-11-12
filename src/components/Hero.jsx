import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#070A0F]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#070A0F]/20 to-[#070A0F]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070A0F] to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center sm:pt-36">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          Futuristic • Cosmic • Immersive
        </span>
        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Building Luxurious, Futuristic Experiences
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          I craft premium, high-performance interfaces infused with neon futurism, holographic gradients, and delightful micro-interactions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
            View Work
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.8)] transition hover:shadow-[0_0_50px_-8px_rgba(99,102,241,0.9)]">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero