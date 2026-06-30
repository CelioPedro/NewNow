# NEW NOW — Documentação Oficial do Projeto

> Estúdio premium de desenvolvimento de software e engenharia de front-end high-end.

---

## 1. Visão Geral

**Empresa:** New Now  
**Nicho:** Estúdio/Agência premium de desenvolvimento de software e engenharia de front-end high-end.  
**Objetivo:** Landing page institucional disruptiva que vende prestígio, interfaces impecáveis e performance brutal.  
**Estética:** Brutalismo Moderno / Editorial High-End — inspirado no estúdio IPER (iper.com.au).  
**Foco Comercial:** Atrair clientes que buscam designs exclusivos, animações fluidas e código no estado da arte (high-ticket).

---

## 2. Stack Tecnológica

| Tecnologia | Versão | Propósito |
|---|---|---|
| **Next.js** (App Router) | 16.x | Framework core — SSR/SSG, routing, otimizações |
| **TypeScript** | 5.x | Type safety em todo o projeto |
| **Tailwind CSS** | v4 | Sistema utilitário de estilização |
| **Framer Motion** | Latest | Microinterações, animações de entrada, hover states |
| **GSAP + ScrollTrigger** | Latest | Scroll horizontal, parallax avançado, timeline complexas |

---

## 3. Design System

### 3.1 Paleta de Cores (Alto Contraste)

| Token | Valor | Uso |
|---|---|---|
| `--color-bg-light` | `#FFFFFF` | Fundo de seções claras |
| `--color-bg-dark` | `#0A0A0A` | Fundo de seções escuras |
| `--color-bg-black` | `#000000` | Fundo preto puro (Manifesto) |
| `--color-text-dark` | `#000000` | Texto em fundos claros |
| `--color-text-light` | `#FFFFFF` | Texto em fundos escuros |
| `--color-text-muted` | `#888888` | Texto secundário/metadata |
| `--color-accent-red` | `#FF3333` | Destaque primário |
| `--color-accent-orange` | `#FF6600` | Destaque secundário |

**Gradiente Accent:** `linear-gradient(135deg, #FF3333 → #FF6600)` — usado no footer, CTAs e destaques tipográficos.

### 3.2 Tipografia

| Uso | Fonte | Peso | Estilo |
|---|---|---|---|
| **Headings** | Anton (Google Fonts) | 400 (naturally bold) | Uppercase, condensed, line-height: 0.9 |
| **Body / UI** | Inter (Google Fonts) | 400–700 | Normal case, line-height: 1.6 |

**Escalas tipográficas:**
- `.text-colossal` → `clamp(3rem, 12vw, 14rem)` — Títulos que cortam a tela
- `.text-massive` → `clamp(2.5rem, 8vw, 8rem)` — Subtítulos de seção
- `.text-large` → `clamp(1.5rem, 4vw, 4rem)` — Destaques menores

### 3.3 Bordas & Containers

- **Radius de mídia:** `16px–24px` (`--radius-card: 20px`) — Arredondamento aplicado em cards e containers de mídia para quebrar o peso do brutalismo.
- **Bordas decorativas:** `1px solid rgba(0,0,0,0.10)` em fundos claros, `1px solid rgba(255,255,255,0.06)` em fundos escuros.

---

## 4. Arquitetura de Pastas

