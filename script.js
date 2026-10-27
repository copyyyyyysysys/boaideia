/**
 * BOAIDEIA — RENATHA CAVALCANTI
 * Script Principal v9: Lenis + GSAP 3.12.5 + ScrollTrigger
 * GSAP Neon Scrub Tipográfico Contínuo (Acende e Apaga no Scroll Real) + Parallax Depth
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. INICIALIZAÇÃO LENIS (SMOOTH SCROLL) & GSAP TICKER
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
      syncTouch: false,
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
     2. ANIMAÇÕES GSAP & NEON TIPOGRÁFICO COM SCROLL SCRUB CONTÍNUO
     ========================================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !isReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Entrada suave da Hero
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

    // GSAP SCROLLTRIGGER SCRUB: NEON TIPOGRÁFICO QUE ACENDE E APAGA NO SCROLL REAL
    // Funciona com máxima fidelidade no Desktop e no Mobile (390px em coluna)
    const typoItems = document.querySelectorAll('.neon-typographic-list .neon-typo-item');
    typoItems.forEach((item) => {
      const speed = parseFloat(item.getAttribute('data-speed')) || 10;
      const glowBar = item.querySelector('.neon-typo-glow-bar');
      const dot = item.querySelector('.neon-typo-dot');
      const title = item.querySelector('.neon-typo-title');
      const num = item.querySelector('.neon-typo-num');
      const desc = item.querySelector('.neon-typo-desc');

      // 1. Parallax de profundidade por transform
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.0
        },
        y: speed * 2.0,
        ease: 'none'
      });

      // 2. Timeline de Neon Scrub: acende no centro e apaga ao sair (bidirecional com scroll)
      const neonTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 82%',
          end: 'bottom 18%',
          scrub: 0.6
        }
      });

      // Fase de ignição ao entrar no viewport
      neonTl.fromTo(item, 
        { opacity: 0.35 }, 
        { opacity: 1, duration: 0.45, ease: 'power1.out' }
      );
      if (glowBar) {
        neonTl.fromTo(glowBar, 
          { scaleX: 0.08, opacity: 0.15 }, 
          { scaleX: 1, opacity: 1, duration: 0.45, ease: 'power1.out' }, 
          '<'
        );
      }
      if (dot) {
        neonTl.fromTo(dot, 
          { scale: 0.6, opacity: 0.2 }, 
          { scale: 1.2, opacity: 1, duration: 0.45, ease: 'power1.out' }, 
          '<'
        );
      }
      if (title) {
        neonTl.to(title, {
          color: '#ffffff',
          textShadow: '0 0 20px rgba(45, 212, 191, 0.9), 0 0 40px rgba(45, 212, 191, 0.45)',
          duration: 0.45,
          ease: 'power1.out'
        }, '<');
      }
      if (num) {
        neonTl.to(num, {
          color: '#2dd4bf',
          textShadow: '0 0 14px rgba(45, 212, 191, 0.8)',
          duration: 0.45,
          ease: 'power1.out'
        }, '<');
      }
      if (desc) {
        neonTl.to(desc, {
          color: 'rgba(255, 255, 255, 0.92)',
          duration: 0.45,
          ease: 'power1.out'
        }, '<');
      }

      // Platô central onde o neon brilha com intensidade máxima
      neonTl.to({}, { duration: 0.15 });

      // Fase de atenuação suave ao sair do viewport
      neonTl.to(item, { opacity: 0.35, duration: 0.45, ease: 'power1.in' });
      if (glowBar) {
        neonTl.to(glowBar, { scaleX: 0.08, opacity: 0.15, duration: 0.45, ease: 'power1.in' }, '<');
      }
      if (dot) {
        neonTl.to(dot, { scale: 0.6, opacity: 0.2, duration: 0.45, ease: 'power1.in' }, '<');
      }
      if (title) {
        neonTl.to(title, {
          color: 'rgba(255, 255, 255, 0.45)',
          textShadow: 'none',
          duration: 0.45,
          ease: 'power1.in'
        }, '<');
      }
      if (num) {
        neonTl.to(num, {
          color: 'rgba(255, 255, 255, 0.35)',
          textShadow: 'none',
          duration: 0.45,
          ease: 'power1.in'
        }, '<');
      }
      if (desc) {
        neonTl.to(desc, {
          color: 'rgba(255, 255, 255, 0.45)',
          duration: 0.45,
          ease: 'power1.in'
        }, '<');
      }
    });

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

    // Refresh do ScrollTrigger após carregamento de todas as imagens
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }
});
