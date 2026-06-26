import { motion } from 'framer-motion'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Education</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">Academic background</h2>
        </motion.div>

        <div className="mt-12 border-l border-black/10 pl-8 dark:border-white/10">
          {education.map((item, i) => (
            <motion.div
              key={item.school + item.program}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-9 last:pb-0"
            >
              <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-cyan to-electric shadow-glow" />
              <span className="font-mono text-xs text-electric">{item.duration}</span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-white">{item.program}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.school}</p>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
