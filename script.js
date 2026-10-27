/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal v7: Lenis + GSAP 3.12.5 + ScrollTrigger
 * Parallax Neon que Acompanha o Scroll Descendo, Revelações Fluidas e 60/120 fps
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
     2. ANIMAÇÕES GSAP & NEON PARALLAX QUE ACOMPANHA O SCROLL
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Entrada da Hero
    const heroElements = document.querySelectorAll('.hero-content .gsap-fade');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    const heroVisual = document.querySelector('.hero-visual-stage');
    if (heroVisual) {
      gsap.from(heroVisual, {
        opacity: 0,
        y: 45,
        scale: 0.95,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.15,
        clearProps: 'all'
      });
    }

    // FEIXE DE LUZ NEON QUE DESCE ACOMPANHANDO O SCROLL
    const neonBeam = document.getElementById('neonScrollBeam');
    if (neonBeam) {
      gsap.fromTo(neonBeam, 
        { y: -60 },
        {
          scrollTrigger: {
            trigger: '.neon-parallax-section',
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: 1.2
          },
          y: 420,
          ease: 'none'
        }
      );
    }

    // CARDS NEON COM PARALLAX NO SCROLL
    const parallaxCards = document.querySelectorAll('.neon-parallax-track .parallax-card');
    if (parallaxCards.length > 0) {
      // Entrada
      gsap.from(parallaxCards, {
        scrollTrigger: {
          trigger: '.neon-parallax-section',
          start: 'top 78%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'opacity,visibility'
      });

      // Efeito Parallax Individual por Velocidade
      parallaxCards.forEach((card) => {
        const speed = parseFloat(card.getAttribute('data-speed')) || 0;
        gsap.to(card, {
          scrollTrigger: {
            trigger: '.neon-parallax-section',
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
    const sectionHeaders = document.querySelectorAll('.section-header-center .gsap-fade');
    sectionHeaders.forEach((el) => {
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

    // Revelação dos Itens do Grid Compacto de Projetos
    const projectItems = document.querySelectorAll('.compact-demonstrative-grid .project-grid-item');
    if (projectItems.length > 0) {
      gsap.from(projectItems, {
        scrollTrigger: {
          trigger: '.compact-demonstrative-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação da Seção de Transição (Sobre + Contato + Final CTA)
    const transitionElements = document.querySelectorAll('.atmospheric-transition-section .gsap-fade');
    transitionElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });

    // Refresh do ScrollTrigger após o carregamento completo das imagens
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }
});
