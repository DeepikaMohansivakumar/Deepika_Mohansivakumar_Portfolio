import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ImageOff } from 'lucide-react'
import { projects } from '../data/projects'
import GalleryLightbox from './GalleryLightbox'

export default function Projects() {
  const [galleryProjectId, setGalleryProjectId] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const galleryProject = projects.find((p) => p.id === galleryProjectId)

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Featured Projects</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">Things I've built</h2>
        </motion.div>

        <div className="mt-12 space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card overflow-hidden p-7 sm:p-9 transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <span key={cat} className="rounded-full bg-electric/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-electric">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.tagline}</p>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-ink hover:border-electric hover:text-electric dark:border-white/15 dark:text-white"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-ink hover:border-electric hover:text-electric dark:border-white/15 dark:text-white"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  ) : (
                    <span
                      className="flex h-10 items-center rounded-full border border-dashed border-black/15 px-3 font-mono text-[11px] text-slate-400 dark:border-white/15"
                      title="Live demo coming soon"
                    >
                      Demo soon
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {project.features && (
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-electric to-violet" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {project.details && (
                <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.details.map((d) => (
                    <div key={d.label}>
                      <h4 className="mb-2 font-mono text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {d.label}
                      </h4>
                      <ul className="space-y-1.5">
                        {d.items.map((it) => (
                          <li key={it} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {project.gallery && (
                <div className="mt-7">
                  <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Project Gallery
                  </h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {project.gallery.map((g, idx) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          setGalleryProjectId(project.id)
                          setActiveIndex(idx)
                        }}
                        className="group flex aspect-video flex-col items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-gradient-to-br from-electric/5 via-violet/5 to-cyan/5 text-slate-400 transition-colors hover:border-electric/50 dark:border-white/10"
                      >
                        <ImageOff size={18} className="transition-transform group-hover:scale-110" />
                        <span className="px-2 text-center font-mono text-[10px]">{g.label}</span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    Placeholder tiles — click to preview the lightbox. Swap in real screenshots when ready.
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      {galleryProject?.gallery && (
        <GalleryLightbox
          items={galleryProject.gallery}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={(idx) => setActiveIndex(idx)}
        />
      )}
    </section>
  )
}
