// Tu mismo código, solo mejorado
const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 100) {
      r.classList.add('active');
    }
  });
}

// Se ejecuta al cargar y al hacer scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);
checkReveal(); // para que se animen los de arriba sin hacer scroll