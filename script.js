/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal v6: Lenis + GSAP 3.12.5 + ScrollTrigger
 * Animações Puras (Apenas Transform e Opacity, 60/120 fps)
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. INICIALIZAÇÃO LENIS (SMOOTH SCROLL) & SINCRONIZAÇÃO GSAP TICKER
     ========================================================================== */
  let lenis = null;

  if (!isReducedMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
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
     2. ANIMAÇÕES GSAP (SOMENTE TRANSFORM E OPACITY — ZERO BLUR / FILTER)
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Entrada da Hero
    const heroElements = document.querySelectorAll('.hero-presentation .gsap-in');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 35,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    const heroPortrait = document.querySelector('.hero-portrait-stage');
    if (heroPortrait) {
      gsap.from(heroPortrait, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.95,
        ease: 'power3.out',
        delay: 0.1,
        clearProps: 'all'
      });
    }

    // Áreas de Atuação: Parallax Tipográfico que Acompanha a Rolagem
    const parallaxItems = document.querySelectorAll('.areas-typographic-list .parallax-item');
    if (parallaxItems.length > 0) {
      // Entrada
      gsap.from(parallaxItems, {
        scrollTrigger: {
          trigger: '.areas-neon-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'opacity,visibility'
      });

      // Efeito Parallax Individual por Item
      parallaxItems.forEach((item) => {
        const speed = parseFloat(item.getAttribute('data-speed')) || 0;
        gsap.to(item, {
          scrollTrigger: {
            trigger: '.areas-neon-section',
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
    const sectionTitles = document.querySelectorAll('.areas-section-title, .exhibition-section-title');
    sectionTitles.forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
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

    // Revelação Linear dos Trabalhos na Exposição
    const exhibitionEntries = document.querySelectorAll('.exhibition-entry');
    exhibitionEntries.forEach((entry) => {
      gsap.from(entry, {
        scrollTrigger: {
          trigger: entry,
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

    // Revelação da Seção Sobre & Contato
    const aboutSectionElements = document.querySelectorAll('.about-contact-layout .gsap-in');
    if (aboutSectionElements.length > 0) {
      gsap.from(aboutSectionElements, {
        scrollTrigger: {
          trigger: '.about-contact-section',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        stagger: 0.1,
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
