/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal: Lenis (Smooth Scroll) + GSAP 3.12.5 + ScrollTrigger
 * Efeito Neon com Parallax nas Áreas de Atuação e Revelações Editoriais Suaves.
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. INICIALIZAÇÃO LENIS & SINCRONIZAÇÃO NO GSAP TICKER
     ========================================================================== */
  let lenis = null;

  if (!isReducedMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
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
     2. REVELAÇÕES GSAP & PARALLAX NEON
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Entrada suave da Hero (Portfólio de Artista)
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
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
        clearProps: 'all'
      });
    }

    // Parallax no Ambient Glow da Hero
    const heroGlow = document.querySelector('.hero-backdrop-glow');
    if (heroGlow) {
      gsap.to(heroGlow, {
        scrollTrigger: {
          trigger: '.hero-artist',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 90,
        opacity: 0.3,
        ease: 'none'
      });
    }

    // ÁREAS DE ATUAÇÃO EM NEON COM PARALLAX POR LINHA
    const neonItems = document.querySelectorAll('.neon-typography-composition .parallax-item');
    if (neonItems.length > 0) {
      // Acendimento e entrada dos textos neon conforme a seção entra na tela
      gsap.from(neonItems, {
        scrollTrigger: {
          trigger: '.neon-services-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0.2,
        y: 45,
        duration: 1.0,
        stagger: 0.12,
        ease: 'power3.out'
      });

      // Efeito Parallax diferenciado por profundidade em cada item
      neonItems.forEach((item) => {
        const speed = parseFloat(item.getAttribute('data-speed')) || -20;
        gsap.to(item, {
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
    const editorialHeaders = document.querySelectorAll('.editorial-kicker, .gallery-header .gsap-fade, .contact-header .gsap-fade');
    editorialHeaders.forEach((el) => {
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

    // Revelação da Galeria de Obras (Galeria de Arte)
    const artPieces = document.querySelectorAll('.art-gallery-flow .art-piece');
    artPieces.forEach((piece) => {
      gsap.from(piece, {
        scrollTrigger: {
          trigger: piece,
          start: 'top 86%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 45,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });

    // Revelação da Seção Sobre a Criadora
    const aboutLayout = document.querySelector('.about-artist-layout');
    if (aboutLayout) {
      gsap.from(aboutLayout.querySelectorAll('.gsap-fade'), {
        scrollTrigger: {
          trigger: aboutLayout,
          start: 'top 84%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação dos Cards de Contato & Horários
    const contactBoxes = document.querySelectorAll('.schedule-box, .channels-box');
    if (contactBoxes.length > 0) {
      gsap.from(contactBoxes, {
        scrollTrigger: {
          trigger: '.contact-cards-wrap',
          start: 'top 86%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Atualização de posições após carregamento das imagens
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }
});
