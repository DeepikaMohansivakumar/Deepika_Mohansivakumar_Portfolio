import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'

const ROLES = ['AI Engineer', 'Machine Learning Enthusiast', 'Full Stack Developer', 'Python Developer', 'Problem Solver']

function TypingRoles() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index]
    const speed = deleting ? 35 : 60
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % ROLES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span className="gradient-text font-display font-semibold">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-electric align-middle h-6" aria-hidden="true" />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center sm:text-left"
        >
          <p className="section-label mb-4">Final-Year AI &amp; ML Engineering Student</p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl dark:text-white">
            Deepika Mohansivakumar
          </h1>
          <p className="mt-4 h-8 text-xl sm:text-2xl">
            <TypingRoles />
          </p>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-300 sm:max-w-xl">
            Passionate Artificial Intelligence &amp; Machine Learning student with a strong interest in developing
            intelligent systems, modern web applications, and real-world AI solutions. I enjoy solving practical
            problems through technology and continuously learning new skills to become an industry-ready software
            engineer.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me <Mail size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
