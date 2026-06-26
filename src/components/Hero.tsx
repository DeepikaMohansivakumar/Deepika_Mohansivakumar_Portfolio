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

function NeuralGraphic() {
  // A small abstract node-graph, evoking a neural network rather than a generic illustration.
  const nodes = [
    { x: 40, y: 60 }, { x: 40, y: 140 }, { x: 40, y: 220 },
    { x: 160, y: 30 }, { x: 160, y: 100 }, { x: 160, y: 170 }, { x: 160, y: 250 },
    { x: 280, y: 70 }, { x: 280, y: 150 }, { x: 280, y: 220 },
  ]
  const links: [number, number][] = [
    [0, 3], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6],
    [3, 7], [4, 7], [4, 8], [5, 8], [5, 9], [6, 9],
  ]

  return (
    <motion.svg
      viewBox="0 0 320 280"
      className="w-full max-w-md animate-float"
      role="img"
      aria-label="Abstract neural network graphic"
    >
      {links.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="url(#lineGrad)" strokeWidth="1.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.2, delay: i * 0.06, ease: 'easeOut' }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x} cy={n.y} r={i % 3 === 0 ? 6 : 4.5}
          fill={i % 3 === 0 ? '#06B6D4' : '#3B82F6'}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
        />
      ))}
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">Final-Year AI &amp; ML Engineering Student</p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl dark:text-white">
            Deepika Mohansivakumar
          </h1>
          <p className="mt-4 h-8 text-xl sm:text-2xl">
            <TypingRoles />
          </p>
          <p className="mt-6 max-w-xl text-base text-slate-600 dark:text-slate-300">
            Passionate Artificial Intelligence &amp; Machine Learning student with a strong interest in developing
            intelligent systems, modern web applications, and real-world AI solutions. I enjoy solving practical
            problems through technology and continuously learning new skills to become an industry-ready software
            engineer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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
