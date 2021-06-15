const navbar = document.querySelector('.navbar');
const icon = document.querySelectorAll('.navbar__menu-icon-line');
const btn = document.querySelector('.navbar__menu-icon');
const submenu = document.querySelector('.navbar__menu-submenu');
const submenuItem = document.querySelectorAll('.navbar__menu-submenu-item');
const sticky = navbar.offsetTop;

function viewMenu(){
  icon.forEach(element => {
    element.classList.toggle('animBtn');
  });
  submenu.classList.toggle('view');
}
btn.addEventListener('click', () => {
  viewMenu();
});

submenuItem.forEach(element => {
    element.addEventListener('click', () => {
      viewMenu();
    });
});


window.onscroll = function () {
  stickyBar();
};

function stickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}