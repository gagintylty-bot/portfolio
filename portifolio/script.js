/* ============================================================
   MATHEUS VIDIC — PORTFÓLIO
   script.js
   ============================================================ */

'use strict';

/* ─── UTILITIES ─── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const isMobile = () => window.innerWidth <= 1024;
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── LERP ─── */
const lerp = (a, b, t) => a + (b - a) * t;


/* ================================================================
   1. CUSTOM CURSOR
   ================================================================ */
(function initCursor() {
  if (isMobile()) return;

  const cursor   = $('#cursor');
  const follower = $('#cursorFollower');
  if (!cursor || !follower) return;

  let mx = -100, my = -100;
  let fx = -100, fy = -100;
  let rafId;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity   = '0';
    follower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity   = '1';
    follower.style.opacity = '1';
  });

  /* hover state on interactive elements */
  const hoverTargets = 'a, button, [role="button"], .filter-btn, .portfolio-card, .tilt-card, .dot';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
  });

  function tick() {
    cursor.style.transform   = `translate(${mx - 5}px, ${my - 5}px)`;
    fx = lerp(fx, mx, 0.1);
    fy = lerp(fy, my, 0.1);
    follower.style.transform = `translate(${fx - 18}px, ${fy - 18}px)`;
    rafId = requestAnimationFrame(tick);
  }
  tick();
})();


/* ================================================================
   2. NAVBAR — scroll hide/show + glassmorphism + active links
   ================================================================ */
