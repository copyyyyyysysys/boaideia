# DNA de Design, Moldes & Arquitetura HTML/CSS (O COPY)
> **Extração e Engenharia Reversa das 25 Landing Pages Autorais de O COPY (`lp's refs`)**
> **Integração com:** `claude-design-premium`, `ui-ux-pro-max` e `segundo cerebro`.

---

## 1. Visão Geral dos 3 Grandes Moldes Autorais

Após analisar visualmente todas as 25 páginas de referência criadas por **O COPY**, os moldes dividem-se em 3 pilares de altíssima conversão e impacto artístico:

1. **Molde A: Infoproduto / Lançamento / Masterclass de Alta Energia (Dark Neon)**
   - *Exemplos nas referências:* `04826dce` (O Grande Salto), `34834a55` (Shopee Viral), `5f4fedb3` (WhatsApp Status), `63e26148` (Milhas), `f0448066` (Gamer de Sucesso), `f09ced8e` (Nômade Milionário), `ff849eb9` (Extreme System).
2. **Molde B: Editorial High-Fashion & Swiss Brutalism (Portfólio & Agência de Elite)**
   - *Exemplos nas referências:* `0fce254b` (Mariana Design), `21444e4e` (Akkira), `7fa83bcb` (Raw Energy), `9ee5b7bb` (Mary Gu), `ae9656b6` (Collection Artic), `c08d657b` (Creative Developer), `e736e82d` (Rayhan Aditya).
3. **Molde C: High-Ticket B2B & Consultoria / Advocacia de Prestígio**
   - *Exemplos nas referências:* `c8d6c615` (Upshot Estratégia), `b933d2ca` (Advmarc), `ef68e9aa` (Dr. Filipe Costa), `e9df76ea` (Gonzalo Aguila Mastermind).

---

## 2. Componentes Estruturais Reversos (HTML + CSS Prontos)

### Componente 1: Hero Monumental com Badges Flutuantes 3D e Rim-Light
O elemento mais marcante das suas páginas de infoproduto e serviços: o mentor/personagem recortado com iluminação de borda (*rim light*) colorida e badges de notificação flutuando no espaço tridimensional (ex: Nubank "Transferência recebida R$ 1.500,00" ou "Venda aprovada!").

```html
<section class="hero-section">
  <div class="hero-container">
    <div class="hero-content">
      <div class="badge-status">
        <span class="pulse-dot"></span>
        <span class="badge-text">Inscrições Abertas • 100% Online e Gratuito</span>
      </div>
      
      <h1 class="hero-title">
        Daqui a 12 meses, você vai contar aos seus parentes que <span class="highlight">esse foi o caminho</span>
      </h1>
      
      <p class="hero-subtitle">
        O método testado e validado para destravar resultados previsíveis no digital sem depender de métricas de vaidade.
      </p>

      <div class="hero-cta-group">
        <a href="#oferta" class="btn-primary glow-btn">
          <span>QUERO PARTICIPAR</span>
          <svg class="icon-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <div class="hero-trust">
          <div class="stars">★★★★★</div>
          <span class="trust-text">+2.400 alunos impactados</span>
        </div>
      </div>
    </div>

    <div class="hero-visual">
      <!-- Glow de fundo aura -->
      <div class="ambient-glow"></div>
      
      <!-- Imagem recortada do mentor com rim light -->
      <img src="mentor-cutout.png" alt="Mentor" class="mentor-image">

      <!-- Notificações 3D Flutuantes (Nubank / Kiwify / Vendas) -->
      <div class="floating-badge badge-top-right">
        <div class="badge-icon-nu">nu</div>
        <div class="badge-info">
          <span class="badge-title">Transferência recebida</span>
          <span class="badge-val">R$ 1.500,00 de Gabriel</span>
        </div>
      </div>

      <div class="floating-badge badge-bottom-left">
        <div class="badge-icon-check">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a3ff12" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <div class="badge-info">
          <span class="badge-title">Venda Aprovada!</span>
          <span class="badge-val">Comissão: R$ 572,32</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
/* CSS Tokens & Estilo do Hero */
:root {
  --bg-dark: #07080a;
  --accent-neon: #a3ff12;
  --accent-glow: rgba(163, 255, 18, 0.45);
  --card-glass: rgba(18, 20, 26, 0.7);
  --card-border: rgba(255, 255, 255, 0.08);
}

.hero-section {
  position: relative;
  background: var(--bg-dark);
  color: #fff;
  padding: 100px 24px 60px;
  overflow: hidden;
}

.hero-container {
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 48px;
}

.badge-status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(163, 255, 18, 0.1);
  border: 1px solid rgba(163, 255, 18, 0.3);
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-neon);
  margin-bottom: 24px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-neon);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-neon);
  animation: pulse 1.8s infinite;
}

.hero-title {
  font-family: 'Syne', 'Inter', sans-serif;
  font-size: clamp(2.4rem, 4.2vw, 3.8rem);
  font-weight: 800;
  line-height: 1.12;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.hero-title .highlight {
  color: var(--accent-neon);
  text-shadow: 0 0 25px var(--accent-glow);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--accent-neon);
  color: #000;
  font-weight: 800;
  font-size: 1.05rem;
  padding: 18px 36px;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px var(--accent-glow);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 40px var(--accent-glow);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.ambient-glow {
  position: absolute;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 1;
}

.mentor-image {
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 15px 35px rgba(0,0,0,0.8));
}

.floating-badge {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(15, 17, 23, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 12px 18px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  animation: float 4s ease-in-out infinite alternate;
}

.badge-top-right { top: 12%; right: -5%; }
.badge-bottom-left { bottom: 15%; left: -8%; animation-delay: -2s; }

@keyframes float {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-12px); }
}
```

