// script.js - basic interactivity: mobile menu toggle and simple testimonial rotation

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  menuToggle && menuToggle.addEventListener('click', function () {
    if (!mainNav) return;
    if (mainNav.style.display === 'flex') {
      mainNav.style.display = '';
      menuToggle.classList.remove('open');
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.background = '#fff';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '70px';
      mainNav.style.right = '20px';
      mainNav.style.padding = '12px';
      mainNav.style.boxShadow = '0 12px 36px rgba(12,12,12,0.08)';
      menuToggle.classList.add('open');
    }
  });

  // Simple testimonials auto-rotate (optional)
  const tGrid = document.getElementById('testimonials-grid');
  if (tGrid) {
    const testimonials = Array.from(tGrid.querySelectorAll('.testimonial'));
    let idx = 0;
    // show first 3 if many; for smaller screens it's stacked via CSS
    function rotate() {
      idx = (idx + 1) % testimonials.length;
      testimonials.forEach((t, i) => {
        t.style.opacity = (i === idx ? '1' : '0.45');
        t.style.transform = (i === idx ? 'scale(1.02)' : 'scale(1)');
        t.style.transition = 'all .45s ease';
      });
    }
    if (testimonials.length > 1) setInterval(rotate, 4500);
  }

  // Appointment form submission (demo)
  const form = document.getElementById('appointment-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const old = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        alert('Request received! Our team will contact you shortly.');
        btn.innerHTML = old;
        btn.disabled = false;
        form.reset();
      }, 1200);
    });
  }
});

