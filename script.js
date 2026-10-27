/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal v5: Lenis + GSAP 3.12.5 + ScrollTrigger
 * Padrão Internacional de Motion, FAQ Accordion Interativo e Parallax Fluido
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. INICIALIZAÇÃO LENIS (SMOOTH SCROLL) & GSAP TICKER
     ========================================================================== */
  let lenis = null;

  if (!isReducedMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.2,
      infinite: false
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  }

  /* ==========================================================================
     2. ANIMAÇÕES GSAP, PARALLAX & REVELAÇÕES SIGNATURE (C-267)
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Entrada da Hero (Assinatura C-267: blur 7px + translate)
    const heroReveals = document.querySelectorAll('.hero-text-col .gsap-reveal');
    if (heroReveals.length > 0) {
      gsap.from(heroReveals, {
        opacity: 0,
        y: 40,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    const heroVisual = document.querySelector('.hero-visual-col');
    if (heroVisual) {
      gsap.from(heroVisual, {
        opacity: 0,
        y: 50,
        scale: 0.94,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.15,
        clearProps: 'all'
      });
    }

    // Parallax em Watermarks Monumentais
    const watermarks = [
      { sel: '.hero-bg-watermark', trigger: '.hero-cinematic', y: 150 },
      { sel: '.showcase-bg-watermark', trigger: '.showcase-section', y: 180 }
    ];

    watermarks.forEach(({ sel, trigger, y }) => {
      const el = document.querySelector(sel);
      const trig = document.querySelector(trigger);
      if (el && trig) {
        gsap.to(el, {
          scrollTrigger: {
            trigger: trig,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          },
          y: y,
          ease: 'none'
        });
      }
    });

    // Parallax nos Feixes de Luz Volumétricos (Kyon Beams)
    const beam1 = document.querySelector('.beam-1');
    const beam2 = document.querySelector('.beam-2');
    if (beam1) {
      gsap.to(beam1, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2
        },
        y: 200,
        x: -40,
        ease: 'none'
      });
    }
    if (beam2) {
      gsap.to(beam2, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2
        },
        y: -150,
        x: 30,
        ease: 'none'
      });
    }

    // CARDS DE ESPECIALIDADES COM PARALLAX NO SCROLL
    const parallaxCards = document.querySelectorAll('.specialties-grid .parallax-card');
    if (parallaxCards.length > 0) {
      gsap.from(parallaxCards, {
        scrollTrigger: {
          trigger: '.specialties-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'opacity,visibility'
      });

      parallaxCards.forEach((card) => {
        const speed = parseFloat(card.getAttribute('data-speed')) || 0;
        gsap.to(card, {
          scrollTrigger: {
            trigger: '.specialties-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          },
          yPercent: speed,
          ease: 'none'
        });
      });
    }

    // Revelação dos Cabeçalhos de Seção
    const sectionHeadings = document.querySelectorAll('.section-heading .gsap-reveal');
    sectionHeadings.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });

    // Revelação dos Blocos Bento do Portfólio
    const bentoItems = document.querySelectorAll('.bento-feature-monumental, .bento-card-duo');
    bentoItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 45,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });

    // Revelação das Etapas do Fluxograma de Processo
    const timelineCards = document.querySelectorAll('.timeline-step-card');
    if (timelineCards.length > 0) {
      gsap.from(timelineCards, {
        scrollTrigger: {
          trigger: '.process-timeline-container',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação da Seção A Designer (Sobre)
    const aboutCard = document.querySelector('.about-glass-card');
    if (aboutCard) {
      gsap.from(aboutCard, {
        scrollTrigger: {
          trigger: aboutCard,
          start: 'top 84%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação dos Cards de Contato
    const contactCards = document.querySelectorAll('.contact-duo-grid .contact-glass-card');
    if (contactCards.length > 0) {
      gsap.from(contactCards, {
        scrollTrigger: {
          trigger: '.contact-duo-grid',
          start: 'top 86%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Refresh no ScrollTrigger após o carregamento das imagens
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  /* ==========================================================================
     3. INTERATIVIDADE DO FAQ ACCORDION (Estilo Kyon & Acelera Mais)
     ========================================================================== */
  const faqButtons = document.querySelectorAll('.faq-accordion-button');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-accordion-item');
      const isAlreadyOpen = item.classList.contains('is-open');

      // Fecha todos os itens
      document.querySelectorAll('.faq-accordion-item').forEach((otherItem) => {
        otherItem.classList.remove('is-open');
        const otherBtn = otherItem.querySelector('.faq-accordion-button');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Se não estava aberto, abre o clicado
      if (!isAlreadyOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }

      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  });

  /* ==========================================================================
     4. HEADER FLUTUANTE: FEEDBACK VISUAL NO SCROLL
     ========================================================================== */
  const header = document.querySelector('.floating-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }
});
