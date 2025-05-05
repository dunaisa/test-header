import '../fonts/fonts.scss';
import '../scss/main.scss';

const deskMenuBtn = document.querySelector('#desk-menu-btn');
const mobMenuBtn = document.querySelector('#mob-menu-btn');

const menuWrapper = document.querySelector('.menu-desk__bottom');

const catalogBtns = document.querySelectorAll('.menu-desk__catalog-link');
const popups = document.querySelectorAll('.popup-catalog');
const mobPopups = document.querySelectorAll('.menu-mob-popup');
const startMenuMobWrapper = document.querySelector('.menu-mob__catalog-start');
const menuOverlayMob = document.querySelector('.menu-mob__overlay');
const catalogBtnsMob = document.querySelectorAll('.menu-mob__main-item-link');
const catalogBtnHeading = document.querySelectorAll('.menu-mob__main-heading');

// Desk

deskMenuBtn.addEventListener('click', () => {
  if (deskMenuBtn.classList.contains('active')) {
    deskMenuBtn.classList.remove('active')
    menuWrapper.classList.add('hide')
  } else {
    deskMenuBtn.classList.add('active')
    menuWrapper.classList.remove('hide')
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

  // Mob 

  mobMenuBtn.addEventListener('click', () => {
    if (mobMenuBtn.classList.contains('active')) {
      mobMenuBtn.classList.remove('active')
      menuOverlayMob.classList.add('hide')
      startMenuMobWrapper.classList.add('hide')
      document.body.style.overflow = 'auto';
      mobPopups.forEach(cat => {
        cat.classList.remove('open');
      });
    } else {
      mobMenuBtn.classList.add('active')
      startMenuMobWrapper.classList.remove('hide')
      menuOverlayMob.classList.remove('hide')
      document.body.style.overflow = 'hidden';
    }  
  })

  catalogBtnsMob.forEach(button => {
    button.addEventListener('click', function() {

      const popupCatId = this.getAttribute('data-popup');
      const targetCat = document.getElementById(popupCatId);
      
      mobPopups.forEach(cat => {
        startMenuMobWrapper.classList.add('hide')
        cat.classList.remove('open');
      });
      
      if (targetCat) {
        console.log(targetCat)
        targetCat.classList.add('open');
      }
    });
  });

  catalogBtnHeading.forEach(button => {
    button.addEventListener('click', function() {

      const popupCatId = this.getAttribute('data-popup');
      const targetCat = document.getElementById(popupCatId);
      
      mobPopups.forEach(cat => {
        startMenuMobWrapper.classList.add('hide')
        cat.classList.remove('open');
      });
      
      if (targetCat && targetCat.id != 'start-catalog-mob') {
        
        targetCat.classList.add('open');
      } else {
        console.log(targetCat.id)
        startMenuMobWrapper.classList.remove('hide');
      }
    });
  });


  // header

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