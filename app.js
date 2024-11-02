// Responsive Nav bar start

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');
const navLinks = document.querySelectorAll('.mobile-menu a'); // select all nav links

menuOpen.addEventListener('click', () => {
  mobileMenu.style.left = '0';
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
  });
});
