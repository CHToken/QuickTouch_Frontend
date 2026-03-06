import './index.css'

// Show sections as they scroll into view
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

function checkReveal(): void {
  const windowHeight = window.innerHeight;
  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 50) {
      el.classList.add('visible');
    }
  });
}

// Run on load immediately
checkReveal();

// Run on every scroll
window.addEventListener('scroll', checkReveal, { passive: true });

// Also run after a short delay in case fonts/images shift layout
setTimeout(checkReveal, 300);
setTimeout(checkReveal, 800);
