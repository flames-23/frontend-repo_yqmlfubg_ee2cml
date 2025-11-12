import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent! I\'ll get back to you shortly.' })
        e.currentTarget.reset()
      } else {
        setStatus({ type: 'error', message: data.detail || 'Something went wrong.' })
      }
    } catch (e) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-[#070A0F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Let's build something legendary</h2>
          <p className="mt-2 text-white/60">Tell me about your project — the more ambitious, the better.</p>
        </div>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
          <input name="email" required type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
          <input name="subject" placeholder="Subject" className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
          <textarea name="message" required rows="5" placeholder="Your message" className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60">
              {loading ? 'Sending...' : 'Send message'}
            </button>
            {status?.type === 'success' && <p className="text-emerald-300">{status.message}</p>}
            {status?.type === 'error' && <p className="text-red-300">{status.message}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact