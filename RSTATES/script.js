const navbar = document.querySelector('.myNav');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});
