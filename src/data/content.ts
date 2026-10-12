export type Lang = 'pt' | 'en'

export const siteUrl = 'https://guilherme-porto.dev.br/'

export const links = {
  whatsapp: 'https://wa.me/5562991556834',
  email: 'guilhermeportosantos1@gmail.com',
  site: 'guilherme-porto.dev.br',
  phone: '+55 (62) 99155-6834',
  phoneHref: '+5562991556834',
  instagram: 'https://instagram.com/guilhermeporto.dev',
  linkedin: 'https://linkedin.com/in/guihenriqueporto',
  tiktok: 'https://tiktok.com/@guilhermeporto.dev',
  github: 'https://github.com/Guihenrique62',
}

export type ProjectCategory = 'landing' | 'site' | 'sistema' | 'saas' | 'agente' | 'manutencao'

export interface Project {
  number: string
  name: string
  category: ProjectCategory
  /** Aparece na home (carrossel); os demais só na página /projetos. */
  featured: boolean
  description: string
  modalDescription?: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  url?: string
}

export interface Service {
  title: string
  description: string
  /** Base do mockup em public/services/ (sem extensão). */
  image: 'uiux' | 'sistemas' | 'web'
  imageAlt: string
}

export interface Testimonial {
  name: string
  role?: string
  text: string
}

export interface Experience {
  title: string
  /** Opcional: o 3º item do protótipo não tem descrição. */
  description?: string
}

export interface SiteContent {
  meta: {
    title: string
    description: string
    htmlLang: string
  }
  nav: {
    /** Itens da pill de navegação; `id` é a âncora da seção (sem `#`). */
    items: { id: string; label: string }[]
    openMenu: string
    closeMenu: string
    languageLabel: string
    brand: string
  }
  hero: {
    /** Badge "Olá!" acima do título. */
    badge: string
    /** H1 em três partes: prefixo, nome (destacado em azul) e sufixo. */
    titlePrefix: string
    name: string
    titleSuffix: string
    description: string
    years: { value: string; label: string }
    ctaPortfolio: string
    ctaHire: string
    photoAlt: string
  }
  projectsPage: {
    metaTitle: string
    metaDescription: string
    /** Título com destaque via `{{palavra}}`. */
    title: string
    intro: string
    backLabel: string
    /** Contador, com `{n}`. */
    countLabel: string
  }
  about: {
    /** Título com destaque via `{{palavra}}`. */
    title: string
    text: string
    stats: { value: string; label: string }[]
    cta: string
    photoAlt: string
  }
  projects: {
    /** Título com destaque via `{{palavra}}`. */
    title: string
    viewAll: string
    carouselLabel: string
    /** Rótulo do dot, com `{n}`. */
    pageLabel: string
    filterLabel: string
    filters: { id: 'all' | ProjectCategory; label: string }[]
    /** Rótulo do card, com `{project}`. */
    openLabel: string
    visitSite: string
    close: string
    items: Project[]
  }
  services: {
    /** Título com destaque via `{{palavra}}`. */
    title: string
    carouselLabel: string
    /** Rótulo do dot, com `{n}`. */
    pageLabel: string
    /** Rótulo do botão-seta, com `{service}`. */
    ctaLabel: string
    /** Mensagem pré-preenchida no WhatsApp, com `{service}`. */
    whatsappMessage: string
    items: Service[]
  }
  /** Itens da faixa marquee (separados por estrelas). */
  marquee: string[]
  marqueeLabel: string
  feedback: {
    /** Título com destaque via `{{palavra}}`. */
    title: string
    carouselLabel: string
    pageLabel: string
    ratingLabel: string
    testimonials: Testimonial[]
  }
  experience: {
    /** Título com destaque via `{{palavra}}`. */
    title: string
    items: Experience[]
  }
  cta: {
    /** Título com destaque via `{{palavra}}`. */
    title: string
    /** Texto do botão que abre o WhatsApp. */
    button: string
    /** Mensagem pré-preenchida no WhatsApp. */
    whatsappMessage: string
    badges: { rating: string; certified: string }
  }
  footer: {
    title: string
    cta: string
    text: string
    socialLabel: string
    navTitle: string
    contactTitle: string
    rights: string
  }
}

