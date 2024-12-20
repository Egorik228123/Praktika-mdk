var nav = document.querySelector('nav');
var menuToggle = document.querySelector('.hamburger');
var line = document.querySelector('.line')

menuToggle.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('show-menu');
  menuToggle.classList.toggle('active');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 560 && nav.classList.contains('show-menu')) {
    nav.classList.remove('show-menu');
    menuToggle.classList.remove('active');
  }
});