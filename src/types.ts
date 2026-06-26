export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  id: string
  title: string
  tagline: string
  categories: string[]
  description: string
  tech: string[]
  features?: string[]
  details?: { label: string; items: string[] }[]
  github?: string
  liveDemo?: string
  gallery?: { id: string; label: string }[]
}

export interface ExperienceItem {
  role: string
  org: string
  location: string
  duration: string
  bullets: string[]
}

export interface EducationItem {
  school: string
  program: string
  duration: string
  detail: string
}
