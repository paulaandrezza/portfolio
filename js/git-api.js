const idReposParaExibir = [
  594292244,
  589365670,
  605767089,
  625419772,
  577856949,
  616616674,
];

function convertRepoApitoRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    language: repo.language,
    description: repo.description,
    html_url: repo.html_url,
    topics: repo.topics,
    deploy: repo.homepage
  }    
}


export const getRepo = (page = 1) => {
  const url = `https://api.github.com/users/paulaandrezza/repos?page=${page}`
  
  return fetch(url)
  .then((response) => response.json())
  .then((repositorios) => repositorios.filter(repo => idReposParaExibir.includes(repo.id)).map(convertRepoApitoRepo))
}
