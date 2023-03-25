import { getRepo } from './git-api.js'

const repoList = document.getElementById('repo-list');

// const LANGUAGE_COLORS = {
//   "JavaScript": "#f1e05a",
//   "Python": "#3572A5",
//   "Ruby": "#701516",
//   "C++": "#f34b7d",
//   "Go": "#00ADD8",
//   "Shell": "#89e051",
//   "Markdown": "#333",
//   "TypeScript": "#2b7489",
//   "Swift": "#ffac45",
//   "Kotlin": "#F18E33",
//   "Java": "#b07219",
//   "PHP": "#4F5D95",
//   "C#": "#178600",
//   "CSS": "#563d7c",
//   "C": "#555555",
//   "Objective-C": "#438eff",
//   "Rust": "#dea584",
//   "Scala": "#c22d40",
//   "HTML": "#e34c26",
//   "Jupyter Notebook": "#DA5B0B",
//   null: "#252525",
// }


function convertRepoToLi(repositorio) {

  // const backgroundColor = LANGUAGE_COLORS[repositorio.language]

  return `
      <li class="project-card">
        <a href="${repositorio.html_url}" target="_blank">

          <img class="card-img" src="https://raw.githubusercontent.com/paulaandrezza/${repositorio.name}/main/assets/img/desktop.jpeg" alt="Print do projeto" onError="this.onerror=null; this.src='assets/img/alternative.webp';">
          
          <div class="card-content">
            <h3 class="project-title">${repositorio.name}</h3>
            <p class="project-subtitle">${repositorio.description}</p>
            <ul class="project-topics">
              ${repositorio.topics.map((topic) => `<li>${topic}</li>`).join('')}
            </ul>
          </div>

        </a>
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
