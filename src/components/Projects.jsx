import React, { useEffect, useState } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/projects`)
        const data = await res.json()
        setProjects(data.projects || [])
      } catch (e) {
        setError('Failed to load projects')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="work" className="relative bg-[#070A0F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold">Spotlight Work</h2>
          <p className="text-sm text-white/60">Pulled live from the backend</p>
        </div>
        {loading && <p className="text-white/70">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                {p.spotlight && <span className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-2 py-1 text-xs">Spotlight</span>}
              </div>
              <p className="mt-3 text-sm text-white/70">{p.description}</p>
              {p.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span key={i} className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-5 flex gap-3">
                {p.url && <a href={p.url} target="_blank" className="text-sm text-fuchsia-300 hover:text-fuchsia-200">Live</a>}
                {p.source && <a href={p.source} target="_blank" className="text-sm text-indigo-300 hover:text-indigo-200">Code</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects