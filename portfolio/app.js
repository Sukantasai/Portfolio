// Navbar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

// Close navbar on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
};
