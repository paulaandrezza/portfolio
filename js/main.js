import { loadGitItens } from './repo-main.js'

loadGitItens()

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


const timelineItems = [
  {
    title: "Aprendizagem Industrial em Eletroeletrônica",
    content: "Meu primeiro contato com tecnologia, o que me abriu as portas para esse mundo incrível",
    year: "2017.1",
    icon: "bolt"
  },
  {
    title: "Técnico em Mecatrônica",
    content: "Estava decidida que queria trabalhar com tecnologia, então fiz um técnico para poder trabalhar na área",
    year: "2018.1",
    icon: "settings_suggest"
  },
  {
    title: "Engenharia de Controle e Automação",
    content: "Iniciei a faculdade, seguindo na área de automação",
    year: "2019.1",
    icon: "engineering"
  },
  {
    title: "Técnico Eletrônico Jr. | Assistência Técnica | Multilaser",
    content: "Meu primeiro emprego na área",
    year: "2020.2",
    icon: "charging_station"
  },
  {
    title: "Técnico Eletrônico | Manutenção | TE Connectivity",
    content: "Decidi que precisava entrar na carreira de automação para ficar mais próxima do meu curso",
    year: "2022.1",
    icon: "robot"
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    content: "Depois de pensar muito sobre, percebi que era apaixonada por programação e troquei de curso",
    year: "2023.1",
    icon: "developer_mode"
  },

]

const makeTimelineLi = (item) => {
  return `
    <li class="timeline-container">
      <div class="content">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <h2>${item.year}</h2>
      </div>
      <span class="divider"></span>
      <div class="icon">
        <span class="material-symbols-rounded">
          ${item.icon}
        </span>
      </div>
    </li>
  `
}

const timeline = document.getElementById('timeline');

const loadtimelineItems = () => {
  const newHtml = timelineItems.map(makeTimelineLi).join('')
  timeline.innerHTML = newHtml
}

loadtimelineItems()