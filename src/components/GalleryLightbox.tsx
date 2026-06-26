import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'

interface GalleryItem {
  id: string
  label: string
}

interface Props {
  items: GalleryItem[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function GalleryLightbox({ items, activeIndex, onClose, onNavigate }: Props) {
  if (activeIndex === null) return null
  const item = items[activeIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.label} screenshot`}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-surface"
        >
          {/* Placeholder visual — swap this block for a real <img src="..." /> once screenshots are available */}
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-electric/10 via-violet/10 to-cyan/10 text-slate-400">
            <ImageOff size={36} />
            <p className="font-mono text-sm">{item.label} — screenshot placeholder</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          >
            <X size={18} />
          </button>

          <button
            onClick={() => onNavigate((activeIndex - 1 + items.length) % items.length)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => onNavigate((activeIndex + 1) % items.length)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