```
NewNow/
├── public/                     # Assets estáticos
├── src/
│   ├── app/
│   │   ├── globals.css         # Design system, reset, variáveis CSS
│   │   ├── layout.tsx          # Root layout (fontes, meta, SEO)
│   │   └── page.tsx            # Página principal
│   └── components/
│       ├── Header.tsx          # Navbar sticky
│       ├── HeroSection.tsx     # Hero editorial full-screen
│       ├── ExpertiseGrid.tsx   # Grid assimétrico de expertise
│       ├── ManifestoSection.tsx # Seção dark de manifesto
│       ├── GridDoMundo.tsx     # Portfólio com scroll horizontal
│       └── FooterBig.tsx       # Footer blockbuster
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 5. Arquitetura da Página & Dinâmica de Scroll

Estrutura de página única (SPA) com transições bruscas entre seções de alto contraste:

### A. Header (`Header.tsx`)
- **Comportamento:** `sticky top-0 z-50`, fundo branco com `backdrop-blur`
- **Esquerda:** Logo "NEW NOW" em Anton
- **Direita:** CTA "INICIAR CONSULTORIA" — pílula preta, `rounded-full`, micro-animação Framer Motion

### B. Hero Section (`HeroSection.tsx`)
- **Visual:** `100vh`, fundo `#0A0A0A`, grid sutil de background
- **Tipografia:** Texto colossal em vermelho `#FF3333`: **"O PADRÃO MUDOU."**
- **Subtexto:** "BEM-VINDO AO NOVO AGORA." — preparado para scroll-reveal
- **Scroll futuro:** Subtexto sobe cobrindo a seção ao iniciar scroll

### C. Expertise Grid (`ExpertiseGrid.tsx`)
- **Visual:** Fundo branco, texto preto
- **Título:** "INTERFACE É TUDO. NÓS CONSTRUÍMOS AS MELHORES." com gradiente accent
- **Grid:** 3 cards assimétricos com offset vertical (estilo editorial)
- **Cards:**
  1. Experiências Web Imersivas
  2. Arquitetura Front-End High-End
  3. Software Customizado
- **Scroll futuro:** Efeito parallax nos cards

### D. Manifesto Section (`ManifestoSection.tsx`)
- **Visual:** Corte seco para fundo `#000000`, linhas verticais decorativas
- **Texto:** "CÓDIGO FEITO PARA SER SENTIDO." com palavra final em gradiente
- **Subtexto:** "Sem templates. Sem atalhos. Engenharia pura..."

### E. Grid do Mundo / Portfólio (`GridDoMundo.tsx`)
- **Visual:** Fundo `#0A0A0A`, cards arredondados (`20px radius`)
- **Comportamento futuro:** Scroll horizontal travado no vertical via GSAP ScrollTrigger
- **Cards conceituais:** Luxe Commerce, Vertex Platform, Noir Studio, Pulse Dashboard, Aether Experience

### F. Footer Blockbuster (`FooterBig.tsx`)
- **Visual:** `100vh`, gradiente `#FF3333 → #FF6600`
- **Texto:** "VAMOS CONSTRUIR?" — gigante, vazado (`-webkit-text-stroke`)
- **CTA:** Pílula branca "INICIAR CONSULTORIA" com hover para preto
- **Grid inferior:** Links de redes sociais + copyright

---

## 6. Referência de Design — IPER (iper.com.au)

### Padrões absorvidos:
- **Full-bleed hero** com vídeo/visual imersivo
- **Scroll narrativo vertical** — seções como capítulos
- **Scroll horizontal** para portfólio
- **Tipografia como elemento visual** — letras gigantes como composição
- **Paleta monocromática** com accent mínimo
- **Parallax em camadas** — profundidade ao scroll
- **"Soft Brutalism"** — brutalismo com UX intuitivo e polish
- **Espaçamento generoso** — respiro entre seções (12vh de padding)
- **Animações GSAP** com ScrollTrigger para controle preciso

---

## 7. Próximos Passos

- [ ] Implementar animações GSAP ScrollTrigger (Hero scroll-reveal, Parallax no ExpertiseGrid, Scroll horizontal no GridDoMundo)
- [ ] Adicionar Framer Motion nas entradas de cada seção (fade-in + slide-up)
- [ ] Criar mock de animação abstrata de código no Hero (canvas ou SVG)
- [ ] Gerar assets visuais de portfólio para os cards do GridDoMundo
- [ ] Implementar custom cursor interativo
- [ ] Adicionar smooth scroll (Lenis ou similar)
- [ ] Responsividade final e testes cross-browser
- [ ] Otimização de performance (Lighthouse 90+)

---

## 8. Comandos

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Lint
npm run lint
```

---

*Documento gerado em 30/06/2026 — New Now Engineering Team*
