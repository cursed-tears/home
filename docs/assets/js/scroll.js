document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .scale-in');
  
  function checkScroll() {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});
