import { links, type Lang } from './content'

/**
 * Identificação do responsável pelo site (LGPD, art. 9º, III: identidade e
 * contato do controlador). Atuação como pessoa física / profissional autônomo.
 */
export const owner = {
  name: 'Guilherme Henrique Porto',
  city: 'Goiânia',
  region: 'GO',
  country: 'BR',
  email: links.email,
}

/** Data da última revisão das políticas (exibida no topo de cada página). */
const updatedAt = { pt: '3 de novembro de 2026', en: 'November 3, 2026' }

export interface LegalSection {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export interface LegalDoc {
  metaTitle: string
  metaDescription: string
  /** Título com destaque via `{{palavra}}`. */
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export const legal: Record<Lang, { privacy: LegalDoc; terms: LegalDoc }> = {
  pt: {
    privacy: {
      metaTitle: 'Política de Privacidade — Guilherme Porto',
      metaDescription:
        'Como o site de Guilherme Porto trata dados pessoais conforme a LGPD: o que é coletado, para quê, por quanto tempo e como exercer seus direitos.',
      title: 'Política de {{Privacidade}}',
      updated: `Última atualização: ${updatedAt.pt}`,
      intro:
        'Esta política explica, em linguagem simples, como este site trata dados pessoais, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD). Resumo: o site não tem formulários, não usa cookies e não coleta dados que identifiquem você. Dados pessoais só chegam até mim se você decidir entrar em contato.',
      sections: [
        {
          heading: '1. Quem é o responsável pelos dados',
          paragraphs: [
            `O controlador dos dados é ${owner.name}, profissional autônomo (pessoa física), com atuação em ${owner.city} – ${owner.region}, Brasil. Para qualquer assunto sobre privacidade, escreva para ${owner.email}.`,
          ],
        },
        {
          heading: '2. Quais dados são tratados',
          list: [
            'Navegação: o site não pede cadastro, não tem formulários e não grava cookies no seu navegador.',
            'Preferência de idioma: quando você escolhe PT ou EN, essa escolha fica salva apenas no seu navegador (localStorage), para o site abrir no idioma certo na próxima visita. Ela não é enviada a nenhum servidor e você pode apagá-la limpando os dados do site.',
            'Estatísticas de acesso: uso o Vercel Web Analytics, que conta visitas e páginas vistas de forma agregada, sem cookies e sem armazenar dados que identifiquem você.',
            'Registros técnicos da hospedagem: como qualquer site, o servidor da Vercel (empresa que hospeda este site) registra dados técnicos de acesso, como endereço IP, data, hora e navegador, para segurança e funcionamento do serviço.',
            'Contato: se você me chamar pelo WhatsApp, e-mail ou redes sociais, recebo os dados que você mesmo enviar, como nome, telefone, e-mail e a descrição do seu projeto.',
          ],
        },
        {
          heading: '3. Para que os dados são usados e com qual base legal',
          list: [
            'Responder ao seu contato, preparar orçamentos e prestar o serviço contratado: execução de contrato ou procedimentos preliminares a pedido do titular (LGPD, art. 7º, V).',
            'Manter o site seguro e funcionando, e entender de forma agregada quais páginas são mais visitadas: legítimo interesse (LGPD, art. 7º, IX), sem identificar visitantes.',
            'Cumprir obrigações legais, fiscais ou regulatórias quando houver contratação: cumprimento de obrigação legal (LGPD, art. 7º, II).',
          ],
          paragraphs: [
            'Seus dados não são vendidos, não são usados para publicidade e não são usados para decisões automatizadas.',
          ],
        },
        {
          heading: '4. Com quem os dados são compartilhados',
          paragraphs: [
            'Somente com os fornecedores necessários para o site e o contato funcionarem: a Vercel Inc. (hospedagem e estatísticas agregadas) e o aplicativo que você escolher para falar comigo, como WhatsApp (Meta), e-mail ou redes sociais, cada um com sua própria política de privacidade. Esses fornecedores podem processar dados fora do Brasil, com as garantias previstas no art. 33 da LGPD.',
            'Os dados também podem ser compartilhados se houver ordem judicial ou exigência legal.',
          ],
        },
        {
          heading: '5. Por quanto tempo os dados ficam guardados',
          paragraphs: [
            'Mensagens de contato ficam guardadas pelo tempo necessário para responder e negociar. Se houver contratação, ficam pelo prazo exigido pelas obrigações legais e contratuais. As estatísticas de acesso são agregadas e não permitem identificar você. Você pode pedir a exclusão dos seus dados a qualquer momento, salvo quando a lei exigir a guarda.',
          ],
        },
        {
          heading: '6. Seus direitos',
          paragraphs: ['Pela LGPD (art. 18), você pode, a qualquer momento e sem custo:'],
          list: [
            'confirmar se existe tratamento dos seus dados e acessá-los;',
            'corrigir dados incompletos, inexatos ou desatualizados;',
            'pedir anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;',
            'pedir a portabilidade dos dados;',
            'saber com quem seus dados foram compartilhados;',
            'revogar o consentimento, quando ele for a base do tratamento;',
            'apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).',
          ],
        },
        {
          heading: '7. Como exercer seus direitos',
          paragraphs: [
            `Envie um e-mail para ${owner.email} com o assunto "Privacidade" e diga o que precisa. Respondo em até 15 dias. Como profissional autônomo, eu mesmo atendo essas solicitações, sem intermediários.`,
          ],
        },
        {
          heading: '8. Segurança',
          paragraphs: [
            'O site é servido apenas por HTTPS e não armazena dados pessoais em banco de dados próprio. Mensagens de contato ficam nos aplicativos usados para a conversa, protegidos por senha e autenticação em dois fatores.',
          ],
        },
        {
          heading: '9. Links para outros sites',
          paragraphs: [
            'O site tem links para redes sociais, para o WhatsApp e para sites de clientes. Ao acessá-los, vale a política de privacidade de cada um.',
          ],
        },
        {
          heading: '10. Alterações nesta política',
          paragraphs: [
            'Esta política pode ser atualizada, por exemplo, se o site passar a usar um formulário ou outra ferramenta. A data da última atualização fica sempre no topo desta página.',
          ],
        },
      ],
    },
    terms: {
      metaTitle: 'Termos de Uso — Guilherme Porto',
      metaDescription:
        'Termos de uso do site de Guilherme Porto: regras de uso do conteúdo, propriedade intelectual, projetos exibidos e como funciona a contratação de serviços.',
      title: 'Termos de {{Uso}}',
      updated: `Última atualização: ${updatedAt.pt}`,
      intro: `Estes termos valem para quem acessa guilherme-porto.dev.br, site mantido por ${owner.name}, profissional autônomo em ${owner.city} – ${owner.region}. Ao usar o site, você concorda com eles.`,
      sections: [
        {
          heading: '1. Finalidade do site',
          paragraphs: [
            'Este é um portfólio profissional. Ele apresenta meus serviços de desenvolvimento web, sistemas, automações e agentes de IA, além dos projetos que desenvolvi. Nenhum produto ou serviço é vendido ou pago diretamente pelo site.',
          ],
        },
        {
          heading: '2. Contratação de serviços',
          paragraphs: [
            'O contato pelo site não cria nenhuma obrigação de contratação para nenhuma das partes. Escopo, prazos, valores, forma de pagamento e condições de cancelamento de cada projeto são definidos em proposta ou contrato próprio, combinados diretamente com o cliente antes do início do trabalho.',
          ],
        },
        {
          heading: '3. Propriedade intelectual',
          paragraphs: [
            'Os textos, o layout, as imagens e o código deste site são de minha autoria, salvo indicação em contrário, e não podem ser copiados ou reproduzidos para fins comerciais sem autorização.',
            'Os projetos exibidos pertencem aos respectivos clientes e aparecem aqui como portfólio. Projetos marcados como "conceito" são estudos próprios, sem vínculo com as marcas citadas, que pertencem aos seus titulares.',
          ],
        },
        {
          heading: '4. Uso adequado',
          list: [
            'Não tente acessar áreas restritas, interferir no funcionamento ou sobrecarregar o site.',
            'Não use o conteúdo do site para se passar por mim ou induzir terceiros a erro.',
          ],
        },
        {
          heading: '5. Links externos',
          paragraphs: [
            'O site tem links para sites de clientes, redes sociais e outros serviços. Não respondo pelo conteúdo, pela disponibilidade ou pelas práticas de privacidade desses sites.',
          ],
        },
        {
          heading: '6. Disponibilidade e responsabilidade',
          paragraphs: [
            'Mantenho o site atualizado, mas ele pode ficar fora do ar ou conter imprecisões pontuais. As informações têm caráter apresentativo e não constituem oferta vinculante. As condições de cada serviço são as da proposta ou do contrato.',
          ],
        },
        {
          heading: '7. Privacidade',
          paragraphs: [
            'O tratamento de dados pessoais está descrito na Política de Privacidade, que faz parte destes termos.',
          ],
        },
        {
          heading: '8. Legislação e foro',
          paragraphs: [
            `Estes termos seguem a legislação brasileira. Fica eleito o foro da comarca de ${owner.city} – ${owner.region}, ressalvado o direito do consumidor de propor ação no foro do seu domicílio. Dúvidas: ${owner.email}.`,
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      metaTitle: 'Privacy Policy — Guilherme Porto',
      metaDescription:
        "How Guilherme Porto's website handles personal data under Brazil's LGPD: what is collected, why, for how long and how to exercise your rights.",
      title: 'Privacy {{Policy}}',
      updated: `Last updated: ${updatedAt.en}`,
      intro:
        "This policy explains, in plain language, how this website handles personal data under Brazil's General Data Protection Law (Law No. 13,709/2018 — LGPD). In short: the site has no forms, uses no cookies and does not collect data that identifies you. Personal data only reaches me if you choose to get in touch.",
      sections: [
        {
          heading: '1. Who is responsible for the data',
          paragraphs: [
            `The data controller is ${owner.name}, a self-employed professional (individual) based in ${owner.city} – ${owner.region}, Brazil. For any privacy matter, write to ${owner.email}.`,
          ],
        },
        {
          heading: '2. What data is processed',
          list: [
            'Browsing: the site requires no sign-up, has no forms and sets no cookies in your browser.',
            'Language preference: when you choose PT or EN, that choice is stored only in your browser (localStorage) so the site opens in the right language next time. It is never sent to a server and you can delete it by clearing the site data.',
            'Visit statistics: I use Vercel Web Analytics, which counts visits and page views in aggregate, without cookies and without storing data that identifies you.',
            'Hosting logs: like any website, the server run by Vercel (the company hosting this site) records technical access data such as IP address, date, time and browser, for security and operation.',
            'Contact: if you reach me via WhatsApp, email or social media, I receive the data you choose to send, such as your name, phone number, email and project description.',
          ],
        },
        {
          heading: '3. Why the data is used and the legal basis',
          list: [
            'Replying to you, preparing quotes and delivering contracted services: performance of a contract or preliminary steps at your request (LGPD, art. 7, V).',
            'Keeping the site secure and running, and understanding in aggregate which pages are visited most: legitimate interest (LGPD, art. 7, IX), without identifying visitors.',
            'Meeting legal, tax or regulatory obligations when a service is contracted: compliance with a legal obligation (LGPD, art. 7, II).',
          ],
          paragraphs: [
            'Your data is never sold, never used for advertising and never used for automated decision-making.',
          ],
        },
        {
          heading: '4. Who the data is shared with',
          paragraphs: [
            'Only with the providers needed for the site and the conversation to work: Vercel Inc. (hosting and aggregate statistics) and the app you choose to contact me through, such as WhatsApp (Meta), email or social media, each under its own privacy policy. These providers may process data outside Brazil, with the safeguards set out in art. 33 of the LGPD.',
            'Data may also be shared when required by a court order or by law.',
          ],
        },
        {
          heading: '5. How long data is kept',
          paragraphs: [
            'Contact messages are kept for as long as needed to reply and negotiate. If a service is contracted, they are kept for the period required by legal and contractual obligations. Visit statistics are aggregated and cannot identify you. You can ask for your data to be deleted at any time, unless the law requires it to be kept.',
          ],
        },
        {
          heading: '6. Your rights',
          paragraphs: ['Under the LGPD (art. 18), you may at any time and free of charge:'],
          list: [
            'confirm whether your data is processed and access it;',
            'correct incomplete, inaccurate or outdated data;',
            'request anonymization, blocking or deletion of unnecessary data or data processed unlawfully;',
            'request data portability;',
            'know who your data has been shared with;',
            'withdraw consent, where consent is the legal basis;',
            "file a complaint with Brazil's National Data Protection Authority (ANPD).",
          ],
        },
        {
          heading: '7. How to exercise your rights',
          paragraphs: [
            `Email ${owner.email} with the subject "Privacy" and tell me what you need. I reply within 15 days. As a self-employed professional, I handle these requests myself, with no intermediaries.`,
          ],
        },
        {
          heading: '8. Security',
          paragraphs: [
            'The site is served over HTTPS only and does not store personal data in its own database. Contact messages stay in the apps used for the conversation, protected by password and two-factor authentication.',
          ],
        },
        {
          heading: '9. Links to other websites',
          paragraphs: [
            "The site links to social networks, WhatsApp and client websites. When you visit them, each site's own privacy policy applies.",
          ],
        },
        {
          heading: '10. Changes to this policy',
          paragraphs: [
            'This policy may be updated, for example if the site starts using a form or another tool. The date of the last update is always shown at the top of this page.',
          ],
        },
      ],
    },
    terms: {
      metaTitle: 'Terms of Use — Guilherme Porto',
      metaDescription:
        "Terms of use for Guilherme Porto's website: content usage rules, intellectual property, featured projects and how hiring services works.",
      title: 'Terms of {{Use}}',
      updated: `Last updated: ${updatedAt.en}`,
      intro: `These terms apply to anyone visiting guilherme-porto.dev.br, a site run by ${owner.name}, a self-employed professional in ${owner.city} – ${owner.region}, Brazil. By using the site, you agree to them.`,
      sections: [
        {
          heading: '1. Purpose of the site',
          paragraphs: [
            'This is a professional portfolio. It presents my web development, systems, automation and AI agent services, along with projects I have built. No product or service is sold or paid for directly on the site.',
          ],
        },
        {
          heading: '2. Hiring services',
          paragraphs: [
            'Getting in touch through the site creates no obligation for either party. Scope, deadlines, pricing, payment terms and cancellation conditions for each project are set in a separate proposal or contract, agreed directly with the client before work begins.',
          ],
        },
        {
          heading: '3. Intellectual property',
          paragraphs: [
            'The text, layout, images and code of this site are my own work unless stated otherwise and may not be copied or reproduced for commercial purposes without permission.',
            'Featured projects belong to their respective clients and are shown here as portfolio work. Projects marked as "concept" are my own studies, with no affiliation to the brands mentioned, which belong to their owners.',
          ],
        },
        {
          heading: '4. Acceptable use',
          list: [
            'Do not attempt to access restricted areas, interfere with or overload the site.',
            'Do not use the site content to impersonate me or mislead others.',
          ],
        },
        {
          heading: '5. External links',
          paragraphs: [
            'The site links to client websites, social networks and other services. I am not responsible for the content, availability or privacy practices of those sites.',
          ],
        },
        {
          heading: '6. Availability and liability',
          paragraphs: [
            'I keep the site up to date, but it may occasionally be unavailable or contain inaccuracies. Information is presentational and is not a binding offer. The conditions of each service are those in its proposal or contract.',
          ],
        },
        {
          heading: '7. Privacy',
          paragraphs: [
            'The handling of personal data is described in the Privacy Policy, which forms part of these terms.',
          ],
        },
        {
          heading: '8. Governing law and jurisdiction',
          paragraphs: [
            `These terms are governed by Brazilian law. The courts of ${owner.city} – ${owner.region} have jurisdiction, without prejudice to a consumer's right to sue in their own place of residence. Questions: ${owner.email}.`,
          ],
        },
      ],
    },
  },
}
