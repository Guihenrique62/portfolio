import type { LucideIcon } from 'lucide-react'
import {
  PanelsTopLeft,
  MonitorCog,
  MousePointerClick,
  Bot,
  ChartNoAxesCombined,
  Wrench,
  Search,
  Lightbulb,
  Pencil,
  CodeXml,
  Send,
  Mail,
  Globe,
  Phone,
  Briefcase,
  Workflow,
  GraduationCap,
} from 'lucide-react'

export type Lang = 'pt' | 'en'

export const siteUrl = 'https://guilherme-porto.dev.br/'

export const links = {
  whatsapp: 'https://wa.me/5562991556834',
  email: 'porttodesenvolvimento@gmail.com',
  site: 'guilherme-porto.dev.br',
  phone: '+55 62 99155-6834',
  instagram: 'https://instagram.com/guilhermeporto.dev',
  linkedin: 'https://linkedin.com/in/guihenriqueporto',
  tiktok: 'https://tiktok.com/@guilhermeporto.dev',
}

export interface Project {
  number: string
  name: string
  description: string
  modalDescription?: string
  image?: string
  imageAlt?: string
  url?: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProcessStep {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export interface Testimonial {
  name: string
  text: string
}

export interface Experience {
  icon: LucideIcon
  title: string
  period: string
  description: string
  highlight?: string
  technologies?: string[]
  achievementsLabel?: string
  achievements?: string[]
  certifications?: string[]
}

export interface ContactItem {
  icon: LucideIcon
  label: string
  href: string
}

// Contatos e redes são iguais nos dois idiomas
export const contacts: ContactItem[] = [
  { icon: Mail, label: links.email, href: `mailto:${links.email}` },
  { icon: Globe, label: links.site, href: `https://${links.site}` },
  { icon: Phone, label: links.phone, href: links.whatsapp },
]

export interface SiteContent {
  meta: {
    title: string
    description: string
    htmlLang: string
  }
  header: {
    role: string
    whatsappPrefix: string
  }
  hero: {
    seoH1: string
    role: string
    description: string
    stats: { value: string; label: string }[]
  }
  projects: {
    title: string
    viewAll: string
    quote: string
    visitSite: string
    close: string
    items: Project[]
  }
  services: {
    title: string
    items: Service[]
  }
  process: {
    title: string
    steps: ProcessStep[]
  }
  feedback: {
    title: string
    testimonials: Testimonial[]
  }
  experience: {
    title: string
    subtitle: string
    techLabel: string
    items: Experience[]
  }
  footer: {
    title: string
    text: string
    whatsappButton: string
    followTitle: string
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
    header: {
      role: 'Software Developer',
      whatsappPrefix: 'CHAME NO',
    },
    hero: {
      seoH1:
        'Guilherme Porto — Desenvolvedor Web, Criação de Sites, Web Design e Automação de Processos',
      role: 'Software Developer',
      description:
        'Eu gosto de transformar ideias em coisas reais, criando experiências digitais, sites e sistemas que unem design, tecnologia e funcionalidade. Também desenvolvo automações e agentes inteligentes para simplificar processos, resolver problemas e ajudar negócios a evoluírem.',
      stats: [
        { value: '3+', label: 'Anos de\nexperiência' },
        { value: '30+', label: 'Projetos\ncompletos' },
        { value: '25+', label: 'Clientes\nfelizes' },
      ],
    },
    projects: {
      title: 'PROJETOS SELECIONADOS',
      viewAll: 'VER TODOS',
      quote: 'FAÇA UM ORÇAMENTO',
      visitSite: 'VISITAR SITE',
      close: 'Fechar',
      items: [
        {
          number: '01',
          name: 'Cozinha Bussmeyer',
          description: 'Site institucional · Buffet de eventos',
          modalDescription:
            'Site institucional desenvolvido para a Cozinha Bussmeyer, buffet de eventos em Goiânia especializado em casamentos, aniversários, formaturas e eventos corporativos. O projeto apresenta os serviços, cardápios, galeria de eventos e depoimentos de clientes, com foco em conversão: orçamento direto via WhatsApp, SEO local e carregamento rápido.',
          image: '/projects/cozinha-bussmeyer',
          imageAlt: 'Página inicial do site Cozinha Bussmeyer — buffet de eventos',
          url: 'https://cozinha-bussmeyer.vercel.app/',
        },
        { number: '02', name: 'Nome Projeto', description: 'Descrição breve' },
        { number: '03', name: 'Nome Projeto', description: 'Descrição breve' },
      ],
    },
    services: {
      title: 'SERVIÇOS',
      items: [
        {
          icon: PanelsTopLeft,
          title: 'Desenvolvimento Web',
          description:
            'Criação de sites e landing pages modernos, responsivos e visualmente marcantes.',
        },
        {
          icon: MonitorCog,
          title: 'Sistemas Web',
          description:
            'Desenvolvimento de sistemas personalizados para otimizar processos e operações.',
        },
        {
          icon: MousePointerClick,
          title: 'UI/UX Experience',
          description:
            'Interfaces intuitivas e experiências digitais pensadas para conectar pessoas e tecnologia.',
        },
        {
          icon: Bot,
          title: 'Agentes Inteligentes',
          description: 'Soluções com IA para automatizar tarefas, analisar dados e executar processos.',
        },
        {
          icon: ChartNoAxesCombined,
          title: 'Conversão e Performance',
          description: 'Experiências otimizadas para melhorar resultados, engajamento e conversões.',
        },
        {
          icon: Wrench,
          title: 'Manutenção',
          description:
            'Evolução contínua, correções e melhorias para manter seus produtos digitais sempre eficientes.',
        },
      ],
    },
    process: {
      title: 'PROCESSO',
      steps: [
        {
          number: '01',
          icon: Search,
          title: 'Descoberta',
          description: 'Entendemos o problema, os objetivos e os requisitos do projeto.',
        },
        {
          number: '02',
          icon: Lightbulb,
          title: 'Ideação',
          description: 'Transformamos ideias e necessidades em uma estratégia e solução bem definida.',
        },
        {
          number: '03',
          icon: Pencil,
          title: 'Design',
          description: 'Criamos a experiência visual e funcional que dará vida à solução.',
        },
        {
          number: '04',
          icon: CodeXml,
          title: 'Desenvolvimento',
          description:
            'Transformamos o design em um produto digital funcional, performático e escalável.',
        },
        {
          number: '05',
          icon: Send,
          title: 'Entrega',
          description: 'Colocamos o projeto no ar e garantimos que tudo esteja pronto para evoluir.',
        },
      ],
    },
    feedback: {
      title: 'FEEDBACK',
      testimonials: [
        {
          name: 'Mariana Oliveira',
          text: 'O Guilherme transformou nossa ideia em uma experiência digital moderna, funcional e muito além do que imaginávamos.',
        },
        {
          name: 'Rafael Mendes',
          text: 'O Guilherme entendeu rapidamente o que precisávamos e entregou uma solução intuitiva, eficiente e muito bem construída.',
        },
        {
          name: 'Lucas Almeida',
          text: 'O Guilherme trouxe uma visão criativa para o projeto e conseguiu transformar uma ideia em uma solução digital clara, moderna e funcional.',
        },
      ],
    },
    experience: {
      title: 'EXPERIÊNCIAS',
      subtitle: 'Trajetória profissional e contribuições relevantes',
      techLabel: 'Tecnologias',
      items: [
        {
          icon: Briefcase,
          title: 'Desenvolvedor Full Stack Freelancer',
          period: '2022 — Presente',
          description:
            'Desenvolvimento de soluções customizadas para clientes de diversos segmentos.',
          highlight: 'Projetos: 5+ projetos entregues',
          technologies: ['React', 'Next', 'Node.js', 'Python', 'PostgreSQL'],
          achievementsLabel: 'Conquistas',
          achievements: ['95% de satisfação do cliente', 'Projetos entregues dentro do prazo'],
        },
        {
          icon: Workflow,
          title: 'Desenvolvedor de Automações',
          period: '2023 — Presente',
          description:
            'Desenvolvimento e manutenção de ferramentas de automação para otimização de processos.',
          highlight: 'Contribuições: 10+ automações implementadas',
          technologies: ['Python', 'Node', 'BotCity RPA', 'n8n'],
          achievementsLabel: 'Realizações',
          achievements: [
            'Automação de processos manuais que resultaram em 40% de aumento de eficiência',
            'Redução de erros humanos em tarefas repetitivas',
            'Contribuições para projetos open-source de automação',
          ],
        },
        {
          icon: GraduationCap,
          title: 'Certificações Relevantes',
          period: '2020 — 2026',
          description: 'Certificações técnicas que validam conhecimentos e habilidades.',
          certifications: [
            'Análise e Desenvolvimento de Sistemas — Estácio',
            'Desenvolvimento Full Stack — OneBitCode',
            'Inglês Profissional — Colégio Yes',
            'Python para Data Science — Data Science Academy',
            'Pós-graduação em IA e Automação — Rocketseat',
          ],
        },
      ],
    },
    footer: {
      title: 'VAMOS TRABALHAR JUNTOS',
      text: 'Estou sempre aberto a novos projetos, ideias e desafios. Se você tem um problema para resolver ou uma ideia que quer transformar em realidade, vamos conversar e construir algo juntos.',
      whatsappButton: 'CHAME NO WHATSAPP',
      followTitle: 'ACOMPANHE MEUS SERVIÇOS',
    },
  },

  en: {
    meta: {
      title: 'Guilherme Porto — Web Developer & Automation Engineer | Websites, Systems & AI',
      description:
        'Web developer and software engineer specialized in website creation, landing pages, web design, web systems, process automation and AI agents. Turn your idea into a modern, high-performance digital product.',
      htmlLang: 'en',
    },
    header: {
      role: 'Software Developer',
      whatsappPrefix: 'CHAT ON',
    },
    hero: {
      seoH1:
        'Guilherme Porto — Web Developer, Website Creation, Web Design and Process Automation',
      role: 'Software Developer',
      description:
        'I love turning ideas into real things, creating digital experiences, websites and systems that bring together design, technology and functionality. I also build automations and intelligent agents to simplify processes, solve problems and help businesses grow.',
      stats: [
        { value: '3+', label: 'Years of\nexperience' },
        { value: '30+', label: 'Projects\ncompleted' },
        { value: '25+', label: 'Happy\nclients' },
      ],
    },
    projects: {
      title: 'SELECTED PROJECTS',
      viewAll: 'VIEW ALL',
      quote: 'GET A QUOTE',
      visitSite: 'VISIT WEBSITE',
      close: 'Close',
      items: [
        {
          number: '01',
          name: 'Cozinha Bussmeyer',
          description: 'Institutional website · Event catering',
          modalDescription:
            'Institutional website built for Cozinha Bussmeyer, an event catering company in Goiânia, Brazil, specialized in weddings, birthdays, graduations and corporate events. The project showcases services, menus, an event gallery and client testimonials, with a focus on conversion: direct quotes via WhatsApp, local SEO and fast loading.',
          image: '/projects/cozinha-bussmeyer',
          imageAlt: 'Cozinha Bussmeyer website homepage — event catering',
          url: 'https://cozinha-bussmeyer.vercel.app/',
        },
        { number: '02', name: 'Project Name', description: 'Brief description' },
        { number: '03', name: 'Project Name', description: 'Brief description' },
      ],
    },
    services: {
      title: 'SERVICES',
      items: [
        {
          icon: PanelsTopLeft,
          title: 'Web Development',
          description: 'Modern, responsive and visually striking websites and landing pages.',
        },
        {
          icon: MonitorCog,
          title: 'Web Systems',
          description: 'Custom systems built to streamline processes and operations.',
        },
        {
          icon: MousePointerClick,
          title: 'UI/UX Experience',
          description:
            'Intuitive interfaces and digital experiences designed to connect people and technology.',
        },
        {
          icon: Bot,
          title: 'Intelligent Agents',
          description: 'AI-powered solutions to automate tasks, analyze data and run processes.',
        },
        {
          icon: ChartNoAxesCombined,
          title: 'Conversion & Performance',
          description: 'Optimized experiences that improve results, engagement and conversions.',
        },
        {
          icon: Wrench,
          title: 'Maintenance',
          description:
            'Continuous evolution, fixes and improvements to keep your digital products at their best.',
        },
      ],
    },
    process: {
      title: 'PROCESS',
      steps: [
        {
          number: '01',
          icon: Search,
          title: 'Discovery',
          description: 'We understand the problem, the goals and the requirements of the project.',
        },
        {
          number: '02',
          icon: Lightbulb,
          title: 'Ideation',
          description: 'We turn ideas and needs into a well-defined strategy and solution.',
        },
        {
          number: '03',
          icon: Pencil,
          title: 'Design',
          description: 'We craft the visual and functional experience that brings the solution to life.',
        },
        {
          number: '04',
          icon: CodeXml,
          title: 'Development',
          description: 'We turn the design into a functional, performant and scalable digital product.',
        },
        {
          number: '05',
          icon: Send,
          title: 'Delivery',
          description: 'We launch the project and make sure everything is ready to evolve.',
        },
      ],
    },
    feedback: {
      title: 'FEEDBACK',
      testimonials: [
        {
          name: 'Mariana Oliveira',
          text: 'Guilherme turned our idea into a modern, functional digital experience that went far beyond what we imagined.',
        },
        {
          name: 'Rafael Mendes',
          text: 'Guilherme quickly understood what we needed and delivered an intuitive, efficient and very well-built solution.',
        },
        {
          name: 'Lucas Almeida',
          text: 'Guilherme brought a creative vision to the project and managed to turn an idea into a clear, modern and functional digital solution.',
        },
      ],
    },
    experience: {
      title: 'EXPERIENCE',
      subtitle: 'Professional journey and relevant contributions',
      techLabel: 'Technologies',
      items: [
        {
          icon: Briefcase,
          title: 'Freelance Full Stack Developer',
          period: '2022 — Present',
          description: 'Development of custom solutions for clients across different industries.',
          highlight: 'Projects: 5+ projects delivered',
          technologies: ['React', 'Next', 'Node.js', 'Python', 'PostgreSQL'],
          achievementsLabel: 'Achievements',
          achievements: ['95% client satisfaction', 'Projects delivered on time'],
        },
        {
          icon: Workflow,
          title: 'Automation Developer',
          period: '2023 — Present',
          description:
            'Development and maintenance of automation tools for process optimization.',
          highlight: 'Contributions: 10+ automations implemented',
          technologies: ['Python', 'Node', 'BotCity RPA', 'n8n'],
          achievementsLabel: 'Highlights',
          achievements: [
            'Automation of manual processes resulting in a 40% efficiency increase',
            'Reduction of human error in repetitive tasks',
            'Contributions to open-source automation projects',
          ],
        },
        {
          icon: GraduationCap,
          title: 'Relevant Certifications',
          period: '2020 — 2026',
          description: 'Technical certifications that validate knowledge and skills.',
          certifications: [
            'Systems Analysis and Development — Estácio',
            'Full Stack Development — OneBitCode',
            'Professional English — Colégio Yes',
            'Python for Data Science — Data Science Academy',
            'Postgraduate Degree in AI and Automation — Rocketseat',
          ],
        },
      ],
    },
    footer: {
      title: "LET'S WORK TOGETHER",
      text: "I'm always open to new projects, ideas and challenges. If you have a problem to solve or an idea you want to bring to life, let's talk and build something together.",
      whatsappButton: 'CHAT ON WHATSAPP',
      followTitle: 'FOLLOW MY WORK',
    },
  },
}
