# 14 · LIÇÕES DO CLIENTE — REGRAS PERMANENTES DO GERADOR (atualizado em 14/10/2026)

> Este arquivo é a memória de correções do usuário. Toda correção dele vira regra aqui antes de qualquer prompt novo.
> Ordem de prioridade: ordem direta do usuário > este arquivo > shell canônico (11) > régua (13) > template (template-prompt-antigravity.md).

---

## 1. O QUE O USUÁRIO CORRIGIU (e a regra que sai disso)

### 1.1 Landing seca, longe da Kyon e das referências
- **Erro:** LPs saindo com cara de template seco: cards iguais, hero fraca, seções sem hierarquia, pouco motion e pouca textura.
- **Regra:** toda LP segue o **shell canônico** (arquivo 11) com **detalhamento de design** no prompt: escala tipográfica, ritmo vertical, luz, fio, estados de hover e de scroll, motion entre seções e transições por bloco. "Seja autêntico" sem especificação é proibido.
- **Critério de aceite:** a página, desfocada, precisa ter hierarquia clara (um ponto focal por dobra), ritmo visível entre seções e superfície contínua com luz. Se parecer template, está reprovada.

### 1.2 Navbar quase sempre errada no mobile
- **Erro:** navbar grande no celular, botão de CTA com tamanho de botão de página, menu que vaza, marca cortada e cabeçalho que ocupa dobra demais.
- **Regra:** navbar mobile **minimalista**: altura contida (até 56 px de barra fixa), marca em texto ou logo pequeno, uma ação curta (ícone ou texto curto) e menu que abre em painel de tela cheia com o conteúdo inteiro visível. Menu fechado = inalcançável (ver C-297/C-298). Ver seção 2 do arquivo 11.
- **Critério de aceite:** em 320, 360, 390 e 430 px, a navbar ocupa no máximo 56 px de altura, o CTA não passa de 40 px de altura e não quebra linha, e o menu aberto mostra todos os links sem corte.

### 1.3 Quebrado no mobile na maioria das páginas
- **Regra:** **100% responsivo em todos os dispositivos e todas as páginas**. Mobile-first, de 320 a 1920 px, em retrato e paisagem.
- **Critério de aceite:** overflow horizontal vazio em 320, 360, 375, 390, 414, 430, 600, 768, 1024, 1280, 1440 e 1920 px. Capturas reais de cada seção nessas larguras, antes de declarar pronto.

### 1.4 Antigravity criando scratch e pouco detalhe de design
- **Erro:** o executor cria arquivos de rascunho, HTMLs alternativos, planos em arquivo e relatórios intermediários, e entrega design genérico porque o prompt não detalhou nada.
- **Regra de prompt:** o design é a parte mais importante e **precisa ser detalhado no prompt**. Mas detalhar é descrever **função, medida e critério**, não nomear paleta, nome de seção ou estrutura inventada pelo gerador. Cada seção precisa de: função, pergunta que responde, ação que leva, medida (tamanho, espaçamento, ritmo), estado de hover, comportamento no mobile e motion de entrada.
- **Regra anti-scratch:** zero arquivo de trabalho na raiz. Zero HTML alternativo. Zero plano em arquivo. Zero script intermediário. Um commit, um push, relatório curto na resposta.

### 1.5 Prompt ficou simples demais
- **Erro:** os últimos prompts saíram enxutos e perderam análise, validação e detalhe.
- **Regra:** o prompt segue o **template-prompt-antigravity.md** completo, com CONTEXTO, OBJETIVO, REGRA DE EXECUÇÃO, VELOCIDADE, DADOS OFICIAIS, ASSETS, CÉREBRO E SKILLS, DIREÇÃO VISUAL, MOBILE-FIRST, MOTION, SEO, GIT, VALIDAÇÃO e RELATÓRIO. Usar só as partes relevantes ao tamanho da tarefa, mas **nunca cortar o design, a validação ou a análise**.

### 1.6 Análise do site publicado antes de prompt
- **Regra:** antes de qualquer prompt de ajuste, analisar o site publicado (HTML, CSS, JS, peso, cache, fotos) e registrar o erro no mapa de operação com número (E-XX). O prompt cita o erro e o critério de aceite.

### 1.7 Fotos sempre em WebP
- **Regra:** toda imagem raster em WebP, com variantes por largura (srcset/sizes), width/height e proporção reservada. Nenhum JPG ou PNG no repositório.
- **Regra de foto da cliente:** foto em caminho local do computador (C:\...) **não chega ao workspace**. Pedir o upload no chat antes de qualquer prompt que dependa dela. Sem foto, a área fica como pendência declarada, nunca como imagem falsa.

