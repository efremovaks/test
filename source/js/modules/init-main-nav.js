const initMainNav = () => {
  const mainNav = document.querySelector('.main-nav');
  const menuBtn = document.querySelector('.main-nav__toggle');

  if (!mainNav) {
    return;
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('main-nav--closed');
    });
  }
};

export { initMainNav };
