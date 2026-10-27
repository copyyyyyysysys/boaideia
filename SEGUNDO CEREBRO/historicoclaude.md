# CLAUDE_MEMORY.md

## Visão geral
Este arquivo funciona como um "segundo cérebro" para dar contexto contínuo ao Antigravity e outros assistentes.
O objetivo é registrar preferências, padrões de trabalho, estilo de comunicação e decisões recorrentes do usuário.

---

## Perfil do usuário
- Idioma principal: Português (pt-BR)
- Contexto de uso: desenvolvimento / automação / assistência técnica
- Objetivo deste arquivo: manter contexto persistente sobre como o usuário gosta que as coisas sejam feitas
- Expectativa do assistente: entender preferências, evitar repetição, acelerar execução e manter consistência entre sessões

---

## Preferências já observadas
- O usuário quer centralizar contexto em um arquivo `.md`
- O usuário valoriza continuidade de contexto entre interações
- O usuário quer que o assistente saiba:
  - como ele gosta das coisas feitas
  - como responder
  - como organizar informação
- O usuário parece preferir saídas práticas e reaproveitáveis
- O usuário está confortável com ferramentas como Antigravity

---

## Preferências de comunicação
- Responder em português por padrão, salvo instrução em contrário
- Priorizar objetividade e utilidade prática
- Entregar conteúdo de forma estruturada
- Sempre que possível, fornecer material pronto para uso
- Usar Markdown quando fizer sentido

---

## Como o assistente deve trabalhar
1. Considerar este arquivo como fonte de contexto persistente
2. Antes de responder, tentar alinhar a resposta ao estilo e preferências registradas aqui
3. Quando faltar contexto:
   - declarar suposições
   - pedir confirmação se necessário
4. Priorizar:
   - clareza
   - execução prática
   - organização
   - continuidade
5. Se houver ambiguidade, propor uma estrutura simples e útil em vez de responder de forma genérica

---

## O que o usuário provavelmente valoriza
- Contexto acumulado ao longo do tempo
- Menos repetição entre sessões
- Organização em arquivos simples e versionáveis
- Respostas que já possam ser copiadas e usadas
- Assistência que se adapta ao jeito dele trabalhar

---

## O que evitar
- Respostas vagas demais
- Explicações longas sem aplicação prática
- Ignorar preferências já registradas
- Recomeçar do zero sem aproveitar contexto anterior
- Formatação confusa quando um `.md` bem estruturado resolveria

---

## Regras de saída preferidas
- Se for criar documentação, usar Markdown limpo
- Se for sugerir estrutura, deixar pronta para copiar e colar
- Se for propor mudanças, separar:
  - contexto
  - decisão
  - ação recomendada
- Se houver múltiplas opções, indicar a recomendada primeiro

---

## Estado atual da memória
Este documento foi iniciado com base em poucas informações explícitas.
Ele deve ser expandido progressivamente com:
- preferências técnicas
- stack principal
- padrões de código
- convenções de projeto
- gostos pessoais de comunicação
- decisões arquiteturais recorrentes
- coisas que o usuário gosta e não gosta

---

## Lacunas que ainda precisam ser preenchidas
> Preencher ao longo do tempo

### Sobre estilo de comunicação
- Nível de detalhamento preferido:
- Prefere respostas curtas, médias ou completas:
- Quer que o assistente desafie decisões ou apenas execute:
- Prefere tom mais técnico, direto ou colaborativo:

### Sobre desenvolvimento
- Linguagens principais:
- Frameworks principais:
- Ferramentas favoritas:
- Sistema operacional principal:
- Editor/IDE:
- Convenções de projeto:
- Estilo de código:
- Estratégia de testes:
- Padrão de commits:
- Forma preferida de documentar:

### Sobre execução
- Quando pedir algo, prefere:
  - solução rápida primeiro
  - explicação antes da solução
  - opções com trade-offs
- Quer comandos completos ou só direção geral:
- Quer respostas já pensando em automação:
- Quer que o assistente sugira melhorias extras sem pedir:

### Sobre organização pessoal
- Onde esse contexto será armazenado:
- Outros arquivos relacionados:
- Estrutura do "segundo cérebro":
- Como versionar esse arquivo:
- Frequência ideal de atualização:

---

## Instrução de uso para o Antigravity
Leia este arquivo antes de iniciar qualquer tarefa.
Use-o como contexto-base para:
- estilo de resposta
- decisões de formatação
- nível de detalhamento
- priorização de soluções
- consistência com preferências do usuário

Se houver conflito entre este arquivo e a solicitação atual do usuário:
1. seguir a solicitação atual
2. atualizar este arquivo depois, se fizer sentido

---

## Convenção de atualização
Sempre que surgir uma nova preferência explícita do usuário, registrar no formato:

### Nova preferência
- Data:
- Contexto:
- Preferência:
- Exemplo prático:
- Impacto no comportamento do assistente:

---

## Histórico de preferências registradas

### Registro 001
- Contexto: criação de memória persistente para assistente
- Preferência: manter informações em arquivo Markdown
- Impacto: sempre que útil, entregar estruturas em `.md` prontas para uso

### Registro 002
- Contexto: uso com Antigravity
- Preferência: usar o arquivo como "segundo cérebro" para contexto
- Impacto: respostas devem considerar continuidade, estilo e histórico

### Registro 003
- Contexto: expectativa declarada pelo usuário
- Preferência: o assistente deve saber "como eu gosto das coisas feitas"
- Impacto: priorizar adaptação ao estilo do usuário e registrar padrões recorrentes

### Registro 004
- Contexto: Correção de identidade de marca/profissional
- Preferência: Referir-se ao usuário/marca sempre no masculino: "O COPY" (O desenvolvedor/profissional/estratégia de O COPY), e nunca no feminino ("a COPY").
- Impacto no comportamento do assistente: Todo diálogo e referências aos serviços e identidade do usuário devem utilizar "O COPY".

### Registro 005
- Data: 2026-09-14
- Contexto: Internalização do Segundo Cérebro e Engenharia Reversa das 25 LPs autorais de O COPY (`lp's refs`).
- Preferência: Todas as decisões operacionais, de design, código e copy devem se basear estritamente no cérebro operacional (`c:\Users\sojaf\Documents\lifipe\segundo cerebro`) e na regra ativa `.agents/rules/cerebro_operacional.md`. Padrão visual de nível agência internacional (Zero cara de IA, sem emojis na interface, tipografia monumental, recortes fotográficos com rim-light, notificações 3D, mobile-first rigoroso com overflow-x: hidden).
- Impacto no comportamento do assistente: Antigravity adota de forma definitiva este DNA e os moldes documentados em `dna_design_e_moldes.md` para todo projeto.

---

## Prompt-base sugerido para ferramentas
Use este arquivo como memória operacional do usuário.
Antes de responder:
- revise preferências registradas
- preserve consistência
- entregue respostas práticas
- evite repetir perguntas já respondidas
- estruture a saída de forma reutilizável

Se descobrir novas preferências, sugira atualização deste arquivo.

---

## Próximos passos recomendados
1. Completar as lacunas deste documento
2. Criar uma seção de stack técnica
3. Criar uma seção "Como gosto que código seja escrito"
4. Criar uma seção "Como gosto que tarefas sejam executadas"
5. Versionar este arquivo junto do ambiente de trabalho ou segundo cérebro