const idReposParaExibir = [
    594292244,
    589114869,
    589365670,
    605767089
];

function convertRepoApitoRepo(repo) {
    return {
        id: repo.id,
        name: repo.name,
        language: repo.language,
        description: repo.description,
        html_url: repo.html_url,
        topics: repo.topics
    }    
}


export const getRepo = () => {
    const url = `https://api.github.com/users/paulaandrezza/repos`

    return fetch(url)
        .then((response) => response.json())
        .then((repositorios) => repositorios.filter(repo => idReposParaExibir.includes(repo.id)).map(convertRepoApitoRepo))
}
