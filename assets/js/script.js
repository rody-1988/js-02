//ハンバーガーメニュー
const hamburger = document.querySelector('.c-hamburger');
const nav = document.querySelector('.l-header__nav');
const mask = document.querySelector('.c-mask');

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  mask.classList.toggle('is-active');
});

//スクロール時のヘッダー背景色変更
const header = document.querySelector('.l-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});