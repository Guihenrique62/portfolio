# Plano — Redesign do portfólio (Figma "Desktop - 2")

> Documento de planejamento. Marque os itens `[ ]` conforme forem concluídos.
> Protótipo: https://www.figma.com/design/ULIKbS4nkL7xFyHAcWWqT2/Guilherme-Porto-%E2%80%94-Brand-System?node-id=61-584

## Contexto

O portfólio atual (`guilherme-porto.dev.br`) é um SPA Vite + React 18 + Tailwind v4, tema escuro, fontes Anton/Inter, i18n PT/EN próprio (`src/i18n/LanguageContext.tsx`), conteúdo centralizado em `src/data/content.ts`, pré-render da home em build (`scripts/prerender.mjs`), imagens AVIF/WebP geradas por `scripts/optimize-images.mjs`, deploy Vercel.

O objetivo é reconstruir a interface para ficar **idêntica ao protótipo Figma** (arquivo `ULIKbS4nkL7xFyHAcWWqT2`, frame `Desktop - 2`, node `61:584`, 1440×6520) usando os mesmos assets, mantendo/elevando SEO, performance e com mobile responsivo de primeira (o Figma só tem desktop; o mobile será derivado do mesmo design system).

Decisões já tomadas com o usuário:
- **Stack:** manter Vite + React (reaproveita i18n, pré-render, pipeline de imagens, Vercel).
- **Idiomas:** manter PT-BR (`/`) e EN (`/en`); traduzir os textos novos.
- **Form "Tem uma ideia?":** botão Enviar abre WhatsApp (`wa.me`) com o e-mail digitado na mensagem. Sem backend.
- **Conteúdo:** usar os números do Figma (hero "5 Anos de experiência"; "45+ Projetos Completos", "5+ Anos de Experiência") e o e-mail `guilhermeportosantos1@gmail.com`. Redes: Instagram, LinkedIn, TikTok, GitHub e WhatsApp com os links já existentes em `content.ts` (`links`) + `https://github.com/Guihenrique62`. Twitter removido; Facebook/YouTube não entram (não há links).
- **Projetos:** mesmas fotos e descrições do site atual (Spider-Man, Lumina Detail, Cozinha Bussmeyer) na seção "Vamos dar uma olhada no meu Portfólio".

Este documento vive em `docs/plano-redesign-portfolio.md` e é a fonte da checklist do projeto.

> **Resultado da Etapa 13 (12/10/2026):** `README.md` reescrito (seções, stack, i18n com pré-render por idioma, SEO, performance com números do Lighthouse, acessibilidade, scripts `optimize:images`/`assets:seo`/`fonts`, estrutura e deploy); `screenshot.png` substituído pela captura do novo hero. Commit, push, PR e deploy preview na Vercel ficam a cargo do usuário / sob pedido explícito.

---

## O que o protótipo contém (verificado via Figma MCP)

**Design system**
- Fundo da página branco; destaque **#2563EB** (azul); escuros **#171717** (nav, seções Serviços/Feedbacks), **#272727** (footer); textos **#171717 / #344054 / #1D2939**, secundários **#98A2B3 / #667085**; cinzas **#F2F4F7** (fundo "Por que me contratar" e pills), **#E4E7EC** (bordas, dots inativos), **#D0D5DD**, **#FCFCFD / #F9FAFB** (texto em fundo escuro); **#FD853A** (borda do botão-seta dos cards de projeto); **#E6EEFF** (fundo do ícone do input). rgba brancos 0.1 / 0.14 para vidro.
- Fontes: **Urbanist** (H1 96px SemiBold, "5 Anos" Bold 47px, nomes dos feedbacks Bold, input Medium), **Poppins** (praticamente todo o resto: nav 20px, H2 64/48px, H3 40px, parágrafos 20px, botões), **Inter** (pills de filtro). Letter-spacing ≈ -1.5% em tudo.
- Raios: 50px (seções/cards grandes), 60px (botões pill), 24px (cards de feedback, marquee), 20px (cards de projeto). Sem box-shadow. `backdrop-blur 7.5px` na nav e no input.
- Largura útil 1298px (padding lateral 71px em 1440).

