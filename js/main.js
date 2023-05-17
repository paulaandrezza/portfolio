import { loadGitItens } from './repo-main.js'

loadGitItens(1)
loadGitItens(2)

/* navbar toggle */
const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  header.classList.toggle('show');
  header.style.setProperty("background-color", "var(--background-secondary)")
  header.style.setProperty("box-shadow", "0 -5px 10px var(--font-color)")
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
const home = document.getElementById('home');

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
    document.body.style.setProperty('--background-primary', '#F9EFF3');
    document.body.style.setProperty('--background-secondary', '#FCF7F9');
    document.body.style.setProperty('--font-color', '#1F1F1F');
    home.style.setProperty('background-image', 'url(assets/img/background-light.jpg)');

    logo.src='assets/img/logo-dark.svg'

    localStorage.setItem('data-theme', 'light');
  } else {
    document.body.style.setProperty('--background-primary', '#1F1F1F');
    document.body.style.setProperty('--background-secondary', '#2D2F31');
    document.body.style.setProperty('--font-color', '#E3E3E3');
    home.style.setProperty('background-image', 'url(assets/img/background.png)');

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
    header.style.setProperty("background-color", "var(--background-secondary)")
    header.style.setProperty("box-shadow", "0 -5px 10px var(--font-color)")
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.style.setProperty("background-color", "transparent")
    header.style.setProperty("box-shadow", "none")
  }
})


// About
import { loadtimelineItems } from './about.js'
loadtimelineItems()


// Skills
import { loadSkillsItems } from './skills.js'
loadSkillsItems()