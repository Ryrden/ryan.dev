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

    // Home page
    'home.greeting': 'Hello, my name is',
    'home.role': 'and I am a Software Engineer',
    'home.ctaBlog': 'Read my blog',
    'home.ctaWork': 'See my work',
    'home.aboutTitle': 'About me',
    'home.aboutP1': 'Hello, my name is <b><i>Ryan</i></b>. I am a <b><i>software engineer</i></b>, <b><i>passionate about continuous learning</i></b> and <b><i>eternally curious</i></b>.',
    'home.aboutP2': 'Currently, I am in my final year of a <b>Bachelor\'s degree in Information Systems</b> at ICMC/USP, and I also have a diploma as a <b>Systems Development Technician</b> from ETEC.',
    'home.aboutP3': 'I am motivated by challenges involving <b>software engineering and distributed architecture</b>. I enjoy creating creative solutions, focusing on performance, clarity, and best practices.',
    'home.aboutP4': 'Welcome to my website! Here you\'ll find a bit more about me, my <a href="/{locale}/blog">blog posts</a> about technology and career, and the <a href="/{locale}/projects">projects</a> section with some of my most relevant work.',
    'home.recentPosts': 'Recent posts',
    'home.allPosts': 'All posts',
    'home.builtWith': 'Site built with:',
    'home.specialGuest': 'Performing reactivity as special guest',
    'home.recentProjects': 'Recent projects',
    'home.allProjects': 'All projects',
    'home.contact': 'Let\'s talk?',
    'home.contactText': 'You can contact me through my email or LinkedIn.',
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
    
    // Home page
    'home.greeting': 'Olá, meu nome é',
    'home.role': 'e eu sou um Engenheiro de Software',
    'home.ctaBlog': 'Leia meu blog',
    'home.ctaWork': 'Veja meu trabalho',
    'home.aboutTitle': 'Sobre mim',
    'home.aboutP1': 'Olá, meu nome é <b><i>Ryan</i></b>. Sou um <b><i>engenheiro de software</i></b>, <b><i>apaixonado por aprendizado contínuo</i></b> e <b><i>eterno curioso</i></b>.',
    'home.aboutP2': 'Atualmente estou no último ano do curso de <b>Bacharelado em Sistemas de Informação</b> no ICMC/USP, e também sou formado como <b>Técnico em Desenvolvimento de Sistemas</b> pela ETEC.',
    'home.aboutP3': 'Sou motivado por desafios que envolvem <b>engenharia de software e arquitetura distribuída</b>. Gosto de criar soluções criativas, com foco em performance, clareza e boas práticas.',
    'home.aboutP4': 'Seja bem-vindo ao meu site! Aqui você encontrará um pouco mais sobre mim, meus <a href="/{locale}/blog">posts no blog</a> sobre tecnologia e carreira, e a seção de <a href="/{locale}/projects">projetos</a> com alguns dos meus trabalhos mais relevantes.',
    'home.recentPosts': 'Publicações recentes',
    'home.allPosts': 'Todas as publicações',
    'home.builtWith': 'Site construído com:',
    'home.specialGuest': 'Performando reatividade como convidado especial',
    'home.recentProjects': 'Projetos recentes',
    'home.allProjects': 'Todos os projetos',
    'home.contact': 'Vamos conversar?',
    'home.contactText': 'Você pode entrar em contato comigo através do meu e-mail ou pelo LinkedIn.',
  },
} as const;