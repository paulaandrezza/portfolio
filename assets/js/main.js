
/* navbar toogle */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener('click', () => {
  header.classList.toggle('nav-active');
  navToggleBtn.classList.toggle('active');
});

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0 ; i < navbarLinks.length ; i++) {
  navbarLinks[i].addEventListener('click', () => {
    header.classList.toggle('nav-active');
    navToggleBtn.classList.toggle('active');
  });
}