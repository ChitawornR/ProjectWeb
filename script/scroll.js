const btnToTop = document.querySelector('.btn-to-top-page');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    btnToTop.style.opacity = '1';
  } else {
    btnToTop.style.opacity = '0';
  }
});