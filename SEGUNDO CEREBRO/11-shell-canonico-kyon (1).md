> **ATUALIZAÇÃO 14/10/2026 (vale sobre tudo abaixo):** a anatomia de seções NÃO é obrigatória. Só navbar, hero, FAQ e rodapé são obrigatórios. Kyon e as outras referências são referência máxima de **design, componentes, UI/UX, animação e paleta**, nunca de estrutura. Ver `15-regra-anatomia-livre.md`.

# 11 · SHELL CANÔNICO — KYON DIGITAL (`kyondigital.com`)

> **Ordem do cliente (05/10/2026, verbatim):** *"a kyon deve ser referência completa de design e estrutura pois foi o melhor que já fiz. **navbars, cards, fontes, hero, sections** daqui pra frente deve ser **todos idênticos à kyon em estrutura, design e etc**, só vai mudando de acordo com nicho, nomes, fotos e especificação. mas o design deve ser **rico igual e estilo wordpress ou até mesmo wordpress**, com gsap e com tudo que a kyon tem. velocidade, animações, botões, design completo, estrutura e etc."*
>
> **Regra-mãe:** a **estrutura e o design são FIXOS** (este arquivo). O que varia por cliente é **nicho · nomes · fotos · especificação · cores da marca**. ⛔ Ninguém "melhora", "simplifica" ou reinventa o shell — e ⛔ ninguém inventa seção que não está no inventário abaixo.
> Complemento: `brain/10-referencias-neon-lp.md` (botão canônico, entradas, luz progressiva, orçamento) · `brain/03` C-273…C-276.

---

## 1. STACK DE REFERÊNCIA (medida no site)

WordPress + Elementor/Pro (containers `e-con`) + **LiteSpeed Cache** + **WebP Express** + **GSAP 3.12.5 + ScrollTrigger** + **Lenis** + **Swiper** (carrosséis) + Motion Effects (scroll e mouse) + Cloudflare na frente.

**Duas rotas de implementação — as duas válidas (C-274):**
- **A — HTML/CSS/JS puro + Cloudflare Pages** (rota padrão da casa).
- **B — WordPress** (ordem literal: *"até mesmo wordpress"*): WordPress + Elementor/Pro + LiteSpeed (ou WP Rocket) + WebP (WebP Express/ShortPixel) + GSAP enfileirado local + Lenis + Swiper.
- ⚠️ Consequência operacional: **WordPress não roda em Cloudflare Pages** (Pages não executa PHP) — precisa de **host PHP** com **Cloudflare na frente**, igual à régua.
- **Independente da rota, o resultado tem de bater o MESMO orçamento medido** (seção 8) — a rota nunca é desculpa para lentidão.

---

## 2. TOKENS MEDIDOS (o look Kyon — valores, não CSS)

| Papel | Valor medido |
|---|---|
| **Campo (fundo dominante)** | **`#060E21`** (navy profundo — apareceu 56×) |
| **Campos secundários** | `#0C0D17` · `#090A11` · `#132041` · branco `#ffffff` em blocos internos |
| **Vidro dos cards (face)** | `rgba(139,174,255,.10)` · `rgba(158,188,255,.01)` |
| **Vidro dos cards (borda)** | `rgba(255,255,255,.18)` |
| **Glow / aura azul** | `rgba(57,117,254,.20)` (e `.60` no núcleo) |
| **Sombra interna dos cards** | `0 62px 71.1px rgba(139,174,255,.10) inset, 0 12px 7.8px …` (brilho azulado suave **por dentro**) |
| **Desfoque do vidro** | `backdrop-filter: blur(6px)` (e `blur(2px)`) |
| **Marca — primária** | **`#2164FE`** (botão/realce) |
| **Marca — profunda** | **`#143C98`** (segunda parada do gradiente) |
| **Marca — clara** | `#3975FE` · `#a0bdff` · `#f1f5ff` · tinta clara `#c7d8ff` |
| **Anel do botão** | `#42567a` (no gradiente `-35deg` do `::before`) |
| **Texto secundário** | `#515460` · `#7A7A7A` |
| **Raios** | **29px** (×65) · **22px** (×42) · **34px** (×28) · 20/21/18/16px · **pílula 49–50px** |
| **Fios / divisores** | gradiente `to right, transparent → #000 → transparent` (linha que nasce e morre) |
| **Costura entre seções** | `linear-gradient(0deg, #090A11 0%, transparent 15%)` — **fade escuro** que faz o "site 1 só" |
| **Scrollbar** | customizada (thumb claro, 20px de raio, borda 3px) |
| **Container** | **~1320px** (12 ocorrências no CSS), com variantes 1140/1200 em widgets — layout "boxed" |

