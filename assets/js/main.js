document.addEventListener('DOMContentLoaded', function() {
  // Gallery modal
  const targetImg = document.getElementById('galleryModalImg');
  document.querySelectorAll('[data-bs-target="#galleryModal"]').forEach(el => {
    el.addEventListener('click', () => {
      const img = el.getAttribute('data-bs-image') || el.getAttribute('href');
      if (targetImg) targetImg.src = img;
    });
  });
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