**Seções, de cima para baixo** (node ids para `get_design_context`/`download_assets`)
1. **Nav** `61:586` — pill escura flutuante (top 32), borda branca 1px, item ativo "Home" em pill azul. Itens: Home · Sobre · Serviços · Experiência · Projetos · Contato.
2. **Hero** `61:585` + `63:1163` + `61:595` — badge "Olá!" com rabisco SVG; H1 "Eu sou **Guilherme Porto**, Desenvolvedor Web" (96px, centralizado); seta curva decorativa; coluna esquerda com ícone quote + parágrafo (texto atual do site); coluna direita com 5 estrelas + "5 Anos / de experiência"; foto de perfil 585×585 sobre semicírculo azul; grupo de botões vidro ["Portfolio ↗" azul | "Contratar"].
3. **Meus Serviços** `61:596` — seção escura arredondada (50px) com textura de fundo a 20% de opacidade; 3 cards (416×508) com forma recortada via máscara SVG: "UI/ UX Design", "Sistemas Web", "Desenvolvimento Web", cada um com mockup e botão-seta; dots de carrossel (1 ativo em pill + 3).
4. **Minha Experiência** `61:611` — H2 "Minha **Experiência**"; timeline vertical (linha tracejada + 3 marcadores): Desenvolvedor Full Stack, Desenvolvedor de Automações, Desenvolvedor Freelancer.
5. **Por que me contratar?** `61:643` — card cinza #F2F4F7 (raio 50) com foto + retângulo azul atrás, H2, parágrafo, stats 45+/5+, botão outline "Contratar".
6. **Portfólio** `61:658` — H2 "Vamos dar uma olhada no meu **Portfólio**" + botão "Ver tudo"; 2 cards por vista (633×371, raio 20, overlay gradiente, título 70px, botão circular com seta e borda laranja); dots; pills de filtro (Landing Pages, Agentes, SaaS, Sistemas, Manutenção).
7. **Marquee** `61:717` — faixa azul (raio 24 em tl/br) com fita branca rotacionada -2.5° e texto 48px "UX Design ✦ Web Systems ✦ Dashboard ✦ Maintenance ✦ Intelligent Agents ✦ …".
8. **Feedbacks** `61:686` — seção escura com a mesma textura; H2 "Feedbacks que falam sobre **meus Resultados**" com rabisco; carrossel horizontal de cards vidro (rgba 0.14, raio 24) com avatar, nome, 5 estrelas + "5.0", texto e ícone quote grande.
9. **CTA** `61:698` — H2 "Tem uma ideia de projeto incrível? **Vamos Construir**"; input pill (ícone sms, placeholder "Digite o endereço de e-mail", botão "Enviar"); selos "★ 4.9/5 Classificações médias" e "🛡 Desenvolvedor certificado".
10. **Footer** `61:726` — fundo #272727 (raio 24 em tl/tr); "Vamos nos conectar" + botão "Contratar ↗"; linha; 3 colunas (texto + ícones sociais | Navegar | Contato); linha.

**Placeholders do Figma a substituir por conteúdo real**
- "Projeto 1/2" com imagem genérica → 3 projetos reais de `content.ts`.
- Footer "Lorem ipsum" → texto atual "Estou sempre aberto a novos projetos…".
- Feedback "Jayesh Patil / CEO, Lirante" → Lucas Almeida (3º depoimento atual); os três usam o mesmo avatar no Figma → usar avatar com iniciais (SVG gerado) em vez de uma foto repetida (assumido; fácil trocar).
- "Saass" → "SaaS"; "Experiencia"/"Ola" → com acento; "Contact" → "Contato"; "projetos" → "Projetos".
- Marquee em inglês: manter em EN no `/en`; versão PT: "UX Design ✦ Sistemas Web ✦ Dashboards ✦ Manutenção ✦ Agentes Inteligentes ✦ Landing Pages ✦ Automações".

---

## Etapas

### Etapa 0 — Preparação (meio dia)
- [x] Criar branch `feat/redesign-figma`.
- [x] Salvar este plano em `docs/plano-redesign-portfolio.md` (com a checklist).
- [x] Baixar **todos os assets do Figma** (as URLs expiram em 7 dias) com `download_assets` nos nodes `61:585`, `63:1163`, `61:596`, `61:643`, `61:658`, `61:686`, `61:698`, `61:717`, `61:726` para `public/figma-raw/` (fora do git se > 5 MB) e depois organizar em:
  - `public/hero/foto-perfil.png` (node `9:8`, 585×585), `public/about/foto-contratar.png` (`67:1242`), `public/bg/textura-escura.png` (`imgFrame58`), `public/services/{uiux,sistemas,web}.png`.
  - `src/assets/icons/*.svg`: stars (hero/feedback/marquee/selo), quote-up, quote-down, sms, shield-tick, instagram, whatsapp, arrow-up-right (hero/footer), arrow-down-light (projetos), group-24 (seta dos serviços), vector-1/2/3 (rabiscos e seta curva), ellipse-2 (semicírculo), rectangle-6/7 (máscara/forma dos cards de serviço), line-3/4/5, frame-70/71 (marcadores da timeline).
  - Ícones que não existem no Figma (LinkedIn, TikTok, GitHub): usar `lucide-react` (Linkedin, Github) e os SVGs já existentes em `src/components/BrandIcons.tsx` (TikTok, WhatsApp), estilizados como os vuesax (24px, branco).
- [x] Instalar fontes: `@fontsource/poppins` (400, 500, 600, 700) e `@fontsource/urbanist` (500, 600, 700); remover `@fontsource/anton`. Inter Variable só se mantido para as pills (senão usar Poppins e remover a dependência).

> **Resultado da Etapa 0 (12/10/2026):** os 40 assets do Figma foram baixados em `public/figma-raw/` (ignorado pelo git; `manifest.json` guarda nome → URL original). As fontes das imagens (fotos, mockups, textura) ficaram em `assets-src/{hero,about,bg,services}/` e os 24 SVGs em `src/assets/icons/` com nomes limpos (`star-hero.svg`, `quote-up.svg`, `service-card-mask.svg`, `timeline-dot-blue.svg`, …). As versões otimizadas AVIF/WebP serão geradas para `public/` na etapa de cada seção. `index.css` já importa Poppins (400–700) e Urbanist (500–700), subset latin; Anton e Inter foram removidos e o build continua passando.

