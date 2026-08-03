//ハンバーガーメニュー
const hamburger = document.querySelector('.c-hamburger');
const nav = document.querySelector('.l-header__nav');
const mask = document.querySelector('.c-mask');
const pageTop = document.querySelector('.c-btn--top');

//hamburgerメニュークリック時の処理
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
    pageTop.classList.add('is-active');
  } else {
    header.classList.remove('is-scrolled');
    pageTop.classList.remove('is-active');
  }
});

//トップへ戻るボタンのクリック時の処理
pageTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
