export const languages: Record<keyof typeof ui, string> = {
  en: 'English',
  "pt-br": 'Portuguese (Brazil)',
};

export const defaultLang = 'en';

export const languageFlags: Record<string, string> = {
  'en': 'flag-us',
  'pt-br': 'flag-br'
}

export const localeSettings: Record<string, string> = {
  'en': 'en-US',
  'pt-br': 'pt-BR'
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
    'projects.back': 'Back to projects',
    'projects.viewDemo': 'View Demo',
    'projects.viewRepo': 'View Repository',
    'blog.filters': 'Filters',
    'blog.showing': 'SHOWING {0} OF {1} POSTS',
    'blog.back': 'Back to blog',
    'arrowCard.post': 'post',
    'arrowCard.project': 'project',
    
    // Navigation
    'navigation.previous': 'Previous',
    'navigation.next': 'Next',
    
    // Comments
    'comments.construction': '🚧 Comments section under construction 🚧',
    
    // Footer
    'footer.backToTop': 'Back to top',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.copyright': 'All rights reserved',
    'footer.allSystemsNormal': 'All systems normal',
    
    // Accessibility
    'a11y.search': 'Search blog posts and projects on Ryan Souza',
    'a11y.theme': 'Toggle light and dark theme',
    'a11y.drawer': 'Toggle drawer open and closed',
    'a11y.language': 'Select language',
    'a11y.backToTop': 'Back to top',
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
    'projects.back': 'Voltar para projetos',
    'projects.viewDemo': 'Ver Demonstração',
    'projects.viewRepo': 'Ver Repositório',
    'blog.filters': 'Filtros',
    'blog.showing': 'EXIBINDO {0} DE {1} PUBLICAÇÕES',
    'blog.back': 'Voltar para o blog',
    'arrowCard.post': 'post',
    'arrowCard.project': 'projeto',
    
    // Navigation
    'navigation.previous': 'Anterior',
    'navigation.next': 'Próximo',
    
    // Comments
    'comments.construction': '🚧 Seção de comentários em construção 🚧',
    
    // Footer
    'footer.backToTop': 'Voltar ao topo',
    'footer.terms': 'Termos',
    'footer.privacy': 'Privacidade',
    'footer.copyright': 'Todos os direitos reservados',
    'footer.allSystemsNormal': 'Todos os sistemas normais',
    
    // Accessibility
    'a11y.search': 'Buscar postagens de blog e projetos em Ryan Souza',
    'a11y.theme': 'Alternar entre temas claro e escuro',
    'a11y.drawer': 'Abrir e fechar o menu',
    'a11y.language': 'Selecionar idioma',
    'a11y.backToTop': 'Voltar ao topo',
  },
} as const;