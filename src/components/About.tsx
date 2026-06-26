import { motion } from 'framer-motion'
import { GraduationCap, Sparkles, Target, Users } from 'lucide-react'

const traits = [
  { icon: Target, label: 'Solving real-world problems with AI' },
  { icon: Sparkles, label: 'Strong analytical thinking' },
  { icon: GraduationCap, label: 'Fast learner' },
  { icon: Users, label: 'Team player' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">About</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Final-year engineer, building toward an AI career
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-slate-600 dark:text-slate-300"
          >
            <p>
              I'm a final-year B.E. Computer Science &amp; Engineering (AI &amp; ML) student at Paavai Engineering
              College, currently maintaining a CGPA of <strong className="text-ink dark:text-white">9.22</strong>.
            </p>
            <p>
              I'm passionate about Artificial Intelligence, Machine Learning, Deep Learning, NLP, and full-stack
              development — and I'm especially drawn to using AI to solve real-world problems, from accessibility
              (sign-language recognition) to agriculture (direct farmer-to-buyer marketplaces).
            </p>
            <p>
              I'm currently looking for <strong className="text-ink dark:text-white">Internship</strong> opportunities where I can keep learning while contributing to real products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card grid grid-cols-1 gap-4 p-6 sm:grid-cols-2"
          >
            {traits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <span className="rounded-lg bg-gradient-to-br from-electric/20 to-violet/20 p-2 text-electric">
                  <Icon size={18} />
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
