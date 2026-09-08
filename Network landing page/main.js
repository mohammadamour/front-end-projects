// =============================================
// NETWORK LANDING PAGE — MODERN ES MODULE
// Zero dependencies · IntersectionObserver · Animated counters
// =============================================

// ── Nav: glassmorphism on scroll ──

const nav = document.getElementById('main-nav');
let lastScrollY = 0;
let ticking = false;

function updateNav() {
  if (window.scrollY > 60) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNav);
    ticking = true;
  }
}, { passive: true });

// ── Mobile menu toggle ──

const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');
const openIcon = toggle?.querySelector('.nav__toggle-open');
const closeIcon = toggle?.querySelector('.nav__toggle-close');

function openMenu() {
  menu.classList.add('nav__menu--open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Close navigation menu');
  openIcon?.classList.add('hidden');
  closeIcon?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('nav__menu--open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
  openIcon?.classList.remove('hidden');
  closeIcon?.classList.add('hidden');
  document.body.style.overflow = '';
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('nav__menu--open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on link click (mobile)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('nav__menu--open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (
      menu.classList.contains('nav__menu--open') &&
      !menu.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

// ── Scroll-reveal animations ──

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

// ── Animated stat counters ──

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const display = el.dataset.display; // e.g. "3K+"
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    if (display && progress >= 1) {
      el.textContent = display;
    } else if (suffix && progress >= 1) {
      el.textContent = current.toLocaleString() + suffix;
    } else {
      el.textContent = current.toLocaleString();
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-card__value[data-target]').forEach((el) => {
  counterObserver.observe(el);
});

// ── Global error handler ──

window.addEventListener('error', (e) => {
  // In production, replace with error tracking service (e.g. Sentry)
  if (import.meta.url) {
    console.error('[Network]', e.error);
  }
});