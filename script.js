// Toggle Sidebar on Hamburger Menu Click
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

hamburgerMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});