(function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;

  let lastY = 0;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    if (y > lastY + 5 && y > 120) {
      navbar.classList.add('hidden');
    } else if (y < lastY - 5) {
      navbar.classList.remove('hidden');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  /* Active nav link via IntersectionObserver */
  const sections = $$('section[id]');
  const navLinks  = $$('.nav-link');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = navLinks.find(l => l.getAttribute('href') === `#${entry.target.id}`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
})();


/* ================================================================
   3. MOBILE DRAWER
   ================================================================ */
(function initDrawer() {
  const hamburger    = $('#hamburger');
  const drawer       = $('#drawer');
  const overlay      = $('#drawerOverlay');
  const drawerClose  = $('#drawerClose');
  if (!hamburger || !drawer) return;

  function open() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    drawer.classList.contains('open') ? close() : open();
  });
  drawerClose?.addEventListener('click', close);
  overlay.addEventListener('click', close);

  /* Close on drawer link click */
  $$('a', drawer).forEach(a => a.addEventListener('click', close));

  /* Close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
})();


/* ================================================================
   4. HERO — TYPEWRITER EFFECT
   ================================================================ */
(function initTypewriter() {
  const el = $('#typewriterText');
  if (!el || prefersReducedMotion()) {
    if (el) el.textContent = 'Texto 3D';
    return;
  }

  const words   = ['Texto 3D', 'Motion Tracking', 'Color Grading', 'Reels que convertem'];
  let wIndex    = 0;
  let cIndex    = 0;
  let deleting  = false;
  let paused    = false;

  const TYPE_SPEED   = 70;
  const DELETE_SPEED = 40;
  const PAUSE_AFTER  = 1800;
  const PAUSE_BEFORE = 300;

  function type() {
    if (paused) return;
    const word = words[wIndex];

    if (!deleting) {
      el.textContent = word.slice(0, ++cIndex);
      if (cIndex === word.length) {
        paused = true;
        setTimeout(() => { paused = false; deleting = true; tick(); }, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      el.textContent = word.slice(0, --cIndex);
      if (cIndex === 0) {
        deleting = false;
        wIndex = (wIndex + 1) % words.length;
        paused = true;
        setTimeout(() => { paused = false; tick(); }, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  function tick() { requestAnimationFrame(type); }
  tick();
})();


/* ================================================================
   5. HERO — GRADIENT PARALLAX (desktop only)
   ================================================================ */
(function initHeroParallax() {
  if (isMobile()) return;

  const grad = $('#heroGradient');
  if (!grad) return;

  let tx = 0, ty = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    tx = (e.clientX / window.innerWidth  - 0.5) * 60;
    ty = (e.clientY / window.innerHeight - 0.5) * 60;
  });

  function tick() {
    cx = lerp(cx, tx, 0.05);
    cy = lerp(cy, ty, 0.05);
    grad.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(tick);
  }
  tick();
})();


/* ================================================================
   6. HERO — CURSOR PARTICLES (desktop only, hero section)
   ================================================================ */
(function initParticles() {
  if (isMobile() || prefersReducedMotion()) return;

  const canvas = $('#heroParticles');
  const hero   = $('.hero');
  if (!canvas || !hero) return;

  const ctx = canvas.getContext('2d');
  const MAX = 6;
  const particles = [];

  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor(x, y) {
      this.x  = x; this.y  = y;
      this.vx = (Math.random() - 0.5) * 1.2;
      this.vy = (Math.random() - 0.5) * 1.2 - 0.4;
      this.r  = Math.random() * 3 + 1.5;
      this.life = 1;
      this.decay = Math.random() * 0.025 + 0.018;
    }
    update() {
      this.x    += this.vx;
      this.y    += this.vy;
      this.life -= this.decay;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 135, 58, ${this.life * 0.15})`;
      ctx.fill();
    }
  }

  let heroRect = hero.getBoundingClientRect();
  window.addEventListener('resize', () => { heroRect = hero.getBoundingClientRect(); }, { passive: true });

  hero.addEventListener('mousemove', e => {
    if (particles.length >= MAX) return;
    const x = e.clientX - heroRect.left;
    const y = e.clientY - heroRect.top;
    particles.push(new Particle(x, y));
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.life <= 0) particles.splice(i, 1);
    }
    requestAnimationFrame(animate);
  }
  animate();
})();


/* ================================================================
   7. SCROLL REVEAL (IntersectionObserver)
   ================================================================ */
(function initReveal() {
  if (prefersReducedMotion()) {
    $$('.reveal-up').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  $$('.reveal-up').forEach(el => observer.observe(el));
})();


/* ================================================================
   8. COUNTER ANIMATION
   ================================================================ */
(function initCounters() {
  if (prefersReducedMotion()) return;

  const DURATION = 1400; // ms

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.target);
    const suffix   = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimals) || 0;
    const start    = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const value    = target * easeOut(progress);
      el.textContent = value.toFixed(decimals).replace('.', ',') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -50px 0px', threshold: 0.5 });

  $$('[data-target]').forEach(el => counterObserver.observe(el));
})();


/* ================================================================
   9. PORTFOLIO — FILTER + CARD TILT (desktop)
   ================================================================ */
(function initPortfolio() {
  /* ─ Filter ─ */
  const filterBtns = $$('.filter-btn');
  const cards      = $$('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'todos' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });

  /* ─ 3D Tilt (desktop only) ─ */
  if (isMobile() || prefersReducedMotion()) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(900px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg) scale(1.01)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
    });
  });
})();


/* ================================================================
   10. VIDEO MODAL
   ================================================================ */
(function initModal() {
  const modal   = $('#videoModal');
  const iframe  = $('#modalIframe');
  const closeBtn = $('#modalClose');
  if (!modal || !iframe) return;

  function openModal(url) {
    iframe.src = url;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    /* trigger CSS opacity transition */
    requestAnimationFrame(() => modal.style.opacity = '1');
    closeBtn?.focus();
  }

  function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.setAttribute('hidden', '');
      iframe.src = '';
      document.body.style.overflow = '';
    }, 300);
  }

  $$('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const url = card.dataset.videoUrl;
      if (url) openModal(url);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const url = card.dataset.videoUrl;
        if (url) openModal(url);
      }
    });
    /* make card keyboard-focusable */
    if (!card.getAttribute('tabindex')) card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
  });

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });
})();


/* ================================================================
   11. TESTIMONIALS CAROUSEL
   ================================================================ */
(function initCarousel() {
  const track   = $('#carouselTrack');
  const dots    = $$('.dot');
  const prevBtn = $('#carouselPrev');
  const nextBtn = $('#carouselNext');
  if (!track || !dots.length) return;

  const total    = track.children.length;
  let current    = 0;
  let autoplayId = null;
  let startX     = 0;
  let isDragging = false;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(next, 4500);
  }
  function stopAutoplay() {
    clearInterval(autoplayId);
  }

  /* Arrow buttons */
  prevBtn?.addEventListener('click', () => { prev(); startAutoplay(); });
  nextBtn?.addEventListener('click', () => { next(); startAutoplay(); });

  /* Dot navigation */
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.index));
      startAutoplay();
    });
  });

  /* Touch / swipe on mobile */
  const viewport = $('#carouselViewport') || track.parentElement;
  viewport.addEventListener('touchstart', e => {
    startX    = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });
  viewport.addEventListener('touchend', e => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    isDragging = false;
    startAutoplay();
  }, { passive: true });

  /* Pause on hover */
  viewport.addEventListener('mouseenter', stopAutoplay);
  viewport.addEventListener('mouseleave', startAutoplay);

  /* Init */
  if (!prefersReducedMotion()) startAutoplay();
})();


/* ================================================================
   12. SMOOTH SCROLL for anchor links (supplement native smooth)
   ================================================================ */
(function initSmoothScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navH,
      behavior: 'smooth'
    });
  });
})();


/* ================================================================
   13. RESIZE HANDLER — reinit cursor check
   ================================================================ */
window.addEventListener('resize', () => {
  if (isMobile()) document.body.style.cursor = 'auto';
}, { passive: true });
