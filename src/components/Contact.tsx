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
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">Let's build something</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass-card mx-auto w-full max-w-2xl p-5 sm:p-7 lg:p-8"
          >
            <ul className="space-y-3 sm:space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => {
                const content = (
                  <div className="flex w-full min-w-0 items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-left transition hover:border-electric/20 hover:bg-electric/10 dark:hover:bg-white/5 sm:gap-4 sm:px-4 lg:px-5 lg:py-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-electric/10 text-electric lg:h-12 lg:w-12">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-medium leading-relaxed text-slate-700 break-words dark:text-slate-200">
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
                        className="block w-full"
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
