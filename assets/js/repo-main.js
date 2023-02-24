const repoList = document.getElementById('repo-list');

const languageColors = [
  { language: "JavaScript", color: "#f1e05a" },
  { language: "Python", color: "#3572A5" },
  { language: "Ruby", color: "#701516" },
  { language: "C++", color: "#f34b7d" },
  { language: "Go", color: "#00ADD8" },
  { language: "Shell", color: "#89e051" },
  { language: "Markdown", color: "#333" },
  { language: "TypeScript", color: "#2b7489" },
  { language: "Swift", color: "#ffac45" },
  { language: "Kotlin", color: "#F18E33" },
  { language: "Java", color: "#b07219" },
  { language: "PHP", color: "#4F5D95" },
  { language: "C#", color: "#178600" },
  { language: "CSS", color: "#563d7c" },
  { language: "C", color: "#555555" },
  { language: "Objective-C", color: "#438eff" },
  { language: "Rust", color: "#dea584" },
  { language: "Scala", color: "#c22d40" },
  { language: "HTML", color: "#e34c26" },
  { language: "Jupyter Notebook", color: "#DA5B0B" },
  { language: "HTML", color: "#e34c26" },
  { language: null, color: "#252525" },
];

const idReposParaExibir = [
  594292244,
  589114869,
  589365670,
  605767089
];

function convertRepoToLi(repositorio){

  const backgroundColor = languageColors.find(x => x.language === repositorio.language).color;

  if (!idReposParaExibir.find(i => i === repositorio.id)) {
      return null;
  }

  return `
      <li class="project-card">
        <a href="${repositorio.html_url}" target="_blank">

          <img class="card-img" src="https://raw.githubusercontent.com/paulaandrezza/${repositorio.name}/main/assets/img/desktop.jpeg" alt="Print do projeto" onError="this.onerror=null; this.src='assets/img/alternative.webp';">
          
          <div class="card-content">
            <h3 class="project-title">${repositorio.name}</h3>
            <p class="project-subtitle">${repositorio.description}</p>
            <p class="project-language">${repositorio.language}</p>
          </div>

        </a>
      </li>
  `
}


function loadGitItens() {
  gitApi.getRepo().then((repositorios = []) => {
    const newHtml = repositorios.map(convertRepoToLi).join('')
    repoList.innerHTML = newHtml
  })
}

loadGitItens()
