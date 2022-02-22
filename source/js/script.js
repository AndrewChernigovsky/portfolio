'use strict';

// BurgerMenu
let navMain = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle'),
    navLinks = document.querySelectorAll('.main-nav__link'),
    navList = document.querySelector('.main-nav__list'),
    body = document.getElementsByTagName('body')[0],
    mainNavClosed = 'main-nav--closed',
    mainNavOpened = 'main-nav--opened';

navMain.classList.remove("main-nav--nojs");

if (navMain.classList.contains(mainNavOpened)) {
  navMain.classList.remove(mainNavOpened);
  navMain.classList.add(mainNavClosed);
}

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains(mainNavClosed)) {
    navMain.classList.remove(mainNavClosed);
    navMain.classList.add(mainNavOpened);

  } else {
    navMain.classList.add(mainNavClosed);
    navMain.classList.remove(mainNavOpened);
    navList.style.overflowY='hidden';
  }

  if(navMain.classList.contains(mainNavOpened)) {
    body.classList.add('overflow-hidden')
    navList.style.overflowY='scroll';
  } else {
    body.classList.remove('overflow-hidden')
  }

  if(navMain.classList.contains('none')) {
    body.classList.remove('overflow-hidden')
    navList.style.overflowY='hidden';
  }
});

navLinks.forEach(function(el){
  el.addEventListener('click', function(){
    navMain.classList.remove(mainNavOpened)
    navMain.classList.add(mainNavClosed)
    body.classList.remove('overflow-hidden')
  })
})

// Form
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}