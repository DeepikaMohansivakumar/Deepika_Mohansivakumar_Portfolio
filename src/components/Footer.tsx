import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
            Designed &amp; developed by Deepika Mohansivakumar © {new Date().getFullYear()}
          </p>
          <p className="font-display text-sm font-semibold text-ink dark:text-white">
            Thank you for visiting my profile
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/deepika-mohansivakumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink hover:border-electric hover:text-electric dark:border-white/10 dark:text-white"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="https://github.com/DeepikaMohansivakumar" // TODO: replace with real GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink hover:border-electric hover:text-electric dark:border-white/10 dark:text-white"
          >
            <Github size={15} />
          </a>
          <a
            href="mailto:deepika.mohansivakumar2006@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink hover:border-electric hover:text-electric dark:border-white/10 dark:text-white"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
