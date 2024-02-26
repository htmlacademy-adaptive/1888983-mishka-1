let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--is-closed')) {
    navMain.classList.remove('main-nav--is-closed');
    navMain.classList.add('main-nav--is-open');
  } else {
    navMain.classList.add('main-nav--is-closed');
    navMain.classList.remove('main-nav--is-open');
  }
});
