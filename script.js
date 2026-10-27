/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal: Integração Lenis (Smooth Scroll) + GSAP 3.12.5 + ScrollTrigger
 * Animações exclusivamente via transform e opacity para 60/120fps fluidos.
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
     2. REVELAÇÕES GSAP & SCROLLTRIGGER (TRANSFORM + OPACITY APENAS)
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Animação de entrada do Hero
    const heroElements = document.querySelectorAll('.hero-content .gsap-fade');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
      gsap.from(heroVisual, {
        opacity: 0,
        y: 45,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.2,
        clearProps: 'all'
      });
    }

    // Parallax sutil no ambient glow da hero
    const ambientGlow = document.querySelector('.ambient-glow');
    if (ambientGlow) {
      gsap.to(ambientGlow, {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 80,
        opacity: 0.4,
        ease: 'none'
      });
    }

    // Revelação dos títulos das seções
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

    // Revelação dos Cards de Serviços
    const serviceCards = document.querySelectorAll('.services-grid .service-card');
    if (serviceCards.length > 0) {
      gsap.from(serviceCards, {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação dos Cards de Portfólio
    const projectCards = document.querySelectorAll('.portfolio-grid .project-card');
    if (projectCards.length > 0) {
      gsap.from(projectCards, {
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação do Card da Designer (Sobre)
    const aboutCard = document.querySelector('.about-card');
    if (aboutCard) {
      gsap.from(aboutCard, {
        scrollTrigger: {
          trigger: aboutCard,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Revelação dos Cards de Contato & Horários
    const contactCards = document.querySelectorAll('.schedule-card, .channels-card');
    if (contactCards.length > 0) {
      gsap.from(contactCards, {
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 32,
        duration: 0.8,
        stagger: 0.15,
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
