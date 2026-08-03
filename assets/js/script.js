//ハンバーガーメニュー
const hamburger = document.querySelector('.c-hamburger');
const nav = document.querySelector('.l-header__nav');
const mask = document.querySelector('.c-mask');

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  mask.classList.toggle('is-active');
});