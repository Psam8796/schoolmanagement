document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  menuBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', mobileNav.classList.contains('show'));
  });

  // Carousel functionality
  const slides = document.querySelector('.slides');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;
  const totalSlides = 3;

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Auto slide
  setInterval(() => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  }, 5000);

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});