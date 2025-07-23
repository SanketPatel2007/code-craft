  (function() {

  function onScroll() {
    if (window.scrollY > threshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  // Initialize in case page loads mid-scroll
  onScroll();
})();
