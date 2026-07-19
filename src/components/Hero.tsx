import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

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
          setTimeout(() => setDeleting(true), 1000)
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
      <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-emerald align-middle" aria-hidden="true" />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_45%)] opacity-80 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.45fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I’m Deepika Mohansivakumar.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            Final-year AI &amp; ML engineering student with hands-on experience building accessible machine learning
            solutions, intelligent software interfaces, and modern web applications.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <Mail size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute -left-6 top-6 h-52 w-52 rounded-full bg-[rgba(37,99,235,0.14)] blur-3xl" />
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-[rgba(37,99,235,0.18)] bg-[#0B1120]/60 p-1 shadow-glow sm:h-96 sm:w-96">
            <div className="overflow-hidden rounded-full bg-[#071A12]">
              <img
                src="/archived/profile.jpeg"
                alt="Profile photo of Deepika Mohansivakumar"
                className="h-80 w-80 rounded-full object-cover sm:h-96 sm:w-96"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