Gradiente do CTA principal (receita C-266): `linear-gradient(90deg, #2164FE, #143C98, …)` com 10 paradas · `background-size: 800% 800%` · `animation: 12s ease infinite`.
Anel: `linear-gradient(-35deg, #42567a, transparent, transparent, #42567a)` mascarado (só a borda de 2px pinta).

---

## 3. TIPOGRAFIA (o que define a cara do shell)

| Elemento | Medido |
|---|---|
| **Display (H1/H2 de impacto)** | **Inter, 600**, **58px**, `line-height: 1.2em`, **`letter-spacing: -1.6px`** |
| **Título de seção** | **40px**, `line-height: 1.1em` (mesmo 600 / -1.6px) |
| **Título de bloco/subseção** | **29px** (600, -1.6px) · **24px** (600, -1.6px, com variante `letter-spacing: 0`) |
| **Texto de apoio** | **18px**, peso 400 |
| **Texto pequeno / UI** | 16px · **14px** (o mais frequente, 54×) |
| **Famílias carregadas** | **Inter** (display real), **Roboto** (texto/UI, kit global), **Roboto Slab** (secundária do kit) — **self-hosted** |
| **Peso máximo** | **600** — zero 700/800/900 |

⚠️ **Conflito declarado (resolver ao escrever o próximo prompt):** a **régua** usa Inter; a lista negra de fontes "cara de IA" (nascida de uma reclamação na Virgínia) inclui Inter. **Decisão pragmática registrada:** o **shell manda** — display = Inter 600 / -1.6px / lh 1.2; a lista negra deixa de ser proibição absoluta e passa a valer como *"candidata a sair se o cliente reclamar da fonte"*. Trocar a fonte do shell só com ordem explícita do cliente.

---

## 4. ANATOMIA DE REFERÊNCIA (SUPERADA em 14/10/2026: não é obrigatória, ver 15)

| # | Bloco | O que é | O que muda por nicho |
|---|---|---|---|
| 1 | **Navbar** | marca (logo/nome) + links + **UMA ação** (CTA) · menu completo/mega-menu quando houver conteúdo · fundo de vidro sobre o campo | nome, logo, links, rótulo do CTA |
| 2 | **Hero** | headline de **benefício direto ao cliente final** + subheadline que **lista o que o produto/serviço faz** + CTA (e/ou formulário) + imagem/vídeo composto | headline, oferta, mídia |
| 3 | **Prova** | faixa de logos/parceiros/"apoiada por" — **carrossel** (Swiper, `slides-to-display` 3–5, gap grande ~170px) | os nomes/logos reais |
| 4 | **Conversão** | bloco de demonstração/agendamento: título + **1 linha de microcopy** explicando o depois do envio + formulário curto (ou botão direto no WhatsApp) | canal (form x WhatsApp), rótulo |
| 5 | **Diferencial** | 1 parágrafo curto + **três capacidades** (o que faz a diferença) — cada uma: título + subtítulo + 2–3 linhas de **consequência prática** | os 3 pilares do nicho |
| 6 | **Fluxo numerado 01·02·03** | **sequência real** de uso/atendimento — **é a seção de luz progressiva** (C-265), trilho + acendimento + nó | os 3 passos |
| 7 | **Série de blocos de recurso** | 4–6 blocos: **título-afirmação + 2 linhas + bullets curtos**; quando houver dado, **métricas** (números reais do cliente) | os recursos/oferta |
| 8 | **Resultado** | **pares de contraste** ("menos X · menos Y × mais Z · mais W") — o que o cliente ganha | os pares |
| 9 | **Depoimentos** | **carrossel** (Swiper) — ⛔ só com depoimento real (sem material, o bloco não existe e vira pendência) | os depoimentos |
| 10 | **CTA final** | chamada + 1 linha resumindo + repetição do formulário/botão | oferta |
| 11 | **FAQ** | **accordion** com as objeções reais (privacidade/garantia/integração/prazo) — respostas de 1–2 linhas | as objeções do nicho |
| 12 | **Rodapé** | marca + contato + links legais/sociais, sobre o mesmo campo | dados de contato |

