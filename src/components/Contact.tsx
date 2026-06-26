import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'

const contactLinks = [
  { icon: Mail, label: 'deepika.mohansivakumar2006@gmail.com', href: 'mailto:deepika.mohansivakumar2006@gmail.com' },
  { icon: MapPin, label: 'Udumalpet, Tamil Nadu, India', href: undefined },
  { icon: Linkedin, label: 'linkedin.com/in/deepika-mohansivakumar', href: 'https://www.linkedin.com/in/deepika-mohansivakumar' },
  { icon: Github, label: 'github.com/DeepikaMohansivakumar', href: 'https://github.com/DeepikaMohansivakumar/' },
]

export default function Contact() {

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">Let's build something</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass-card mx-auto max-w-xl p-7"
          >
            <ul className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => {
                const content = (
                  <div className="flex min-w-0 items-center gap-4 rounded-3xl px-4 py-3 transition hover:bg-electric/10 dark:hover:bg-white/5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 text-sm font-medium text-slate-700 dark:text-slate-200 break-words">
                      {label}
                    </span>
                  </div>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
