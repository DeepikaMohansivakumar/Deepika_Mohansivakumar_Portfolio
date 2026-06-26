import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'courses', label: 'Courses' },
  { id: 'contact', label: 'Contact' },
]
const SECTION_IDS = SECTIONS.map((s) => s.id)

interface Props {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-black/10 bg-white/70 px-5 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <a href="#home" className="font-display text-base font-semibold text-ink dark:text-white">
          Deepika<span className="gradient-text">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                  activeId === s.id
                    ? 'bg-gradient-to-r from-electric to-violet text-white'
                    : 'text-slate-600 hover:text-electric dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-ink md:hidden dark:border-white/15 dark:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-2xl border border-black/10 bg-white/90 p-3 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-ink/95"
          >
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 font-mono text-sm text-ink hover:bg-electric/10 dark:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
