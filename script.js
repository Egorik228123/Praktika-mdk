// hamburger

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

// slider

var slider = document.querySelector('.slider')
let pressed = false
let startX = 0

slider.addEventListener('mousedown', function (e) {
  if(window.innerWidth < 1580) {
    pressed = true
    startX = e.clientX
    this.style.cursor = 'grabbing'
  }
})

slider.addEventListener('mouseleave', function (e) {
  if(window.innerWidth < 1580) {
    pressed = false
  }
})

window.addEventListener('mouseup', function (e) {
  if(window.innerWidth < 1580) {
  pressed = false
  slider.style.cursor = 'grab'
  }
})

slider.addEventListener('mousemove', function (e) {
  if(window.innerWidth < 1580) {
    if(!pressed) {
      return
    }
  
    this.scrollLeft += startX - e.clientX
  }
})