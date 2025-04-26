import type { Site, Page, Links, Socials } from "@types"
import { defaultLang, ui } from "./i18n/ui"
import { useTranslations } from "./i18n/utils"

// Use the default language for initial values
const t = useTranslations(defaultLang)

// Global
export const SITE: Site = {
  TITLE: t('site.title'),
  DESCRIPTION: t('site.description'),
  AUTHOR: t('site.author'),
}

// Work Page
export const WORK: Page = {
  TITLE: t('work.title'),
  DESCRIPTION: t('work.description'),
}

// Blog Page
export const BLOG: Page = {
  TITLE: t('blog.title'),
  DESCRIPTION: t('blog.description'),
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: t('projects.title'),
  DESCRIPTION: t('projects.description'),
}

// Search Page
export const SEARCH: Page = {
  TITLE: t('search.title'),
  DESCRIPTION: t('search.description'),
}

// Links
export const LINKS: Links = [
  { 
    TEXT: t('nav.home'), 
    HREF: "/", 
  },
  { 
    TEXT: t('nav.work'), 
    HREF: "/work", 
  },
  { 
    TEXT: t('nav.blog'), 
    HREF: "/blog", 
  },
  { 
    TEXT: t('nav.projects'), 
    HREF: "/projects", 
  },
  {
    TEXT: t('nav.cv'),
    HREF: "https://drive.google.com/file/d/19pqHEiFgfk3KVx_rZrWjyfyNAXi1a0jI/view?usp=sharing",
    EXTERNAL: true,
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "ryanssteles@gmail.com",
    HREF: "mailto:ryanssteles@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "ryrden",
    HREF: "https://github.com/ryrden"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ryan25",
    HREF: "https://www.linkedin.com/in/ryan25/",
  },
]

