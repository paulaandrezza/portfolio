
/* navbar toggle */

const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  header.classList.toggle('show');
})



/* theme toggle */

const logo = document.getElementById('logo');

const toggle = document.getElementById('toggle');
var isLight = localStorage.getItem('data-theme') == 'light';
isLight ? toggle.classList.toggle('light') : null;
changeTheme(isLight);


toggle.addEventListener('click', () => {
  toggle.classList.toggle('light');

  isLight = toggle.classList.value == 'light';

  changeTheme(isLight);
})

function changeTheme(isLight) {
  if(isLight) {
    document.body.style.setProperty('--background-primary', '#E3E3E3');
    document.body.style.setProperty('--background-secondary', '#facae1');
    document.body.style.setProperty('--font-color', '#1f1f1f');

    logo.src='assets/img/logo-dark.svg'

    localStorage.setItem('data-theme', 'light');
  } else {
    document.body.style.setProperty('--background-primary', '#1F1F1F');
    document.body.style.setProperty('--background-secondary', '#2D2F31');
    document.body.style.setProperty('--font-color', '#E3E3E3');

    logo.src='assets/img/logo-light.svg'

    localStorage.setItem('data-theme', 'dark');
  }
}
