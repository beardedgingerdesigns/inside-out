/* ============================================
   Inside Out Wellness & Advocacy — Shared JS
   ============================================ */

// Mobile menu toggle
document.getElementById('mobile-toggle').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// Scroll reveal (IntersectionObserver)
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible', 'revealed');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});

// Hide nav on scroll down, show on scroll up
(function() {
  var nav = document.querySelector('.nav-container');
  var lastScroll = 0;
  window.addEventListener('scroll', function() {
    var current = window.scrollY;
    if (Math.abs(current - lastScroll) < 10) return;
    if (current > lastScroll && current > 100) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScroll = current;
  }, { passive: true });
})();