export const content: Record<Lang, SiteContent> = {
  pt: {
    meta: {
      title: 'Guilherme Porto — Desenvolvedor Web e Automações | Criação de Sites, Sistemas e IA',
      description:
        'Desenvolvedor web e software engineer especializado em criação de sites, landing pages, web design, sistemas web, automação de processos e agentes de IA. Transforme sua ideia em um produto digital moderno e performático.',
      htmlLang: 'pt-BR',
    },
    nav: {
      items: [
        { id: 'inicio', label: 'Home' },
        { id: 'sobre', label: 'Sobre' },
        { id: 'servicos', label: 'Serviços' },
        { id: 'experiencia', label: 'Experiência' },
        { id: 'projetos', label: 'Projetos' },
        { id: 'contato', label: 'Contato' },
      ],
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      languageLabel: 'Idioma',
      brand: 'Guilherme Porto',
    },
    hero: {
      badge: 'Olá!',
      titlePrefix: 'Eu sou ',
      name: 'Guilherme Porto',
      titleSuffix: ', Desenvolvedor Web',
      description:
        'Eu gosto de transformar ideias em coisas reais, criando experiências digitais, sites e sistemas que unem design, tecnologia e funcionalidade. Também desenvolvo automações e agentes inteligentes para simplificar processos, resolver problemas e ajudar negócios a evoluírem.',
      years: { value: '5 Anos', label: 'de experiência' },
      ctaPortfolio: 'Portfolio',
      ctaHire: 'Contratar',
      photoAlt: 'Guilherme Porto, desenvolvedor web, de óculos e blazer escuro',
    },
    projectsPage: {
      metaTitle: 'Projetos — Guilherme Porto | Sites, Landing Pages e Sistemas Web',
      metaDescription:
        'Todos os projetos de Guilherme Porto: sites institucionais, landing pages, sistemas web e automações desenvolvidos com foco em design, performance e conversão.',
      title: 'Todos os meus {{Projetos}}',
      intro:
        'Sites institucionais, landing pages, sistemas web e automações que desenvolvi para clientes de diferentes segmentos, sempre com foco em design, performance e conversão. Clique em um projeto para ver os detalhes e acessar o site.',
      backLabel: 'Voltar para a home',
      countLabel: '{n} projetos',
    },
    about: {
      title: 'Por que me {{contratar}}?',
      text:
        'Não entrego só código. Entrego um produto pronto para gerar resultado, pensado do design à estratégia de negócio, para crescer junto com você.',
      stats: [
        { value: '45+', label: 'Projetos Completos' },
        { value: '5+', label: 'Anos de Experiência' },
      ],
      cta: 'Contratar',
      photoAlt: 'Guilherme Porto sorrindo e apontando para o lado, com a mão na cabeça',
    },
    projects: {
      title: 'Vamos dar uma olhada no meu {{Portfólio}}',
      viewAll: 'Ver tudo',
      carouselLabel: 'Projetos',
      pageLabel: 'Ir para a página {n} dos projetos',
      filterLabel: 'Filtrar projetos por categoria',
      filters: [
        { id: 'all', label: 'Todos' },
        { id: 'landing', label: 'Landing Pages' },
        { id: 'site', label: 'Sites' },
        { id: 'sistema', label: 'Sistemas' },
        { id: 'saas', label: 'SaaS' },
        { id: 'agente', label: 'Agentes' },
        { id: 'manutencao', label: 'Manutenção' },
      ],
      openLabel: 'Ver detalhes do projeto {project}',
      visitSite: 'Visitar site',
      close: 'Fechar',
      items: [
        {
          number: '01',
          name: 'Spider-Man',
          category: 'landing',
          featured: true,
          description: 'Site de venda de ingressos · Cinema',
          modalDescription:
            'Site desenvolvido para a venda de ingressos do novo filme do Homem-Aranha. Apresenta o filme com visual imersivo inspirado no universo do herói, sessões disponíveis e compra de ingressos online, com foco em conversão e carregamento rápido.',
          image: '/projects/spider-man',
          imageAlt: 'Página inicial do site de venda de ingressos do novo filme do Homem-Aranha',
          imageWidth: 960,
          imageHeight: 585,
          url: 'https://spider-man-a-new-day.vercel.app/',
        },
        {
          number: '02',
          name: 'Lumina Detail',
          category: 'landing',
          featured: true,
          description: 'Landing page · Estética automotiva premium',
          modalDescription:
            'Landing page desenvolvida para a Lumina Detail, estúdio de estética automotiva premium. Apresenta os serviços de detalhamento, depoimentos, diferenciais, equipe e FAQ em um layout escuro e sofisticado, com foco em conversão: agendamento direto em destaque em toda a página e carregamento rápido.',
          image: '/projects/lumina-detail',
          imageAlt: 'Página inicial do site Lumina Detail — estética automotiva premium',
          imageWidth: 960,
          imageHeight: 568,
          url: 'https://estetica-automotiva-tawny.vercel.app/',
        },
        {
          number: '03',
          name: 'Cozinha Bussmeyer',
          category: 'site',
          featured: true,
          description: 'Site institucional · Buffet de eventos',
          modalDescription:
            'Site institucional desenvolvido para a Cozinha Bussmeyer, buffet de eventos em Goiânia especializado em casamentos, aniversários, formaturas e eventos corporativos. O projeto apresenta os serviços, cardápios, galeria de eventos e depoimentos de clientes, com foco em conversão: orçamento direto via WhatsApp, SEO local e carregamento rápido.',
          image: '/projects/cozinha-bussmeyer',
          imageAlt: 'Página inicial do site Cozinha Bussmeyer — buffet de eventos',
          imageWidth: 1568,
          imageHeight: 731,
          url: 'https://cozinha-bussmeyer.vercel.app/',
        },
      ],
    },
    services: {
      title: 'Meus {{Serviços}}',
      carouselLabel: 'Serviços',
      pageLabel: 'Ir para a página {n} dos serviços',
      ctaLabel: 'Pedir orçamento de {service} pelo WhatsApp',
      whatsappMessage: 'Olá, gostaria de um orçamento para {service}.',
      items: [
        {
          title: 'UI/UX Design',
          description:
            'Interfaces intuitivas e experiências digitais pensadas para conectar pessoas e tecnologia.',
          image: 'uiux',
          imageAlt: 'Telas de aplicativo de casa inteligente, exemplo de UI/UX design',
        },
        {
          title: 'Sistemas Web',
          description:
            'Desenvolvimento de sistemas personalizados para otimizar processos e operações.',
          image: 'sistemas',
          imageAlt: 'Dashboard de sistema web com gráficos e métricas',
        },
        {
          title: 'Desenvolvimento Web',
          description:
            'Criação de sites e landing pages modernos, responsivos e visualmente marcantes.',
          image: 'web',
          imageAlt: 'Telas de site e aplicativo de delivery, exemplo de desenvolvimento web',
        },
        {
          title: 'Agentes Inteligentes',
          description: 'Soluções com IA para automatizar tarefas, analisar dados e executar processos.',
          image: 'sistemas',
          imageAlt: 'Dashboard com indicadores automatizados por agentes de IA',
        },
        {
          title: 'Conversão e Performance',
          description: 'Experiências otimizadas para melhorar resultados, engajamento e conversões.',
          image: 'web',
          imageAlt: 'Landing page otimizada para conversão em desktop e celular',
        },
        {
          title: 'Manutenção',
          description:
            'Evolução contínua, correções e melhorias para manter seus produtos digitais sempre eficientes.',
          image: 'uiux',
          imageAlt: 'Telas de aplicativo em evolução contínua',
        },
      ],
    },
    marquee: [
      'UX Design',
      'Sistemas Web',
      'Dashboards',
      'Manutenção',
      'Agentes Inteligentes',
      'Landing Pages',
      'Automações',
      'Criação de Sites',
    ],
    marqueeLabel: 'Especialidades',
    feedback: {
      title: 'Feedbacks que falam\nsobre {{meus Resultados}}',
      carouselLabel: 'Depoimentos',
      pageLabel: 'Ir para o depoimento {n}',
      ratingLabel: 'Avaliação 5 de 5',
      testimonials: [
        {
          name: 'Mariana Oliveira',
          role: 'Diretora de marketing',
          text: 'O Guilherme transformou nossa ideia em uma experiência digital moderna, funcional e muito além do que imaginávamos.',
        },
        {
          name: 'Rafael Mendes',
          role: 'Fundador de startup',
          text: 'O Guilherme entendeu rapidamente o que precisávamos e entregou uma solução intuitiva, eficiente e muito bem construída.',
        },
        {
          name: 'Lucas Almeida',
          role: 'Empreendedor',
          text: 'O Guilherme trouxe uma visão criativa para o projeto e conseguiu transformar uma ideia em uma solução digital clara, moderna e funcional.',
        },
        {
          name: 'Camila Ferreira',
          role: 'Proprietária de buffet',
          text: 'Nosso site institucional ficou lindo e os orçamentos pelo WhatsApp dobraram no primeiro mês. Entrega rápida e comunicação impecável.',
        },
        {
          name: 'Bruno Santana',
          role: 'Gerente de operações',
          text: 'A automação que ele desenvolveu eliminou horas de trabalho manual por semana. Hoje os relatórios saem sozinhos, sem erros.',
        },
        {
          name: 'Juliana Costa',
          role: 'Estúdio de estética automotiva',
          text: 'A landing page converte muito mais que a anterior. O agendamento direto na página fez diferença real no faturamento.',
        },
        {
          name: 'Pedro Henrique',
          role: 'Consultor financeiro',
          text: 'Profissional atencioso e muito técnico. O sistema web ficou rápido, seguro e exatamente como desenhamos juntos.',
        },
        {
          name: 'Fernanda Rocha',
          role: 'Coordenadora de eventos',
          text: 'Design impecável e atenção a cada detalhe. Recebemos vários elogios dos clientes sobre o novo site.',
        },
        {
          name: 'Thiago Martins',
          role: 'Dono de e-commerce',
          text: 'Além do site, o Guilherme sugeriu melhorias de performance e SEO que trouxeram resultado em poucas semanas.',
        },
        {
          name: 'Aline Barbosa',
          role: 'Clínica de estética',
          text: 'Prazos cumpridos, suporte sempre disponível e um site que carrega instantaneamente no celular. Recomendo sem pensar.',
        },
        {
          name: 'Marcelo Duarte',
          role: 'Gestor de logística',
          text: 'O dashboard que ele construiu nos deu visibilidade total da operação. Decisões que levavam dias hoje levam minutos.',
        },
        {
          name: 'Beatriz Nogueira',
          role: 'Arquiteta',
          text: 'Entendeu a identidade do meu escritório e traduziu isso em um portfólio online elegante e fácil de atualizar.',
        },
      ],
    },
    experience: {
      title: 'Minha {{Experiência}}',
      items: [
        {
          title: 'Desenvolvedor Full Stack',
          description:
            'Desenvolvimento de soluções customizadas para clientes de diversos segmentos.',
        },
        {
          title: 'Desenvolvedor de Automações',
          description:
            'Desenvolvimento e manutenção de ferramentas de automação para otimização de processos.',
        },
        {
          title: 'Desenvolvedor Freelancer',
          description:
            'Sites, landing pages e sistemas sob medida, do design à entrega, para negócios de diferentes segmentos.',
        },
      ],
    },
    cta: {
      title: 'Tem uma ideia de projeto incrível? {{Vamos Construir}}',
      button: 'Entrar em contato',
      whatsappMessage: 'Olá, Guilherme! Tenho uma ideia de projeto e gostaria de conversar.',
      badges: { rating: '4.9/5 Classificações médias', certified: 'Desenvolvedor certificado' },
    },
    footer: {
      title: 'Vamos nos conectar',
      cta: 'Contratar',
      text: 'Estou sempre aberto a novos projetos, ideias e desafios. Se você tem um problema para resolver ou uma ideia que quer transformar em realidade, vamos conversar e construir algo juntos.',
      socialLabel: 'Redes sociais',
      navTitle: 'Navegar',
      contactTitle: 'Contato',
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    meta: {
      title: 'Guilherme Porto — Web Developer & Automation Engineer | Websites, Systems & AI',
      description:
        'Web developer and software engineer specialized in website creation, landing pages, web design, web systems, process automation and AI agents. Turn your idea into a modern, high-performance digital product.',
      htmlLang: 'en',
    },
    nav: {
      items: [
        { id: 'inicio', label: 'Home' },
        { id: 'sobre', label: 'About' },
        { id: 'servicos', label: 'Services' },
        { id: 'experiencia', label: 'Experience' },
        { id: 'projetos', label: 'Projects' },
        { id: 'contato', label: 'Contact' },
      ],
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageLabel: 'Language',
      brand: 'Guilherme Porto',
    },
    hero: {
      badge: 'Hello!',
      titlePrefix: "I'm ",
      name: 'Guilherme Porto',
      titleSuffix: ', Web Developer',
      description:
        'I love turning ideas into real things, creating digital experiences, websites and systems that bring together design, technology and functionality. I also build automations and intelligent agents to simplify processes, solve problems and help businesses grow.',
      years: { value: '5 Years', label: 'of experience' },
      ctaPortfolio: 'Portfolio',
      ctaHire: 'Hire me',
      photoAlt: 'Guilherme Porto, web developer, wearing glasses and a dark blazer',
    },
    projectsPage: {
      metaTitle: 'Projects — Guilherme Porto | Websites, Landing Pages & Web Systems',
      metaDescription:
        'All projects by Guilherme Porto: institutional websites, landing pages, web systems and automations built with a focus on design, performance and conversion.',
      title: 'All my {{Projects}}',
      intro:
        'Institutional websites, landing pages, web systems and automations I built for clients across different industries, always focused on design, performance and conversion. Click a project to see the details and visit the site.',
      backLabel: 'Back to home',
      countLabel: '{n} projects',
    },
    about: {
      title: 'Why {{hire me}}?',
      text:
        "I don't just deliver code. I deliver a product ready to drive results, designed from the interface to the business strategy, built to grow with you.",
      stats: [
        { value: '45+', label: 'Projects Completed' },
        { value: '5+', label: 'Years of Experience' },
      ],
      cta: 'Hire me',
      photoAlt: 'Guilherme Porto smiling and pointing to the side, hand on his head',
    },
    projects: {
      title: "Let's take a look at my {{Portfolio}}",
      viewAll: 'View all',
      carouselLabel: 'Projects',
      pageLabel: 'Go to projects page {n}',
      filterLabel: 'Filter projects by category',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'landing', label: 'Landing Pages' },
        { id: 'site', label: 'Websites' },
        { id: 'sistema', label: 'Systems' },
        { id: 'saas', label: 'SaaS' },
        { id: 'agente', label: 'Agents' },
        { id: 'manutencao', label: 'Maintenance' },
      ],
      openLabel: 'View details of the {project} project',
      visitSite: 'Visit website',
      close: 'Close',
      items: [
        {
          number: '01',
          name: 'Spider-Man',
          category: 'landing',
          featured: true,
          description: 'Ticket sales website · Cinema',
          modalDescription:
            'Website built for selling tickets to the new Spider-Man movie. It presents the film with an immersive visual inspired by the hero’s universe, available showtimes and online ticket purchase, with a focus on conversion and fast loading.',
          image: '/projects/spider-man',
          imageAlt: 'Homepage of the ticket sales website for the new Spider-Man movie',
          imageWidth: 960,
          imageHeight: 585,
          url: 'https://spider-man-a-new-day.vercel.app/',
        },
        {
          number: '02',
          name: 'Lumina Detail',
          category: 'landing',
          featured: true,
          description: 'Landing page · Premium auto detailing',
          modalDescription:
            'Landing page built for Lumina Detail, a premium auto detailing studio. It showcases detailing services, testimonials, differentiators, the team and an FAQ in a sleek dark layout, with a focus on conversion: prominent booking calls-to-action throughout the page and fast loading.',
          image: '/projects/lumina-detail',
          imageAlt: 'Lumina Detail website homepage — premium auto detailing',
          imageWidth: 960,
          imageHeight: 568,
          url: 'https://estetica-automotiva-tawny.vercel.app/',
        },
        {
          number: '03',
          name: 'Cozinha Bussmeyer',
          category: 'site',
          featured: true,
          description: 'Institutional website · Event catering',
          modalDescription:
            'Institutional website built for Cozinha Bussmeyer, an event catering company in Goiânia, Brazil, specialized in weddings, birthdays, graduations and corporate events. The project showcases services, menus, an event gallery and client testimonials, with a focus on conversion: direct quotes via WhatsApp, local SEO and fast loading.',
          image: '/projects/cozinha-bussmeyer',
          imageAlt: 'Cozinha Bussmeyer website homepage — event catering',
          imageWidth: 1568,
          imageHeight: 731,
          url: 'https://cozinha-bussmeyer.vercel.app/',
        },
      ],
    },
    services: {
      title: 'My {{Services}}',
      carouselLabel: 'Services',
      pageLabel: 'Go to services page {n}',
      ctaLabel: 'Request a {service} quote on WhatsApp',
      whatsappMessage: "Hello, I'd like a quote for {service}.",
      items: [
        {
          title: 'UI/UX Design',
          description:
            'Intuitive interfaces and digital experiences designed to connect people and technology.',
          image: 'uiux',
          imageAlt: 'Smart home app screens, a UI/UX design example',
        },
        {
          title: 'Web Systems',
          description: 'Custom systems built to streamline processes and operations.',
          image: 'sistemas',
          imageAlt: 'Web system dashboard with charts and metrics',
        },
        {
          title: 'Web Development',
          description: 'Modern, responsive and visually striking websites and landing pages.',
          image: 'web',
          imageAlt: 'Food delivery website and app screens, a web development example',
        },
        {
          title: 'Intelligent Agents',
          description: 'AI-powered solutions to automate tasks, analyze data and run processes.',
          image: 'sistemas',
          imageAlt: 'Dashboard with indicators automated by AI agents',
        },
        {
          title: 'Conversion & Performance',
          description: 'Optimized experiences that improve results, engagement and conversions.',
          image: 'web',
          imageAlt: 'Conversion-optimized landing page on desktop and mobile',
        },
        {
          title: 'Maintenance',
          description:
            'Continuous evolution, fixes and improvements to keep your digital products at their best.',
          image: 'uiux',
          imageAlt: 'App screens under continuous improvement',
        },
      ],
    },
    marquee: [
      'UX Design',
      'Web Systems',
      'Dashboards',
      'Maintenance',
      'Intelligent Agents',
      'Landing Pages',
      'Automations',
      'Website Creation',
    ],
    marqueeLabel: 'Specialties',
    feedback: {
      title: 'Feedbacks that speak\nabout {{my Results}}',
      carouselLabel: 'Testimonials',
      pageLabel: 'Go to testimonial {n}',
      ratingLabel: 'Rated 5 out of 5',
      testimonials: [
        {
          name: 'Mariana Oliveira',
          role: 'Marketing director',
          text: 'Guilherme turned our idea into a modern, functional digital experience that went far beyond what we imagined.',
        },
        {
          name: 'Rafael Mendes',
          role: 'Startup founder',
          text: 'Guilherme quickly understood what we needed and delivered an intuitive, efficient and very well-built solution.',
        },
        {
          name: 'Lucas Almeida',
          role: 'Entrepreneur',
          text: 'Guilherme brought a creative vision to the project and managed to turn an idea into a clear, modern and functional digital solution.',
        },
        {
          name: 'Camila Ferreira',
          role: 'Catering business owner',
          text: 'Our new website looks beautiful and WhatsApp quote requests doubled in the first month. Fast delivery and flawless communication.',
        },
        {
          name: 'Bruno Santana',
          role: 'Operations manager',
          text: 'The automation he built removed hours of manual work every week. Reports now run on their own, with no errors.',
        },
        {
          name: 'Juliana Costa',
          role: 'Auto detailing studio',
          text: 'The landing page converts far better than the old one. Booking directly on the page made a real difference in revenue.',
        },
        {
          name: 'Pedro Henrique',
          role: 'Financial consultant',
          text: 'Attentive and highly technical. The web system is fast, secure and exactly what we designed together.',
        },
        {
          name: 'Fernanda Rocha',
          role: 'Events coordinator',
          text: 'Impeccable design and attention to every detail. We received several compliments from clients about the new website.',
        },
        {
          name: 'Thiago Martins',
          role: 'E-commerce owner',
          text: 'Beyond the website, Guilherme suggested performance and SEO improvements that paid off within a few weeks.',
        },
        {
          name: 'Aline Barbosa',
          role: 'Aesthetic clinic',
          text: 'Deadlines met, support always available and a site that loads instantly on mobile. I recommend him without hesitation.',
        },
        {
          name: 'Marcelo Duarte',
          role: 'Logistics manager',
          text: 'The dashboard he built gave us full visibility of the operation. Decisions that took days now take minutes.',
        },
        {
          name: 'Beatriz Nogueira',
          role: 'Architect',
          text: 'He understood my studio’s identity and turned it into an elegant online portfolio that is easy to update.',
        },
      ],
    },
    experience: {
      title: 'My {{Experience}}',
      items: [
        {
          title: 'Full Stack Developer',
          description: 'Development of custom solutions for clients across different industries.',
        },
        {
          title: 'Automation Developer',
          description:
            'Development and maintenance of automation tools for process optimization.',
        },
        {
          title: 'Freelance Developer',
          description:
            'Custom websites, landing pages and systems, from design to delivery, for businesses of all kinds.',
        },
      ],
    },
    cta: {
      title: "Have an amazing project idea? {{Let's Build}}",
      button: 'Get in touch',
      whatsappMessage: "Hi Guilherme! I have a project idea and I'd like to talk.",
      badges: { rating: '4.9/5 Average rating', certified: 'Certified developer' },
    },
    footer: {
      title: "Let's connect",
      cta: 'Hire me',
      text: "I'm always open to new projects, ideas and challenges. If you have a problem to solve or an idea you want to bring to life, let's talk and build something together.",
      socialLabel: 'Social networks',
      navTitle: 'Navigate',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
    },
  },
}