### Etapa 1 — Fundação visual (1 dia)
- [x] `src/index.css`: novo `@theme` com os tokens acima (`--color-primary: #2563eb`, `--color-ink: #171717`, `--color-slate: #344054`, `--color-muted: #98a2b3`, `--color-surface: #f2f4f7`, `--color-line: #e4e7ec`, `--color-footer: #272727`, `--font-display: Urbanist`, `--font-sans: Poppins`), `font-display: swap`, importar apenas subset `latin`.
- [x] Escala tipográfica fluida com `clamp()` (ex.: H1 `clamp(2.5rem, 7vw, 6rem)`, H2 `clamp(2rem, 5vw, 4rem)`, body `clamp(1rem, 1.2vw, 1.25rem)`), letter-spacing -0.015em.
- [x] Utilitários compartilhados: `.container-site` (max-w 1298px, px 16px mobile / 40px tablet / 71px desktop), `.section-rounded` (raio 50px desktop / 24px mobile), botão pill (`Button` com variantes `primary | ghost | outline`), `SectionTitle` com palavra destacada.
- [x] Reescrever `App.tsx` com a nova ordem de seções e ids de âncora: `#inicio`, `#sobre` (Por que me contratar), `#servicos`, `#experiencia`, `#projetos`, `#contato`.
- [x] Manter `Reveal.tsx` (IntersectionObserver) para animações de entrada; corrigir o problema do pré-render (conteúdo nasce com `opacity:0`): aplicar `.reveal` só após hidratação (classe `js-ready` no `<html>`).
- [x] Nav (`Header.tsx`): pill flutuante fixa com blur; item ativo via scroll-spy (IntersectionObserver); seletor PT/EN integrado ao pill (manter `useLanguage`); **mobile**: logotipo/nome + botão hambúrguer abrindo menu em overlay escuro, foco preso e `aria-expanded`.

> **Resultado da Etapa 1 (12/10/2026):** tokens do Figma em `@theme` (`primary #2563eb`, `ink`, `slate`, `muted`, `surface`, `line`, `footer`…), utilitários `container-site`, `section-rounded` e `text-h1/h2/h2-sm/h3/body-lg` com `clamp()`; componentes `Button` (primary/ghost/outline/light) e `SectionTitle` (destaque via `{{palavra}}`); `Header` novo em pill flutuante com scroll-spy, seletor PT/EN e menu mobile acessível; `App.tsx` na ordem do protótipo; o reveal só esconde com `html.js` (script inline no `index.html`), então o HTML pré-renderizado fica visível para crawlers. Conteúdo da nav em `content.ts` (`nav.items`). As seções antigas ainda renderizam com o estilo anterior até suas etapas; `#sobre` e `#experiencia` passam a existir nas etapas 4 e 5.

### Etapa 2 — Hero (1 dia)
- [x] `Hero.tsx` conforme node `61:585`: badge "Olá!" + rabisco, H1 real e visível (não mais `sr-only`), seta curva, coluna esquerda (quote + parágrafo), coluna direita (estrelas + "5 Anos / de experiência"), foto sobre o semicírculo (SVG `ellipse-2`), grupo de botões vidro.
- [x] Imagem LCP: `<picture>` AVIF/WebP via `ProjectImage`/novo `ResponsiveImage`, `fetchpriority="high"`, `width/height`, preload no `index.html` apontando para a nova foto.
- [x] Botão "Portfolio" → `#projetos`; "Contratar" → WhatsApp (`links.whatsapp`).
- [x] **Mobile** (< 768): ordem: badge → H1 (2 linhas, 40–48px) → foto + semicírculo (largura 100%, max 360px) → estrelas/anos → parágrafo → botões (largura total, empilhados). Rabiscos/seta ocultos < 640.

> **Resultado da Etapa 2 (12/10/2026):** `Hero.tsx` reescrito a partir dos nodes 61:585/63:1163/61:595 (badge com rabisco, H1 visível em Urbanist 96px com nome em azul, seta curva, parágrafo com aspas, 5 estrelas + "5 Anos", foto 585px sobre o semicírculo azul feito em CSS, grupo de botões vidro). Altura do hero em 1440px: 971px (Figma 972). LCP usa `/hero/foto-perfil-585.avif` (13,5 KB) com preload no `index.html`. Pipeline de imagens virou declarativo (`scripts/images.config.mjs` + `optimize-images.mjs`) e já gerou hero, about, textura, serviços e projetos em AVIF/WebP (1×/2×). Conteúdo do hero em `content.ts` (`hero.badge/titlePrefix/name/titleSuffix/years/ctaPortfolio/ctaHire/photoAlt`), sem `seoH1`/`stats` antigos. Mobile verificado em 390/768px: sem overflow horizontal, botões empilhados.

### Etapa 3 — Meus Serviços (1 dia)
- [x] `Services.tsx`: seção escura com `textura-escura` em `background-image` a 20% (otimizada para ≤ 150 KB AVIF, `loading="lazy"` via `<img>` absoluto para permitir lazy), 3 cards com forma recortada (`mask-image` com `rectangle-6.svg`), título + linha + mockup + botão-seta.
- [x] Mapear para os 6 serviços atuais em `content.ts`: os 3 do Figma viram os cards visíveis 1–3; os outros 3 (Agentes Inteligentes, Conversão e Performance, Manutenção) viram slides 4–6 do carrossel (reutilizando os 3 mockups ou um ícone grande em fundo claro). Os dots do Figma (1 ativo + 3) já sugerem múltiplas páginas.
- [x] Carrossel sem biblioteca: `overflow-x: auto` + `scroll-snap-type: x mandatory`, dots sincronizados por IntersectionObserver, setas por teclado, `aria-roledescription="carousel"`.
- [x] **Mobile**: 1 card por vista (85vw), 2 em tablet, 3 em desktop.

