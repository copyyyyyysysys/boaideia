# 15 · REGRA DE ANATOMIA LIVRE (vigente desde 14/10/2026)

> Esta regra substitui as partes do shell (11), da régua (13) e do template que exigiam ordem fixa de 12 blocos. Em conflito, esta vale.
> Ordem do cliente (14/10/2026, verbatim em essência): os sites variam de cliente para cliente. Seções e efeitos devem ser diferentes entre sites para ser autênticos, usando a mesma qualidade de efeitos, design, bibliotecas, UI/UX, animações e componentes. O site é desenhado para aquele cliente, nicho e contexto. Só a navbar, a hero, o FAQ e o rodapé são obrigatórios. Não há anatomia nem estrutura obrigatória além disso.

---

## 1. O QUE É OBRIGATÓRIO EM TODO SITE

| Item | O que é obrigatório | O que não é obrigatório |
|---|---|---|
| **Navbar** | Marca, navegação, uma ação. Comportamento mobile conforme critérios numéricos (bloco 9.1 do shell): altura contida, sem sobreposição, CTA de desktop nunca aparece abaixo de 768 px, menu em tela cheia fechado de verdade. | Posição, forma e cor da marca. |
| **Hero** | Ponto focal visual forte na primeira dobra, proposta clara, ação principal. Sem emblema, selo ou ilustração de sistema como ponto focal. | Layout, composição e estilo. |
| **FAQ** | Perguntas reais de quem busca o serviço, respostas de uma a duas linhas, sem promessa. | Formato visual (acordeão ou outro), número de perguntas. |
| **Rodapé** | Marca, contato oficial, horário quando houver, links legais. | Colunas, ordem e ornamento. |

Tudo o mais é decidido por cliente.

---

## 2. O QUE É OBRIGATÓRIO EM QUALIDADE (vale para todo site, em qualquer anatomia)

Estes são padrões de qualidade, não de estrutura. Valem em qualquer site:

- **Efeitos:** GSAP e ScrollTrigger para scroll reveal, parallax de planos e motion entre seções. Animação só com transform e opacity. Limite de três laços contínuos. Reduced motion desliga de verdade.
- **Componente de luz progressiva (neon):** quando o site tiver uma sequência de etapas, passos ou pilares, esse trecho usa a mecânica de luz progressiva (trilho que preenche com o scroll, itens que acendem em sequência, nó luminoso, glow no título em duas camadas, cor da marca). O componente é o mesmo em todos os dispositivos. Não há versão simplificada no celular. Quantas vezes aparece e em qual seção é decidido por site. Ver `10-referencias-neon-lp.md` e o bloco de luz progressiva do template.
- **Botão:** preenchimento sólido da cor da marca com shiny sweep glow nas ações principais. Texto nunca corta.
- **Superfície:** fundo contínuo, sem caixas cinza ou azul de sistema. Profundidade por luz, não por preenchimento.
- **UI/UX:** estados de hover, foco e pressionado definidos. Hierarquia visual clara em cada dobra. Conteúdo que guia. Acessibilidade AA.
- **Responsividade total:** 100% responsivo, validado em 320 a 1920 px, sem overflow, sem sobreposição, sem texto cortado.
- **Performance e SEO:** Core Web Vitals medidos com número, WebP com srcset, scripts com defer, meta e dados estruturados corretos.
- **Encoding e texto:** UTF-8, nenhum caractere quebrado, nenhum termo estrangeiro que o público não conhece.

---

## 3. O QUE É DESENHADO POR CLIENTE (livre)

- **Anatomia e ordem das seções:** cada site define suas seções a partir do negócio, do público e da jornada de decisão.
- **Quantidade de seções e de blocos:** decidida pelo conteúdo real. Sem bloco por obrigação.
- **Composição visual e layout:** diferente entre sites. Não copiar a estrutura de uma referência.
- **Paleta:** a da marca do cliente. As referências (Kyon e outras) são referência máxima de design, componentes, UI/UX, animações e paletas em termos de qualidade, nunca de estrutura.
- **Tipografia e escala:** decididas pelo design do cliente, com a qualidade de referência.
- **Copy e tom:** derivados do nicho e do público.

---

## 4. REFERÊNCIAS: O QUE COPIAR E O QUE NÃO COPIAR

| Copiar (referência máxima) | Não copiar (específico de cada site) |
|---|---|
| Qualidade de design e de acabamento | Estrutura e ordem de seções |
| Qualidade de componentes (cards, botões, trilhos, navbars) | Anatomia de blocos |
| Qualidade de animação e de motion | Quantidade de seções |
| Qualidade de UI/UX e de copy que guia | Layout de hero específico |
| Paletas e tratamento de luz | Textos, nomes de seções e rótulos |

Análise obrigatória antes de criar: analisar a Kyon (e as referências do cérebro) em design, componentes, animação e UI/UX. Registrar o que a referência faz bem e como o site novo supera. A análise não serve para copiar estrutura.

---

## 5. O QUE O GERADOR NÃO PODE FAZER

- Não exigir 12 blocos, nem qualquer ordem fixa além de navbar, hero, FAQ e rodapé.
- Não nomear seções inventadas pelo gerador (regra antiga, reforçada).
- Não impor paleta, estrutura ou composição que não venha do cliente.
- Não tratar a estrutura de uma referência como modelo para o site novo.

---

## 6. CHECAGEM ANTES DE ENTREGAR QUALQUER PROMPT

- [ ] Navbar, hero, FAQ e rodapé presentes. Demais seções vêm do briefing do cliente.
- [ ] Qualidade de efeitos, componentes, UI/UX e animação conforme a seção 2.
- [ ] Análise da referência feita para qualidade, sem copiar estrutura.
- [ ] Anatomia do site derivada do nicho, do público e da jornada do cliente, não de um modelo fixo.
- [ ] Nenhum termo proibido, nenhum jargão, nenhum caractere quebrado.
- [ ] Validação responsiva com capturas e números.
