import '../fonts/fonts.scss';
import '../scss/main.scss';

const menuBtn = document.querySelector('.menu-desk__btn');

const menuWrapper = document.querySelector('.menu-desk__bottom');

const popupSales = document.querySelector('.popup-sales');

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

catalogBtns.forEach(btn => {
  console.log(btn)
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