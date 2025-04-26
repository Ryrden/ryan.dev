export const languages: Record<keyof typeof ui, string> = {
  en: 'English',
  "pt-br": 'Portuguese (Brazil)',
};

export const defaultLang = 'en';

export const languageFlags: Record<string, string> = {
  'en': 'flag-us',
  'pt-br': 'flag-br'
}

export const ui: Record<string, { [key: string]: string }> = {
  en: {
    // Navigation & Header
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.cv': 'CV ↗',
    
    // Site metadata
    'site.title': 'Ryan Souza',
    'site.description': 'Personal blog of Ryan Souza',
    'site.author': 'Ryan Souza',
    
    // Page titles and descriptions
    'work.title': 'Work',
    'work.description': 'Where I\'ve been and what I\'ve done.',
    'blog.title': 'Blog',
    'blog.description': 'What I\'m thinking and learning about.',
    'projects.title': 'Projects',
    'projects.description': 'Some projects I\'ve worked on.',
    'search.title': 'Search',
    'search.description': 'Search all posts and projects by keyword.',
    
    // Components
    'search.placeholder': 'What are you looking for?',
    'search.results': '{0} Results found for \'{1}\'',
    'projects.filters': 'Filters',
    'projects.showing': 'SHOWING {0} OF {1} PROJECTS',
    'blog.filters': 'Filters',
    'blog.showing': 'SHOWING {0} OF {1} POSTS',
    'arrowCard.post': 'post',
    'arrowCard.project': 'project',
    
    // Accessibility
    'a11y.search': 'Search blog posts and projects on Ryan Souza',
    'a11y.theme': 'Toggle light and dark theme',
    'a11y.drawer': 'Toggle drawer open and closed',
    'a11y.language': 'Select language',
  },
  "pt-br": {
    // Navigation & Header
    'nav.home': 'Início',
    'nav.work': 'Trabalho',
    'nav.blog': 'Blog',
    'nav.projects': 'Projetos',
    'nav.cv': 'CV ↗',
    
    // Site metadata
    'site.title': 'Ryan Souza',
    'site.description': 'Blog pessoal de Ryan Souza',
    'site.author': 'Ryan Souza',
    
    // Page titles and descriptions
    'work.title': 'Trabalho',
    'work.description': 'Por onde já passei e o que já fiz.',
    'blog.title': 'Blog',
    'blog.description': 'O que ando pensando e aprendendo.',
    'projects.title': 'Projetos',
    'projects.description': 'Alguns projetos que já fiz.',
    'search.title': 'Busca',
    'search.description': 'Busque todos as publicações e projetos por palavra-chave.',
    
    // Components
    'search.placeholder': 'Pelo o que você está buscando?',
    'search.results': '{0} Resultados encontrados para \'{1}\'',
    'projects.filters': 'Filtros',
    'projects.showing': 'EXIBINDO {0} DE {1} PROJETOS',
    'blog.filters': 'Filtros',
    'blog.showing': 'EXIBINDO {0} DE {1} PUBLICAÇÕES',
    'arrowCard.post': 'post',
    'arrowCard.project': 'projeto',
    
    // Accessibility
    'a11y.search': 'Buscar postagens de blog e projetos em Ryan Souza',
    'a11y.theme': 'Alternar entre temas claro e escuro',
    'a11y.drawer': 'Abrir e fechar o menu',
    'a11y.language': 'Selecionar idioma',
  },
} as const;