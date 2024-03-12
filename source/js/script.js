let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let modal = document.querySelector('.modal');
let modalToggle = document.querySelector('.button--modal');
let modalOverlay = document.querySelector('.modal__overlay');
let page = document.querySelector('.page__body');

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

modalToggle.addEventListener('click', function () {
  if (modal.classList.contains('modal--is-closed')) {
    modal.classList.remove('modal--is-closed');
    modal.classList.add('modal--is-open');
    page.classList.add('page__body--no-overflow');
  }
});

modalOverlay.addEventListener('click', function () {
  if (modal.classList.contains('modal--is-open')) {
    modal.classList.remove('modal--is-open');
    modal.classList.add('modal--is-closed');
    page.classList.remove('page__body--no-overflow');
  }
});
