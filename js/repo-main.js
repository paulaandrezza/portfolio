import { getRepo } from './git-api.js'

const repoList = document.getElementById('repo-list');


function convertRepoToLi(repositorio) {
  console.log(repositorio.deploy)
  return `
      <li class="project-card">

        <img class="card-img" src="https://raw.githubusercontent.com/paulaandrezza/${repositorio.name}/main/assets/img/desktop.jpeg" alt="Print do projeto" onError="this.onerror=null; this.src='assets/img/alternative.webp';">
        
        <div class="card-content">
          <h3 class="project-title">${repositorio.name}</h3>
          <p class="project-subtitle">${repositorio.description}</p>
          <div class="info">
            <div>
              <a href="${repositorio.html_url}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
              <a href="${repositorio.deploy}" class="material-symbols-rounded" target="_blank">
                link
              </a>
            </div>
            <ul class="project-topics">
              ${repositorio.topics.map((topic) => `<li>${topic}</li>`).join('')}
            </ul>
          </div>
        </div>

      </li>
  `
}


export function loadGitItens() {
  getRepo().then((repositorios = []) => {
    const newHtml = repositorios.map(convertRepoToLi).join('')
    repoList.innerHTML = newHtml
  })
  .catch(error => {
    return console.warn("Ocorreu uma falha na busca do repositório")
  })
}

