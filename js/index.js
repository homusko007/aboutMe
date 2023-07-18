'use strict';

const menuBtn = document.querySelector('.ham7');
const menu = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('show');
});

for (let link of menuLinks) {
  link.addEventListener('click', (e) => { 
      e.preventDefault();

      menuLinks.forEach(el => {
      if (el.classList.contains('active')) {
          el.classList.remove('active');
          }
      });

      link.classList.add('active');
      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
      })
      menu.classList.remove('show');
      menuBtn.classList.remove('active');
  });    
};

let i = 0;
const text = `I'm Natali Khomusko.`
var speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.querySelector('.about-title').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();


new Swiper('.phrases-slider', {
  loop: true, // бесконечная прокрутка
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  grabCursor: true,

  breakpoints: {  // адаптируем swiper
    320: {
      slidesPerView: 1,
    },
    560: {
      spaceBetween: 8,
    }
  }
});

const map = L.map('map').setView([53.647285, 23.827070], 6); // координаты, увеличение

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([53.647285, 23.827070]).addTo(map)
.openPopup();