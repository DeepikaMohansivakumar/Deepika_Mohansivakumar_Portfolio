import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">Where I've worked</h2>
        </motion.div>

        <div className="mt-10 border-l border-black/10 pl-6 sm:mt-12 sm:pl-8 dark:border-white/10">
          {experience.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-2"
            >
              <span className="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-electric to-violet shadow-glow sm:-left-[34px]" />
              <span className="font-mono text-xs text-electric">{item.duration}</span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-white">{item.role}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.org} · {item.location}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