---

### Componente 2: Marquee Ticker Infinito (Shopee Viral / Sprint)
Faixa contínua de escassez e impacto visual que divide seções.

```html
<div class="ticker-wrap">
  <div class="ticker-move">
    <span class="ticker-item">MÉTODO EXCLUSIVO •</span>
    <span class="ticker-item">VAGAS LIMITADAS •</span>
    <span class="ticker-item">ZERO RISCO (7 DIAS DE GARANTIA) •</span>
    <span class="ticker-item">ACESSO IMEDIATO •</span>
    <span class="ticker-item">MÉTODO EXCLUSIVO •</span>
    <span class="ticker-item">VAGAS LIMITADAS •</span>
  </div>
</div>
```

```css
.ticker-wrap {
  width: 100%;
  overflow: hidden;
  background: #ff5500;
  color: #000;
  padding: 12px 0;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  transform: rotate(-0.8deg);
  margin: 40px 0;
}
.ticker-move {
  display: flex;
  width: max-content;
  animation: ticker 20s linear infinite;
}
.ticker-item {
  padding: 0 20px;
  white-space: nowrap;
}
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

### Componente 3: Fluxograma Conectado por Linhas Neon (O Grande Salto / Upshot)
Cards conectados por linhas vetoriais ilustrando etapas práticas de aprendizado ou processo comercial.

```html
<div class="flow-container">
  <div class="flow-step step-1">
    <div class="flow-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a3ff12" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    </div>
    <div class="flow-content">
      <h3>Método CTD de Prospecção</h3>
      <p>Tenha acesso ao meu método proprietário para atrair clientes de alto valor todos os dias.</p>
    </div>
  </div>

  <svg class="flow-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M 50,0 C 50,50 50,50 50,100" stroke="#a3ff12" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
  </svg>

  <div class="flow-step step-2">
    <div class="flow-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a3ff12" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h10M7 9h6"/></svg>
    </div>
    <div class="flow-content">
      <h3>Como Precificar Serviços de Design</h3>
      <p>Pare de deixar dinheiro na mesa. Cobre pelo valor gerado e fature alto com landing pages.</p>
    </div>
  </div>
</div>
```

---

### Componente 4: Tabela Comparativa (Agência Tradicional vs Nosso Modelo)
Elemento-chave para quebra de objeções encontrado na LP `Upshot` (`c8d6c615`):

```html
<div class="comparison-grid">
  <!-- Modelo Convencional -->
  <div class="compare-card compare-bad">
    <div class="compare-header">
      <h4>MODELO TRADICIONAL</h4>
      <p class="compare-sub">Agências generalistas de massa</p>
    </div>
    <ul class="compare-list">
      <li><span class="cross">✕</span> Não entendem a fundo o seu modelo de negócio</li>
      <li><span class="cross">✕</span> Sem planejamento estratégico prévio e claro</li>
      <li><span class="cross">✕</span> Tráfego solto sem acompanhamento diário</li>
      <li><span class="cross">✕</span> Cobram horas mesmo sem bater as metas de venda</li>
    </ul>
  </div>

  <!-- Ícone de versus central -->
  <div class="compare-vs-badge">VS</div>

  <!-- Nosso Modelo de Elite -->
  <div class="compare-card compare-good">
    <div class="compare-header">
      <h4>NOSSO MODELO DE ELITE</h4>
      <p class="compare-sub">Parceiro estratégico focado em faturamento</p>
    </div>
    <ul class="compare-list">
      <li><span class="check">✓</span> Estudamos suas tendências e público específico</li>
      <li><span class="check">✓</span> Copy autoral, persuasiva e com gatilhos de alta conversão</li>
      <li><span class="check">✓</span> Design com acabamento internacional (UI/UX sem cara de IA)</li>
      <li><span class="check">✓</span> Otimizações contínuas focadas em ROI real</li>
    </ul>
  </div>
