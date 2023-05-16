import { loadGitItens } from './repo-main.js'

loadGitItens(1)
loadGitItens(2)

/* navbar toggle */
const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  header.classList.toggle('show');
})

/* toggle the navbar when click any navbar link */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    if ( header.classList.contains('show') ) {
      header.classList.remove('show');
      menuIcon.classList.toggle('open');
    }
  });
}



/* theme toggle */
const logo = document.getElementById('logo');
const switcher = document.getElementById('switcher');

const toggle = document.getElementById('toggle');
var isLight = localStorage.getItem('data-theme') == 'light';
isLight ? toggle.classList.toggle('light') : null;
changeTheme(isLight);


switcher.addEventListener('click', () => {
  toggle.classList.toggle('light');
  isLight = toggle.classList.value == 'light';
  changeTheme(isLight);
})

function changeTheme(isLight) {
  if(isLight) {
    document.body.style.setProperty('--background-primary', '#C2C2C2');
    document.body.style.setProperty('--background-secondary', '#DCDCDC');
    document.body.style.setProperty('--font-color', '#1F1F1F');

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


/* back to top */
const backTopBtn = document.querySelector('[data-back-to-top]');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
})


// About
import { loadtimelineItems } from './about.js'
loadtimelineItems()
