import '../fonts/fonts.scss';
import '../scss/main.scss';

const menuBtn = document.querySelector('.menu-desk__btn');
const menuBtnMob = document.querySelector('.menu-desk__btn-mob');

const menuWrapper = document.querySelector('.menu-desk__bottom');

const catalogBtns = document.querySelectorAll('.menu-desk__catalog-link');
const popups = document.querySelectorAll('.popup-catalog');

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('active')) {
    menuBtn.classList.remove('active')
    menuWrapper.classList.add('hide')
  } else {
    menuBtn.classList.add('active')
    menuWrapper.classList.remove('hide')
  }  
})

menuBtnMob.addEventListener('click', () => {
  if (menuBtnMob.classList.contains('active')) {
    menuBtnMob.classList.remove('active')
    // menuWrapper.classList.add('hide')
  } else {
    menuBtnMob.classList.add('active')
    // menuWrapper.classList.remove('hide')
  }  
})

catalogBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catalogBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

  catalogBtns.forEach(button => {
    button.addEventListener('click', function() {

      const popupId = this.getAttribute('data-popup');
      const targetPopup = document.getElementById(popupId);
      
      popups.forEach(popup => {
        popup.classList.remove('open');
      });
      
      if (targetPopup) {
        targetPopup.classList.add('open');
      }
    });
  });
  
  popups.forEach(popup => {
    popup.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('open');
      }
    });
  });

let lastScroll = 0;
const topHeader = document.querySelector('.menu-desk__top');
const mainHeader = document.querySelector('.menu-desk__wrapper');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll <= 0) {
    topHeader.classList.remove('hidden');
    mainHeader.classList.remove('animate');
    return;
  }

  if (currentScroll > lastScroll && !topHeader.classList.contains('hidden')) {
    if (currentScroll > scrollThreshold) {
      topHeader.classList.add('hidden');
      mainHeader.classList.add('animate');
    }
  } else if (currentScroll < lastScroll && topHeader.classList.contains('hidden')) {
    topHeader.classList.remove('hidden');
    mainHeader.classList.remove('animate');
  }
  
  lastScroll = currentScroll;
});