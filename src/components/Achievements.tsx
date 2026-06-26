import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  decimals?: number
  suffix?: string
  label: string
}

const STATS: Stat[] = [
  { value: 9.22, decimals: 2, label: 'CGPA' },
  { value: 2, suffix: '', label: 'Major Projects' },
  { value: 1, label: 'Internship' },
  { value: 10, suffix: '+', label: 'Technologies Learned' },
]

function Counter({ value, decimals = 0, suffix = '' }: Stat) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(value * progress)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref} className="gradient-text font-display text-4xl font-bold sm:text-5xl">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Achievements</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">By the numbers</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card flex flex-col items-center justify-center gap-2 px-4 py-8 text-center"
            >
              <Counter {...stat} />
              <span className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