**Anatomia do CARD (o componente que dá a riqueza):** container de **vidro** (face `rgba(139,174,255,.10)` + borda `rgba(255,255,255,.18)` + `blur(6px)` + **sombra interna azulada**) · raio 29/22px · ícone ou imagem · **título** (24–29px) · subtítulo · 2 linhas de texto. É isso que se repete nas seções 5, 6, 7 e 8.

---

## 5. MOTION DO SHELL

- **Entradas assinatura:** `opacity 0 + blur(7px) + translate ±80px` → `1 / 0 / 0` (one-shot ≤ 700 ms) — C-267.
- **Motion de scroll (Motion Effects):** `translateY/X` (parallax), **`scale`**, **`rotateZ`**, **`blur`** — poucos elementos por tela, sempre sutis.
- **Motion de mouse (track mouse):** o que dá o ar "vivo" — usar com parcimônia e desligar no toque.
- **GSAP + ScrollTrigger + Lenis:** um único loop de scroll; **`ScrollTrigger.refresh()`** após `load`, `fonts.ready` e quando as **imagens** carregam.
- **Botão canônico** (`.bt`) em todo CTA principal — gradiente andando + anel mascarado + hover 1.01 + fio de luz + sweep · keyframes `brilho`, `blinkBrightness`.
- **Luz progressiva (neon)** — uma seção, na cor da marca do cliente (C-265).
- **Máx. 3 laços contínuos** · `prefers-reduced-motion` = tudo visível e aceso (nunca `0.01ms`).

---

## 6. VELOCIDADE (números da régua — o alvo de toda LP)

| Ativo | Bruto | **gzip** |
|---|---|---|
| HTML | 215,9 KB | **35,0 KB** |
| CSS (design inteiro) | 234,7 KB | **16,2 KB** |
| GSAP 3.12.5 | 72,2 KB | **28,2 KB** |
| ScrollTrigger | 43,4 KB | **17,7 KB** |
| Lenis | 14,2 KB | **4,0 KB** |
| Elementor frontend | 32,1 KB | **10,4 KB** |
| Fontes (CSS local) | 49,7 KB | **1,3 KB** |

**Imagens:** WebP automático (banner jpg 38,7 KB → **webp 15 KB**; conteúdo ~6,8 KB) · **89/89 `<img>` com `width`/`height`** · 35 `lazy` · 3 `fetchpriority` · 1 `preload` · **20/43 scripts com `defer`** · 22 SVG inline · fontes **self-hosted**.

**Metas:** LCP < 2,5 s · CLS < 0,1 · INP < 200 ms · FPS ≥ 55 com throttle 4×.

---

## 7. O QUE MUDA (e o que NÃO muda) POR LP

| Muda | NÃO muda |
|---|---|
| nicho, oferta, nomes, fotos/logos, cores da marca (o **matiz**), canal de contato, dados oficiais, número de itens nos blocos | **a anatomia de seções (livre, ver 15)** · a anatomia do card · a escala tipográfica · os raios e o vidro · o botão canônico · as entradas · a luz progressiva · o orçamento de velocidade |

**Regra de conteúdo:** o shell é fixo, o conteúdo é **factual** — nada inventado (C-270). Bloco sem material real **não aparece** e vira pendência declarada.

---

## 8. CHECKLIST DO SHELL (por LP)

1. Navbar, hero, FAQ e rodapé existem. O resto é desenhado por cliente (ver 15).
2. **Cards de vidro** com face/borda/blur/sombra interna conforme os tokens.
3. **Tipografia**: Inter 600 display 58/40/29/24 · apoio 18 · UI 16/14 · tracking -1.6px · peso ≤ 600 · **self-hosted**.
4. **Botão canônico** no CTA principal · **entradas** blur 7px · **motion** GSAP+ScrollTrigger+Lenis · **refresh** após imagens.
5. **Luz progressiva** na cor da marca (uma seção).
6. **Carrosséis** (prova e depoimentos) e **accordion** (FAQ) quando houver conteúdo.
7. **Grade única** e **prova numérica de layout** (C-269) · **grade fotográfica** (C-272).
8. **Orçamento de velocidade** batido e declarado (seção 6).
9. **Zero cara de IA** (C-271) e **zero invenção** (C-270).
10. Fundo contínuo com as costuras de fade — **"site 1 só"**.

