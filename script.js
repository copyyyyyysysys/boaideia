/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal v4: Lenis + GSAP 3.12.5 + ScrollTrigger
 * Animações de Entrada Variadas, Parallax em Camadas Múltiplas e Exposição Editorial
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. INICIALIZAÇÃO LENIS (SMOOTH SCROLL) & GSAP TICKER
     ========================================================================== */
  let lenis = null;

  if (!isReducedMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
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
     2. ANIMAÇÕES GSAP, PARALLAX EM CAMADAS E REVELAÇÕES EDITORIAIS
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Entrada da Hero
    const heroElements = document.querySelectorAll('.hero-artist-content .gsap-fade');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 40,
        duration: 1.05,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    const heroVisual = document.querySelector('.hero-artist-visual');
    if (heroVisual) {
      gsap.from(heroVisual, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1.15,
        ease: 'power3.out',
        delay: 0.15,
        clearProps: 'all'
      });
    }

    // Parallax em Watermarks de Fundo
    const watermarks = [
      { sel: '.hero-watermark-text', trigger: '.hero-artist', y: 140 },
      { sel: '.gallery-watermark-text', trigger: '.exhibition-gallery-section', y: 180 },
      { sel: '.about-watermark-text', trigger: '.about-artist-section', y: 130 },
      { sel: '.contact-watermark-text', trigger: '.contact-official-section', y: 120 }
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

    // Parallax nas Auras Ambientais de Luz
    const glow1 = document.querySelector('.glow-hero-1');
    const glow2 = document.querySelector('.glow-hero-2');
    if (glow1) {
      gsap.to(glow1, {
        scrollTrigger: {
          trigger: '.hero-artist',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        },
        y: 90,
        x: -30,
        ease: 'none'
      });
    }
    if (glow2) {
      gsap.to(glow2, {
        scrollTrigger: {
          trigger: '.hero-artist',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        },
        y: 70,
        x: 30,
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

    // Revelação dos Cabeçalhos de Seção
    const sectionHeaders = document.querySelectorAll('.section-header .gsap-fade');
    sectionHeaders.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });

    // Revelação da Exposição de Obras (Peças Curatoriais de Galeria)
    const exhibitionPieces = document.querySelectorAll('.exhibition-piece');
    exhibitionPieces.forEach((piece) => {
      gsap.from(piece, {
        scrollTrigger: {
          trigger: piece,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.95,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });

    // Parallax Sutil nas Imagens da Mostra
    const artworkImgs = document.querySelectorAll('.exhibition-artwork-img');
    artworkImgs.forEach((img) => {
      gsap.fromTo(img, 
        { yPercent: -4 },
        {
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4
          },
          yPercent: 4,
          ease: 'none'
        }
      );
    });

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
        y: 45,
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
        y: 40,
        stagger: 0.15,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação do Botão CTA Final
    const finalCta = document.querySelector('.contact-cta-action');
    if (finalCta) {
      gsap.from(finalCta, {
        scrollTrigger: {
          trigger: finalCta,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Atualização do ScrollTrigger quando todas as imagens carregarem
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }
});