### 1.8 Fundos e caixas cinzas
- **Regra:** nenhuma caixa com cinza ou azul escuro de sistema. Superfícies saem da marca (luz, fio, brilho interno). Proibido container de seção com fundo próprio. Fundo contínuo do topo ao rodapé. Ver template, seção "FUNDO GLOBAL CONTÍNUO".
- **Regra de botão:** o botão de ação é sólido da marca, com shiny sweep glow. Sem texto dentro de caixa cinza sobre anel colorido. O texto fica direto sobre o preenchimento da marca, com contraste AA.

### 1.9 Seção que o cliente remove, remove inteira
- **Regra:** se o cliente pede para remover uma seção, remover o HTML, o CSS órfão, o link de navegação e o id. Nenhum vestígio.

### 1.10 Dado não confirmado não entra na página
- **Regra:** CRECI, número de empreendimento, cidade, CEP, horário, e-mail, depoimento, logo e foto só entram com dado oficial. Sem o dado, vira pendência no relatório.
- **Regra de imobiliário e investimento:** sem promessa de valorização, renda, rentabilidade, retorno, proteção garantida ou ganho. Termos da bio ("valorização", "renda", "proteção patrimonial") não viram benefício nem título. Copy de investimento fica pendente de revisão jurídica.

---

## 2. FORMA DO PROMPT (o que muda a partir de agora)

1. **CONTEXTO** — marca, negócio, tipo de página, o que já existe e o que está aprovado.
2. **OBJETIVO** — resultado concreto, com critério de aceite numérico.
3. **REGRA DE EXECUÇÃO — RÁPIDO** — as quatro proibições de scratch e o fluxo de commit e push.
4. **VELOCIDADE** — mapa de arquivos, etapas numeradas, orçamento de processo, teto por item, lote de assets, congelamento de escopo.
5. **DADOS OFICIAIS** e **LACUNAS** (lacunas com pendência, nunca inventadas).
6. **ASSETS** — caminhos reais, WebP, poster, nenhuma imagem de IA quando há asset real.
7. **CÉREBRO E SKILLS** — ler o cérebro antes de executar.
8. **DIREÇÃO DE DESIGN DETALHADA** — por seção: função, pergunta, ação, medida, estados, mobile, motion. Sem nomes de paleta ou de seção inventados pelo gerador.
9. **NAVBAR** — especificação mobile e desktop com critério de aceite numérico (seção 1.2).
10. **MOBILE-FIRST** — 320 a 1920 px, com lista de larguras.
11. **MOTION** — entradas, parallax, scroll reveal, motion entre seções, GSAP, reduced motion.
12. **PERFORMANCE** — orçamento, Core Web Vitals e FPS com número.
13. **SEO, ACESSIBILIDADE, SEGURANÇA e LGPD**.
14. **GIT E CLOUDFLARE** — commit, push, build, cache, deploy confirmado.
15. **VALIDAÇÃO** — capturas nominais, buscas no HTML publicado, overflow, Lighthouse.
16. **RELATÓRIO CURTO NA RESPOSTA** — alterado, preservado, hash, build, URL, capturas, números, pendências.

---

## 3. CHECAGEM ANTES DE ENTREGAR QUALQUER PROMPT

- [ ] Análise do site publicado feita (ou briefing lido, se for projeto novo) e erros com número registrados no mapa de operação.
- [ ] Design detalhado por seção (função, medida, estados, mobile, motion), sem paleta nem seção inventada.
- [ ] Navbar com critério numérico mobile e desktop.
- [ ] 100% responsivo: lista de larguras e critério de overflow.
- [ ] Zero scratch, zero HTML alternativo, zero relatório intermediário.
- [ ] Fotos em WebP, foto da cliente só com upload confirmado.
- [ ] Nenhuma caixa cinza, nenhum botão com texto em caixa cinza.
- [ ] Nenhuma promessa de retorno em imobiliário e investimento. CRECI como bloqueante quando faltar.
- [ ] Commit, push e build com hash e ID reais. Deploy só confirmado no HTML publicado.
- [ ] Prompt com o tamanho do template completo.

---

## 4. CASO MICHAEL SANTOS (14/10/2026): O QUE O CLIENTE VIU E NÃO PODE VOLTAR A ACONTECER

- **Página "bíblia" de texto:** 882 palavras, texto corrido em quase toda seção, sem imagem, sem forma, sem luz. O cliente disse que parece Word. Regra: cada dobra tem um ponto focal visual, e cada bloco tem no máximo 60 palavras no desktop. Texto longo vai para FAQ ou detalhe.
- **Grid quebrado:** seções com colunas, alturas e margens diferentes, e cards desalinhados. Regra: grid de 12 colunas único, com a mesma largura máxima e as mesmas margens em todas as seções. Validar grid em 1440 e 1920 px, não só no celular.
- **Texto cortado no botão:** o número de WhatsApp saiu cortado. Regra: texto de botão nunca corta. Quebra em duas linhas ou ocupa a largura do botão.
- **Navbar quebrada no mobile (repetido):** regra já registrada. Ver bloco 9.1 do shell.
- **Caractere quebrado:** (�) no HTML. Regra: UTF-8 declarado e busca de � vazia antes do deploy.
- **Cara de IA:** selos em pill em todo título, numeração 01/02/03, borda e raio idênticos em todo card, hairline de gradiente em toda seção. Regra: nenhum padrão de template. Cada elemento precisa de função visível.
- **Sem força visual:** o cliente disse que a página não tem design nenhum e não chega perto da Kyon. Regra: uma peça de design forte por dobra (tipografia monumental, forma, luz, foto ou composição), e nunca só texto sobre branco.
- **Motion mínima:** GSAP só em dois blocos. Regra: motion entre seções e entrada própria por bloco, conforme o shell.
- **Regra de decisão:** quando o cliente reclama de design, a correção é recriar o design, não ajustar texto.

