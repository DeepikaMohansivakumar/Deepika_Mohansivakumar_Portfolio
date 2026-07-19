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

  const getNavbarOffset = () => {
    if (typeof window === 'undefined') return 80
    return window.innerWidth < 640 ? 72 : 88
  }

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="mx-auto flex w-full flex-wrap items-center justify-between gap-3 rounded-full border border-[rgba(30,58,138,0.22)] bg-[rgba(17,24,39,0.22)] px-5 py-3 backdrop-blur-xl shadow-soft">
        <a href="#home" className="inline-flex items-center gap-2 font-display text-base font-semibold tracking-tight text-[#F8FAFC]">
          Deepika Mohansivakumar
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-[0_0_18px_rgba(37,99,235,0.35)]" />
        </a>

        <ul className="flex flex-wrap justify-center gap-3 md:flex-1 md:justify-center">
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
      </nav>
    </header>
  )
}
