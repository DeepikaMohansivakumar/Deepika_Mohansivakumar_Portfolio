import { useState, type MouseEvent } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

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

export default function Navbar() {
  const activeId = useActiveSection(SECTION_IDS)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getNavbarOffset = () => {
    if (typeof window === 'undefined') return 80
    return window.innerWidth < 640 ? 72 : 88
  }

  const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.getElementById(id)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - getNavbarOffset()
      window.scrollTo({ top, behavior: 'smooth' })
      window.history.replaceState(null, '', `#${id}`)
    } else {
      window.location.hash = `#${id}`
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-4 sm:py-4">
      <nav className="mx-auto flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2.5 shadow-[0_12px_40px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:px-4">
        <a
          href="#home"
          className="truncate font-display text-sm font-semibold tracking-tight text-[#F8FAFC] sm:text-base"
          onClick={(e) => handleSectionClick(e, 'home')}
        >
          Deepika Mohansivakumar
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-[#F8FAFC] transition hover:bg-white/20 md:hidden"
          aria-label="Toggle navigation menu"
        >
          ⋯
        </button>

        <ul className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleSectionClick(e, s.id)}
                className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] transition-all duration-200 ${
                  activeId === s.id
                    ? 'bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.18)]'
                    : 'text-[#F8FAFC] hover:bg-[rgba(56,189,248,0.12)] hover:text-[#38BDF8]'
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {isMenuOpen && (
          <div className="absolute left-3 right-3 top-full mt-2 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl md:hidden">
            <ul className="flex flex-col gap-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => handleSectionClick(e, s.id)}
                    className={`flex rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeId === s.id
                        ? 'bg-[#2563EB] text-white'
                        : 'text-slate-200 hover:bg-white/10 hover:text-[#38BDF8]'
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
