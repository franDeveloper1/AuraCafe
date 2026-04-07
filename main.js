// ===========================
//  AURA CAFÉ — main.js
// ===========================

// ---- SCROLL FADE ----
const fades = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
fades.forEach(el => observer.observe(el));

// ---- NAV MOBILE TOGGLE ----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  // Animación de las barras del hamburger
  const spans = navToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// Cerrar menú al hacer click en un link
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

// ---- NAV SCROLL EFFECT ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = '10px 48px';
  } else {
    nav.style.padding = '';
  }
}, { passive: true });

// ---- SMOOTH SCROLL para anclas ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