---

## 9. ATUALIZAÇÃO DO SHELL (14/10/2026) — regras que o usuário corrigiu

> Fonte: `14-licoes-do-cliente.md`. Este bloco vale para toda LP, e prevalece sobre as seções 1 a 8 quando houver conflito.

### 9.1 Navbar mobile (critério numérico, obrigatório)
- Barra fixa com altura de até **56 px** em 320 a 430 px. Marca em texto ou logo pequeno, sem quebra de linha.
- **Uma** ação curta (ícone de WhatsApp ou texto de até 2 palavras). Altura do CTA até **40 px**, sem quebra de linha.
- Menu aberto em painel de tela cheia. Todos os links visíveis, sem corte, com foco por teclado. Fechado = inalcançável (`visibility: hidden` + `pointer-events: none` + `inert`).
- Nenhum botão grande de página no cabeçalho. Nenhuma faixa de fundo cinza.
- **Desktop:** navegação completa com CTA único. A barra desktop nunca aparece em tela pequena.

### 9.2 Responsividade total
- Mobile-first. Validação obrigatória em 320, 360, 375, 390, 414, 430, 600, 768, 1024, 1280, 1440 e 1920 px, em retrato e paisagem.
- Overflow horizontal vazio nessas larguras. Captura real de cada seção antes de declarar pronto.

### 9.3 Anti-seco (a LP precisa parecer autoral, não de template)
- **Hierarquia de dobra:** um ponto focal por dobra. Título monumental, subtítulo curto, uma ação clara.
- **Ritmo vertical:** variação de escala entre seções (uma seção densa, uma seção respirada). Espaço entre seções medido, não aleatório.
- **Luz, não caixa:** profundidade vem de luz, fio e gradiente sobre o fundo contínuo. Nenhuma seção com fundo próprio de contêiner.
- **Motion com intenção:** cada seção tem entrada própria (scroll reveal, parallax de plano, transição entre seções com GSAP). Nada de animação genérica igual em todos os blocos.
- **Estados:** hover, foco e pressionado definidos para todo botão e link. Sem estado padrão do navegador.
- **Copy que guia:** cada seção responde uma pergunta real de quem busca e leva a uma ação com ganho claro.

### 9.4 Botões
- Ação principal: preenchimento sólido da marca, com shiny sweep glow. O texto fica direto sobre o preenchimento, em contraste AA.
- ⛔ Texto dentro de caixa cinza sobre anel colorido. ⛔ Botão com gradiente escuro de sistema.

### 9.5 Caixas e cinza
- ⛔ Cinza e azul escuro de sistema (ex.: `#161922`, `#0B0D13`, `rgba(20,24,34,…)`). Superfícies saem da marca.
- Se a caixa existir, ela tem função e luz de cima (aresta superior clara), não preenchimento.

### 9.6 Motion (regra de velocidade e fluidez)
- Animação em loop só com `transform`. Limite de três laços contínuos na página inteira. Pausa fora da tela e com aba oculta.
- Nada de `transition: all`, nada de `box-shadow` em loop, nada de blur fixo durante o scroll.
- `prefers-reduced-motion`: animação desligada de verdade (`animation: none`), conteúdo inteiro visível.

### 9.7 Velocidade sem perder fluidez
- Scripts com `defer`. Biblioteca só se for usada. Fontes com preload só do que a primeira dobra usa.
- Imagens em WebP com srcset/sizes e proporção reservada. Nenhuma foto depende de script para aparecer.
- Medição obrigatória: LCP até 2,5 s, CLS até 0,1, INP até 200 ms, FPS no scroll, com CPU 4× e rede 4G simulada. Lighthouse de desempenho, acessibilidade, melhores práticas e SEO com número.