> **Resultado da Etapa 3 (12/10/2026):** `Services.tsx` reescrito a partir do node 61:596: seção escura com `DarkTexture` (textura AVIF/WebP a 20%, lazy), título "Meus {{Serviços}}", cards 416×508 recortados por `clipPath` em objectBoundingBox (escala em qualquer largura), corpo vidro (cinza a 20% + blur 15px + borda radial do SVG do protótipo), título com linha, mockup com duas camadas translúcidas, botão-seta no recorte abrindo WhatsApp com mensagem do serviço. Dimensões em `cqw` (container queries) para manter as proporções. Novo `Carousel.tsx` (scroll-snap, dots por página medidos a partir do slide real, teclado, ARIA) usado também nas próximas seções. Conteúdo reordenado como no Figma (UI/UX Design, Sistemas Web, Desenvolvimento Web, Agentes, Conversão, Manutenção) com `image`/`imageAlt`; os 3 serviços extras reutilizam os mockups. Altura em 1440px: 884 (Figma 878). Verificado: 1440 (2 páginas), 768 (3 páginas), 390 (6 páginas), sem overflow.

### Etapa 4 — Minha Experiência (meio dia)
- [x] `Experience.tsx`: timeline com linha tracejada SVG e marcadores `frame-70/71`; 3 itens com título 40px e descrição. Dados vindos de `content.ts` (manter tecnologias/certificações no objeto, exibir só título + descrição como no Figma; opcionalmente "ver mais" para o resto — decidir na implementação, padrão: só o que está no Figma).
- [x] Marcação semântica: `<ol>` com `<li>`, H2 + H3.
- [x] **Mobile**: linha à esquerda (24px), textos à direita, títulos 24–28px.

> **Resultado da Etapa 4 (12/10/2026):** `Experience.tsx` reescrito a partir do node 61:611: título "Minha {{Experiência}}" centralizado, `<ol>` com três `<li>` em grid (marcador 48px + texto), marcadores SVG do protótipo (azul, escuro, azul) e linha tracejada entre eles feita em CSS (`repeating-linear-gradient`), terminando no último marcador. Cargos em `text-h3` (40px) e descrições em 20px `muted`, largura máx. 444px. Conteúdo simplificado para o que o Figma mostra (título + descrição; o 3º item ganhou uma descrição curta em vez de ficar vazio); `period`, `technologies`, `certifications` e ícones lucide foram removidos do `content.ts`. Altura em 1440px: 844 (Figma 827). Mobile: marcadores à esquerda (48px) com gap 24, sem overflow.

### Etapa 5 — Por que me contratar (meio dia)
- [x] Novo `About.tsx` (id `#sobre`): card #F2F4F7 raio 50; foto `foto-contratar` com retângulo azul atrás (raio 80 só em cima); H2; parágrafo; stats 45+ / 5+; botão outline "Contratar" → WhatsApp.
- [x] **Mobile**: coluna única (foto centralizada max 320px, texto abaixo, stats em 2 colunas).

> **Resultado da Etapa 5 (12/10/2026):** novo `About.tsx` (id `#sobre`) a partir do node 61:643: card `#F2F4F7` com cantos de 50px, foto 524×488 (AVIF/WebP, `object-position 64%` reproduzindo o recorte do Figma) sobre o retângulo azul com cantos superiores arredondados (proporções em %, escala no mobile), título "Por que me {{contratar}}?", parágrafo 20px, dois números em `<dl>` (45+ / 5+) e botão outline "Contratar" (cantos 32px, abre o WhatsApp). `Button` ganhou a prop `shape` (`pill` | `rounded`). Conteúdo `about` em PT/EN no `content.ts`. Altura em 1440px: 856 (Figma 806). Mobile: coluna única com a foto centralizada; verificado em 390/768px sem overflow.