---

## 5. ATUALIZAÇÃO (14/10/2026): REGRAS DO CLIENTE PARA TODO PROMPT A PARTIR DE AGORA

1. **Sempre mandar o executor analisar a Kyon** (kyondigital.com): design, animação, scroll e movimento. Mesmo sendo WordPress, o nível é referência de design e de animação. O prompt pede a análise do movimento, não só do código.
2. **Português claro.** Nenhum termo em inglês ou jargão que o público não conhece. "Due Diligence" foi retirado do vocabulário da casa. Usar linguagem de função: análise de documentos, conferência de matrícula, formalização de escritura.
3. **Mais azul e mais força visual.** Página só branca é reprovada. A cor da marca aparece como campo de cor em pelo menos duas seções, em faixas contínuas, sem caixa.
4. **Hero sem emblema.** Nada de selo, logo genérico, ilustração de sistema ou anel com letras como ponto focal. Ponto focal é tipografia, forma sólida, luz e foto, quando houver.
5. **Premium de verdade:** cada elemento precisa de função visível. Efeito bonito sem função é cara de IA.
6. **Relatório do executor é verificado.** Cada alegação do relatório (hash, build, contagem, ausência de termo) é conferida com busca no publicado antes de aceitar. Relatório com alegação falsa reprova a entrega.
7. **Prompt sempre detalhado** no formato completo do template. Nunca enxuto.

---

## 6. CASO RP GESTOR IMOBILIÁRIO (14/10/2026): O QUE JÁ DEU ERRADO E NÃO PODE VOLTAR

- **Botão de desktop vazando no celular:** classe com display inline-flex, declarada depois de uma regra que esconde o botão, derrota a regra de esconder. Regra: o CTA de desktop nunca aparece abaixo de 768 px. A regra de esconder vem com especificidade maior ou em média própria. Captura de 320 a 430 px antes de declarar a navbar pronta.
- **Trilho de luz passando por cima de número:** trilho e número na mesma coluna. Regra: o trilho tem coluna própria. O número nunca fica sobre o trilho. O trilho para no último nó.
- **Título apagado sobre fundo escuro:** glow de texto borra a leitura. Regra: título com contraste AA, glow só como halo fora do texto, captura com a animação concluída.
- **Relatório de navbar sem captura:** o relatório disse "sem sobreposição" e a captura mostrou o contrário. Regra: navbar só é aceita com captura real.

---

## 7. ATUALIZAÇÃO (14/10/2026): ANATOMIA LIVRE

- **Anatomia de seções não é obrigatória.** Só navbar, hero, FAQ e rodapé são obrigatórios. Cada site define suas seções pelo negócio, público e jornada do cliente.
- **Referência é máxima em qualidade, não em estrutura.** Kyon e as outras referências servem para design, componentes, UI/UX, animação e paleta. Estrutura, ordem e quantidade de seções não são copiadas.
- **Qualidade é obrigatória em todo site:** GSAP e ScrollTrigger, motion entre seções, componente de luz progressiva quando houver etapas, botão com shiny sweep glow, UI/UX com estados, responsividade total, performance e SEO medidos.
- **Regra vigente:** `15-regra-anatomia-livre.md`. Em conflito com shell (11), régua (13) ou template, a regra 15 vale.

---

## 8. ANÁLISE DA KYON: SÓ NO PROMPT DE CRIAÇÃO (14/10/2026)

- **Criação de site novo:** o prompt manda o Antigravity analisar a Kyon (design, componentes, UI/UX, animação, luz, paleta). É a análise de referência para o site nascer com o nível de qualidade certo.
- **Ajuste, correção ou alteração em site já criado:** o prompt NÃO manda analisar a Kyon de novo. O executor já absorveu a referência na criação. Repetir a análise gasta tempo e não ajuda.
- **Ajuste começa pelo problema concreto:** erro medido no publicado, critério de aceite e validação. Sem análise de referência, sem leitura do cérebro inteiro.
- **Erro corrigido:** nos ajustes recentes (MOS, RP) eu mandei analisar a Kyon de novo. Não repetir isso.
