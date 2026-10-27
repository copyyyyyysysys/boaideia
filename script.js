/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal v3: Lenis + GSAP 3.12.5 + ScrollTrigger
 * Cards Neon com Parallax Dinâmico e Revelações de Galeria de Arte
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. INICIALIZAÇÃO LENIS (SMOOTH SCROLL) & SINCRONIZAÇÃO GSAP
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
      touchMultiplier: 1.5,
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
     2. ANIMAÇÕES GSAP, PARALLAX NEON & REVELAÇÕES
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Entrada da Hero
    const heroElements = document.querySelectorAll('.hero-artist-content .gsap-fade');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 40,
        duration: 1.0,
        stagger: 0.14,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    const heroVisual = document.querySelector('.hero-artist-visual');
    if (heroVisual) {
      gsap.from(heroVisual, {
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.15,
        clearProps: 'all'
      });
    }

    // Parallax na Watermark e nas Auras de Luz
    const watermark = document.querySelector('.hero-watermark-text');
    if (watermark) {
      gsap.to(watermark, {
        scrollTrigger: {
          trigger: '.hero-artist',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        },
        y: 120,
        opacity: 0,
        ease: 'none'
      });
    }

    const glow1 = document.querySelector('.glow-1');
    if (glow1) {
      gsap.to(glow1, {
        scrollTrigger: {
          trigger: '.hero-artist',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 80,
        x: -40,
        ease: 'none'
      });
    }

    // CARDS NEON COM PARALLAX QUE ACOMPANHA O SCROLL
    const parallaxCards = document.querySelectorAll('.neon-cards-track .parallax-card');
    if (parallaxCards.length > 0) {
      // Entrada dos Cards Neon
      gsap.from(parallaxCards, {
        scrollTrigger: {
          trigger: '.neon-services-section',
          start: 'top 78%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 55,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'opacity,visibility'
      });

      // Efeito Parallax Dinâmico Individual por Card
      parallaxCards.forEach((card) => {
        const speed = parseFloat(card.getAttribute('data-speed')) || 0;
        gsap.to(card, {
          scrollTrigger: {
            trigger: '.neon-services-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          },
          yPercent: speed,
          ease: 'none'
        });
      });
    }

    // Revelação dos Títulos de Seção
    const sectionHeaders = document.querySelectorAll('.section-header .gsap-fade');
    sectionHeaders.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });

    // Revelação da Galeria de Obras (Cards de Alto Impacto)
    const galleryCards = document.querySelectorAll('.gallery-curated-grid .gallery-item-card');
    if (galleryCards.length > 0) {
      gsap.from(galleryCards, {
        scrollTrigger: {
          trigger: '.gallery-curated-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação da Seção A Designer (Sobre)
    const aboutBox = document.querySelector('.about-artist-box');
    if (aboutBox) {
      gsap.from(aboutBox, {
        scrollTrigger: {
          trigger: aboutBox,
          start: 'top 84%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação dos Cards Oficiais de Atendimento
    const officialCards = document.querySelectorAll('.contact-cards-container .official-card');
    if (officialCards.length > 0) {
      gsap.from(officialCards, {
        scrollTrigger: {
          trigger: '.contact-cards-container',
          start: 'top 86%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        stagger: 0.14,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Refresh do ScrollTrigger após carregamento de todas as imagens
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }
});
