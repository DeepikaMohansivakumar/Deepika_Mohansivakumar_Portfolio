import { Moon, Sun } from 'lucide-react'

interface Props {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[rgba(30,58,138,0.22)] bg-[rgba(17,24,39,0.22)] px-3 text-sm font-semibold text-[#F8FAFC] transition-colors hover:border-[#2563EB] hover:bg-[rgba(56,189,248,0.14)]"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