</div>
```

---

### Componente 5: Card de Oferta com Selo 3D de Garantia Incondicional
Padrão Shopee Viral e Sprint: valor âncora gigante, checklist com ícones verdes e selo com gradiente dourado ou de fogo.

```html
<div class="pricing-card">
  <div class="pricing-badge">OPORTUNIDADE ESPECIAL</div>
  <p class="old-price">De R$ 697,00 por apenas</p>
  <div class="main-price">
    <span class="currency">R$</span>
    <span class="amount">37,00</span>
  </div>
  <p class="payment-terms">Pagamento único ou até 12x no cartão</p>

  <ul class="offer-features">
    <li><svg class="check-svg" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> Acesso vitalício a todo o conteúdo</li>
    <li><svg class="check-svg" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> +2.000 modelos e referências validadas</li>
    <li><svg class="check-svg" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> Bônus: Suporte VIP e Grupo de Networking</li>
  </ul>

  <a href="#checkout" class="btn-checkout">
    <span>QUERO COMEÇAR AGORA</span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </a>

  <!-- Selo 3D de Garantia -->
  <div class="guarantee-box">
    <div class="seal-3d">
      <span class="seal-days">07</span>
      <span class="seal-label">DIAS DE GARANTIA</span>
    </div>
    <div class="guarantee-text">
      <strong>Risco Absolutamente Zero</strong>
      <p>Se você não amar os resultados nos primeiros 7 dias, devolvemos 100% do seu dinheiro sem letras miúdas.</p>
    </div>
  </div>
</div>
```

---

### Componente 6: Carrossel / Showcase de Streaming (Estilo Finchflix / Nômade Milionário)
Visual com múltiplos cards verticais em perspectiva simulando capas de série do streaming:

```html
<div class="streaming-section">
  <h2 class="streaming-title">AULAS COMPLETAS EM ESTILO <span>STREAMING</span></h2>
  
  <div class="streaming-carousel">
    <div class="stream-card">
      <img src="poster-modulo-1.jpg" alt="Módulo 1">
      <div class="stream-overlay">
        <span class="stream-badge">AULA 01</span>
        <h4>Criando o Produto Irresistível</h4>
      </div>
    </div>
    
    <div class="stream-card active-card">
      <img src="poster-modulo-2.jpg" alt="Módulo 2">
      <div class="stream-overlay">
        <span class="stream-badge">AULA 02</span>
        <h4>Estrutura e Funil de Vendas</h4>
      </div>
    </div>
    
    <div class="stream-card">
      <img src="poster-modulo-3.jpg" alt="Módulo 3">
      <div class="stream-overlay">
        <span class="stream-badge">AULA 03</span>
        <h4>Tráfego e Anúncios Virais</h4>
      </div>
    </div>
  </div>
</div>
```

---

## 3. Checklist de Garantia Visual Antigravity (Antes de Entregar)

1. [ ] **Zero Cara de IA:** A interface possui tipografia monumental, recortes fotográficos refinados, linhas sutis e respiro?
2. [ ] **Zero Emojis Genéricos:** Foi utilizado exclusivamente SVG inline fino?
3. [ ] **Foco Mobile Soberano:** O viewport tem `overflow-x: hidden !important` e o Hero cabe perfeitamente na primeira tela do iPhone?
4. [ ] **Gatilhos Persuasivos de O COPY:** A headline aborda uma dor específica e o CTA é orientado a ganho direto?
5. [ ] **Motion & Acabamento:** Há micro-interações de hover suaves (`cubic-bezier(0.16, 1, 0.3, 1)`) e efeitos de profundidade?
