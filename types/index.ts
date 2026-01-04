export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}