### Etapa 6 — Portfólio (1 dia)
- [x] `Projects.tsx`: cabeçalho H2 + "Ver tudo"; grid/carrossel 2 cards por vista (633×371, raio 20) com a **foto real de cada projeto** (`/projects/*.avif|webp` já existentes) + overlay gradiente + nome do projeto (fonte 70px desktop → 32px mobile) + botão circular com seta (borda #FD853A). Clique abre o `ProjectModal` existente (manter `<dialog>`, textos `modalDescription`, "Visitar site").
- [x] Estender `Project` em `content.ts` com `category: 'landing' | 'site' | 'sistema' | 'agente' | 'manutencao'` e `slug`; pills viram filtros reais: "Todos" (ativo por padrão) + categorias com projetos. Spider-Man → Sites/Landing; Lumina → Landing Pages; Cozinha Bussmeyer → Sites institucionais. Pills sem projeto ficam ocultas.
- [x] "Ver tudo" → remove o filtro e mostra todos (hoje aponta para `#projetos`).
- [x] Dots = páginas do carrossel (3 projetos → 2 páginas em desktop, 3 em mobile).
- [x] Preencher `imageWidth/Height` do Cozinha Bussmeyer (1568×731) e padronizar as capas em 1266×742 (2× de 633×371) no `optimize-images.mjs`.
- [x] **Mobile**: 1 card por vista, pills com scroll horizontal.

> **Resultado da Etapa 6 (12/10/2026):** `Projects.tsx` reescrito a partir do node 61:658: cabeçalho com "Vamos dar uma olhada no meu {{Portfólio}}" + botão "Ver tudo" (limpa o filtro), carrossel 2 por vista (1 no mobile) com os 3 projetos reais em cards 633×371 (raio 20, foto AVIF/WebP + overlay gradiente do Figma, nome em 70px — reduzido para nomes longos —, botão circular com borda laranja), dots e pills de filtro ("Todos" + só categorias com projeto: Landing Pages, Sites). Card inteiro é um `<button>` que abre o `ProjectModal`, restilizado para o tema claro (branco, cantos 24px, botão "Visitar site"). `ProjectImage` usa as larguras 480/640/1266; `Project` ganhou `category`; Cozinha Bussmeyer recebeu 1568×731. Tentativa de `React.lazy` no modal foi revertida (o dialog não montava em dev); import estático mantido. Corrigido o aviso do React 18 usando o atributo `fetchpriority` minúsculo no hero. Verificado: 1440 (2 páginas, modal abre/fecha com Esc, filtro "Sites"), 768 e 390 sem overflow.

### Etapa 7 — Marquee + Feedbacks (1 dia)
- [x] `Marquee.tsx`: faixa azul com fita branca `rotate(-2.5deg)`, conteúdo duplicado e animação CSS `translateX` infinita (pausa em `prefers-reduced-motion` e no hover); estrelas SVG como separadores. Texto PT/EN de `content.ts`.
- [x] `Feedback.tsx`: seção escura com textura; H2 + rabisco; carrossel scroll-snap com cards vidro (`backdrop-filter`), avatar com iniciais, estrelas + "5.0", quote-down decorativo. 3 depoimentos atuais (Mariana, Rafael, Lucas).
- [x] **Mobile**: 1 card por vista (90vw), ícone quote menor.

> **Resultado da Etapa 7 (12/10/2026):** novo `Marquee.tsx` (node 61:717): faixa azul de 147px com cantos 24px (sup. esq./inf. dir.), fita branca rotacionada −2,5° com itens de 48px separados pelas estrelas SVG, conteúdo duplicado e animação CSS `translateX(−50%)` em loop (pausa no hover e some com `prefers-reduced-motion`); itens em `content.ts` (`marquee`, PT e EN). `Feedback.tsx` reescrito (node 61:686): seção escura com `DarkTexture`, título em duas linhas com rabisco, carrossel com snap centralizado (`Carousel` ganhou `align`) e cards vidro 784×265 (branco a 14% + blur, raio 24) com avatar de iniciais, nome em Urbanist, 5 estrelas + "5.0", depoimento e ícone quote-down. `SectionTitle` aceita `\n` para quebra. Verificado: 1440/1920 (marquee 147px, feedback 742px), 768 e 390 (1 card por vista, sem overflow).

### Etapa 8 — CTA + Footer (meio dia)
- [x] `Cta.tsx` (id `#contato`): H2; `<form>` real com `<input type="email" required>` + botão "Enviar" que monta `https://wa.me/5562991556834?text=…` incluindo o e-mail digitado e abre em nova aba; validação nativa + mensagem de erro acessível; selos com ícones star/shield.
- [x] `Footer.tsx`: "Vamos nos conectar" + "Contratar ↗" (WhatsApp); texto atual de contato; ícones Instagram, LinkedIn, TikTok, GitHub, WhatsApp (24px, com `aria-label`); coluna Navegar (âncoras); coluna Contato (telefone → `tel:`, e-mail → `mailto:`, site); linhas divisórias; `<small>` com copyright no espaço final de 30px.
- [x] **Mobile**: tudo em coluna única; botão largura total.

> **Resultado da Etapa 8 (12/10/2026):** novo `Cta.tsx` (id `#contato`, node 61:698): título "Tem uma ideia de projeto incrível? {{Vamos Construir}}", `<form>` com `<input type=email required>` em pill 832×86 (ícone sms em caixa #E6EEFF, borda #E4E7EC, blur), botão "Enviar" que abre `wa.me` com o e-mail na mensagem, erro acessível (`role=alert`, `aria-invalid`, foco no campo) e selos ★ 4.9/5 e 🛡 certificado. `Footer.tsx` reescrito (node 61:726): fundo #272727 com cantos superiores 24px, "Vamos nos conectar" + "Contratar ↗", linhas #475467, colunas texto + redes (Instagram, LinkedIn, TikTok, GitHub, WhatsApp, 24px) | Navegar (âncoras da nav) | Contato (tel:, mailto:, site) e copyright. `links` ganhou `phoneHref` e `github`; e-mail atualizado para guilhermeportosantos1@gmail.com; `contacts`/`ContactItem` removidos. Verificado: 1440 (CTA 468px vs 476; footer 726 vs 685; validação e abertura do WhatsApp testadas), 768 e 390 sem overflow.

### Etapa 9 — Conteúdo e i18n (meio dia)
- [x] Reestruturar `SiteContent` em `content.ts`: `nav`, `hero` (badge, h1 parts, paragraph, years), `services`, `experience`, `about` (title, text, stats, cta), `projects` (title, viewAll, filters, items), `marquee: string[]`, `feedback`, `cta` (title, placeholder, send, badges), `footer` (title, text, nav, contact, rights).
- [x] Traduzir todo o conteúdo novo para EN (hero, serviços, experiência, about, CTA, footer, pills).
- [x] Unificar os números (5 anos / 45+ projetos) nos dois idiomas e no JSON-LD; atualizar `links.email` e `contacts` para `guilhermeportosantos1@gmail.com`; adicionar `links.github`.
- [x] Remover do bundle o que o novo design não usa (`Process.tsx`, ícones lucide de serviços/processo) — o conteúdo do "Processo" pode ficar no `content.ts` para uso futuro, mas sem render.

> **Resultado da Etapa 9 (12/10/2026):** `SiteContent` já estava reestruturado ao longo das etapas (`nav`, `hero`, `services`, `experience`, `about`, `projects`, `marquee`, `feedback`, `cta`, `footer`), todo o conteúdo novo tem versão EN e os números (5 anos / 45+) e contatos (`links`) estão unificados. Nesta etapa: removidos `Process.tsx`, o bloco `process` do `content.ts` e todos os imports do lucide no conteúdo (os ícones restantes vêm só do `ProjectModal`/`Footer`); `/en` testado no Chrome (lang, title, canonical, H1/H2 traduzidos, sem overflow); botões do hero com `whitespace-nowrap` para "Hire me". JSON-LD e metas por idioma ficam para a Etapa 10. Build de produção + pré-render passam.

### Etapa 10 — SEO (1 dia)
- [x] `index.html`: manter title/description/keywords/canonical/hreflang/OG/Twitter; trocar `og:image`/`twitter:image` por **`/og-image.png` 1200×630** gerada por script sharp (foto + nome + "Desenvolvedor Web e Automações"); adicionar `<meta name="theme-color" content="#171717">`, favicon SVG + `favicon.ico` + `apple-touch-icon.png` + `site.webmanifest`.
- [x] Hierarquia: 1 H1 visível (hero) com "Guilherme Porto" + "Desenvolvedor Web"; H2 por seção com as keywords (serviços, experiência, portfólio, contato); descrições dos serviços com termos "criação de sites", "landing pages", "sistemas web", "automação de processos", "agentes de IA"; `alt` descritivo em todas as imagens.
- [x] JSON-LD: manter `@graph` (WebSite, WebPage, Person, ProfessionalService) e atualizar `image` para a nova foto, `email`, `sameAs` (+GitHub); adicionar `ItemList` de `CreativeWork` para os 3 projetos (name, url, image, description) e `hasOfferCatalog` com os 6 serviços. **Não** marcar as avaliações como `AggregateRating` (Google penaliza avaliações auto-hospedadas em Person/Organization); os depoimentos ficam só no HTML.
- [x] `scripts/prerender.mjs`: renderizar **as duas línguas** (`render(lang)`), gerar `dist/index.html` e `dist/en/index.html` com `<html lang>`, title, description, canonical, `og:locale`, `og:url` e JSON-LD corretos por idioma (template de meta por idioma em `src/seo/meta.ts`, usado também no `applyDocumentLang`).
- [x] `main.tsx`: trocar `createRoot` por `hydrateRoot` (fallback para `createRoot` se o root estiver vazio em dev).
- [x] `vercel.json`: reescrita só para rotas desconhecidas; `/en` deve servir o arquivo estático; headers `Cache-Control: public, max-age=31536000, immutable` para `/assets/*`, imagens e fontes.
- [x] `sitemap.xml` com `lastmod` (gerado no build) e `robots.txt` apontando para ele.
- [ ] Pós-deploy: reenviar sitemap no Search Console, validar Rich Results e Open Graph (debuggers do Facebook/LinkedIn).

> **Resultado da Etapa 10 (12/10/2026):** novo `src/seo/meta.ts` (`getSeo(lang)` + `applySeo`) é a fonte única das metas: title, description, keywords, canonical, OG, Twitter e JSON-LD (`WebSite`, `WebPage`, `Person` com a foto nova/e-mail/GitHub, `ProfessionalService` com `hasOfferCatalog` dos 6 serviços, `ItemList` dos 3 projetos). `index.html` ganhou theme-color, favicon SVG/ICO, apple-touch-icon, manifest e OG image 1200×630 (`og:image:*`); foto antiga `public/foto-perfil*` removida. `scripts/seo-assets.mjs` (`npm run assets:seo`, satori + resvg + sharp) gera `og-image.png` (104 KB), `favicon.svg/.ico`, `apple-touch-icon.png`, `icon-192/512.png` e `site.webmanifest`. `prerender.mjs` renderiza PT e EN (`render(lang)`), gera `dist/index.html`, `dist/en/index.html` (lang/metas/JSON-LD por idioma) e `dist/sitemap.xml` com `lastmod`; `public/sitemap.xml` removido. `main.tsx` usa `hydrateRoot` (createRoot só em dev); `LanguageContext` deriva o idioma inicial da URL (sem mismatch) e aplica a preferência salva após montar. `vercel.json`: `trailingSlash: false`, rewrite excluindo `/en`, cache imutável para assets/imagens. Verificado: build ok, metas e JSON-LD válidos nos dois HTMLs, preview `/` e `/en/` hidratam sem erros, troca de idioma atualiza canonical/OG/JSON-LD. Pendente pós-deploy: Search Console, Rich Results, OG debugger.

### Etapa 11 — Performance (1 dia)
- [x] `optimize-images.mjs` lê uma lista declarativa (`scripts/images.config.mjs`) em vez de jobs fixos; gerar AVIF/WebP em 1× e 2× para: foto hero (585 → 480/585/1170), foto about (524 → 400/524/1048), textura (1440/2880 com q baixa), mockups de serviço (415/830), capas de projeto (633/1266), OG image.
- [x] Todas as imagens abaixo da dobra com `loading="lazy"` e `decoding="async"`; hero com preload AVIF.
- [x] Fontes: só subset latin, pesos listados na Etapa 0, `<link rel="preload">` para Urbanist 600 e Poppins 500 (woff2).
- [x] Code-splitting: `React.lazy` para `ProjectModal`; verificar o bundle (`vite build` + `rollup-plugin-visualizer` opcional) e manter JS inicial < 90 KB gzip; remover ícones lucide não usados.
- [x] Animações só em `transform/opacity`; `will-change` apenas no marquee; `content-visibility: auto` nas seções abaixo da dobra.
- [x] Meta: Lighthouse mobile ≥ 95 em Performance / 100 em SEO e Acessibilidade; CLS 0; LCP < 2,5 s em 4G.

> **Resultado da Etapa 11 (12/10/2026):** fontes self-hosted em `public/fonts/` (7 woff2 copiados pelo `scripts/copy-fonts.mjs`, `npm run fonts`) com `@font-face` próprio e preload de Urbanist 600 + Poppins 400 no `index.html`; cache imutável para `/fonts`. PNGs-fonte dos projetos movidos para `assets-src/projects/` (−3,5 MB no deploy). `vite.config.ts`: `target es2022`, `modulePreload.polyfill: false`. `ProjectModal` em `React.lazy` (chunk de 1,2 KB gzip; funciona no preview de produção). Utilitário `cv-auto` (`content-visibility: auto`) em Serviços, Experiência, Sobre, Projetos, Marquee, Feedbacks e CTA, sem regressão em scroll-spy, âncoras e dots. Pré-render passou a **inlinar o CSS** (elimina a requisição render-blocking; HTML gzip ≈ 28 KB). Hero ganhou variante de 800px. Contraste do rodapé corrigido com o token `primary-soft` (#5B8DF9, 4,7:1). `LanguageContext` deriva o idioma inicial do `<html lang>` recebido (hidratação nunca diverge); `vercel.json` ganhou rewrite explícito `/en → /en/index.html`. **Bundle JS (minificado):** 259 KB = react-dom 51% · app 41% · react 5% · lucide 2% (68 KB gzip no total). **Lighthouse (servidor local com gzip, Edge headless):** mobile `/` 96 / 100 / 100 / 100 (FCP 1,8 s, LCP 2,5 s, CLS 0, TBT 0 ms); desktop `/` 100 / 100 / 100 / 100 (LCP 0,6 s). Relatórios em `docs/lighthouse-*.json` (ignorados pelo git). Ideia futura: Preact (−30 KB gzip) fora do escopo.

### Etapa 12 — Responsivo, acessibilidade e QA (1 dia)
- [x] Testar em 360, 390, 414, 768, 1024, 1280, 1440 e 1920 px (DevTools + Chrome real); sem scroll horizontal; alvos de toque ≥ 44px.
- [x] Navegação por teclado em nav, carrosséis, filtros, modal e form; foco visível; `prefers-reduced-motion` desliga marquee/reveal; contraste AA (atenção ao #98A2B3 sobre branco em textos ≥ 20px).
- [x] Comparação lado a lado com o Figma (screenshot de `61:584` vs. `vite preview` em 1440px) seção por seção; ajustar espaçamentos até bater.
- [x] Rodar `npm run build` e checar `dist/index.html` e `dist/en/index.html` (HTML completo, meta por idioma, JSON-LD válido).

> **Resultado da Etapa 12 (12/10/2026):** QA em 360, 414, 768, 1024, 1280 e 1440 px via harness (`public/_dev/sizes.html`, `desktop.html`, ignorados pelo git): sem overflow horizontal em nenhum tamanho; em 1024 a nav cortava "Contato" e o hero ficava apertado — espaçamentos de `lg` reduzidos, valores do Figma só em `xl` (≥1280). Alvos de toque: dots do carrossel viraram botões de 44px de altura (visual interno de 15px), botão-seta dos serviços com área mínima de 44px e marca da nav com 44px. Teclado: ordem de foco lógica (nav → PT/EN → hero → serviços → …), `:focus-visible` azul, setas ←/→ nos carrosséis, Esc fecha o modal, erro do form devolve o foco; regras de `prefers-reduced-motion` presentes (reveal, marquee, modal, menu, scroll suave). Âncoras da nav aterrissam a 120px do topo mesmo com `content-visibility`. Comparação em 1440 com o Figma seção a seção: hero 960 (972), serviços 893 (878), experiência 844 (827), marquee 147 (147), footer 726 (685) — diferenças vêm de line-height e do botão outline. Build final: `dist/index.html` pt-BR e `dist/en/index.html` en com H1, JSON-LD (5 nós) e CSS inline. Lighthouse Accessibility 100 nas três medições.

> **Resultado da Etapa 14 (12/10/2026):** página `/projetos` (`/en/projects`) implementada. Roteador mínimo em `src/router.ts` (`parsePath`, `pathFor`, `homeHash`); `LanguageProvider` passou a prover `route`, `navigate` e `linkTo` (pushState, scroll ao topo, `applySeo`), com estado inicial lido de `<html lang data-route>` (hidratação sem divergência) e troca de idioma preservando a rota. `Project.featured` (os 3 atuais) controla a home; a página lista todos em grade 3/2/1 colunas (`ProjectCard` extraído e reutilizado, filtros compartilhados, mesmo modal). Cabeçalho da página: voltar, H1 "Todos os meus {{Projetos}}", intro com keywords, contador. Header/Footer com links de âncora relativos à home e "Projetos" ativo na página. SEO: `getSeo(lang, route)` com title/description/canonical/hreflang próprios, `CollectionPage` + `ItemList` + `BreadcrumbList`; pré-render das 4 páginas com `data-route`, sitemap com 4 URLs; `vercel.json` com rewrites explícitos. Verificado: build gera os 4 HTMLs corretos; `serve dist` entrega cada rota; no Chrome "Ver tudo" troca sem reload, grade 3/2/1 em 1440/768/390, modal, PT⇄EN mantém a rota, histórico funciona. README atualizado.

> **Resultado da Etapa 15 (12/10/2026):** o pedido mudou durante a execução: em vez de arrastar manualmente, a seção de Feedbacks virou uma **esteira automática** (mesma técnica do marquee): `Feedback.tsx` renderiza os 12 depoimentos duas vezes (cópia com `aria-hidden`) dentro de `.feedback-track`, animação CSS `marquee` (translateX −50%) com duração `12,5 s × nº de cards` (150 s por volta), sentido direita→esquerda, pausa no hover/foco e desligada em `prefers-reduced-motion` (vira lista rolável). Sem JS, sem dependência de eventos de scroll. `LoopCarousel.tsx` (versão arrastável) foi descartado. 12 depoimentos em PT/EN com `name`, `role` e `text` no `content.ts` (nomes ilustrativos). Verificado no Chrome: animação `running`, 24 cards, 12 expostos a leitores de tela; build e pré-render ok.

### Etapa 13 — Entrega (meio dia)
- [x] Atualizar `README.md` (stack, seções, scripts, SEO) e remover `screenshot.png` antigo por um novo.
- [ ] Commit/push e PR (somente quando solicitado; descrição em português no padrão BHub).
- [ ] Deploy preview na Vercel → validação final → merge em `main`.

---

## Arquivos críticos

- Modificar: `src/App.tsx`, `src/index.css`, `src/data/content.ts`, `src/i18n/LanguageContext.tsx`, `src/main.tsx`, `src/entry-server.tsx`, `src/components/{Header,Hero,Services,Experience,Projects,ProjectModal,ProjectImage,Feedback,Footer,Reveal,BrandIcons}.tsx`, `index.html`, `scripts/prerender.mjs`, `scripts/optimize-images.mjs`, `vercel.json`, `public/sitemap.xml`, `public/robots.txt`, `package.json`, `README.md`.
- Criar: `src/components/{About,Marquee,Cta,Carousel,Button,SectionTitle}.tsx`, `src/seo/meta.ts`, `scripts/images.config.mjs`, `scripts/og-image.mjs`, `public/{og-image.png,favicon.svg,favicon.ico,apple-touch-icon.png,site.webmanifest}`, `public/{hero,about,bg,services}/`, `src/assets/icons/*.svg`, `docs/plano-redesign-portfolio.md`.
- Remover: `src/components/Process.tsx` (render), dependência `@fontsource/anton`, `public/foto-perfil*.{png,avif,webp}` após a troca.

Reutilizar: `Reveal.tsx` (observer), `ProjectImage.tsx` (picture AVIF/WebP), `ProjectModal.tsx` (`<dialog>`), `LanguageContext.tsx` (`useLanguage`, `applyDocumentLang`), `BrandIcons.tsx` (TikTok/WhatsApp), pipeline sharp.

## Verificação

1. `npm run dev` → conferir cada seção contra o screenshot do Figma em 1440px; abrir no Chrome com DevTools em 390px e 768px.
2. `npm run build && npm run preview` → inspecionar `dist/index.html` e `dist/en/index.html`; validar JSON-LD em https://validator.schema.org; Lighthouse (mobile e desktop) em `/` e `/en`.
3. Testar o form do CTA (abre `wa.me` com o e-mail), modal de projeto, filtros, carrosséis por teclado e `prefers-reduced-motion`.
4. Deploy preview na Vercel → testar `/en` direto (sem passar por `/`), OG com o debugger do LinkedIn/Facebook, PageSpeed Insights.

## Riscos / observações
- Os assets do Figma expiram em 7 dias: baixar na Etapa 0.
- O protótipo não tem versão mobile; o layout responsivo segue as regras acima e pode precisar de ajuste de gosto.
- Depoimentos continuam com nomes genéricos (Mariana, Rafael, Lucas). Se forem placeholders, substituir por clientes reais antes do deploy melhora a credibilidade e evita problemas de SEO.
- "4.9/5 Classificações médias" e "Desenvolvedor certificado" são afirmações visuais; manter só no HTML, sem marcação estruturada.
