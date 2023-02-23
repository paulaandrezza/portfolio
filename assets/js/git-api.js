const gitApi = {}

function convertRepoApitoRepo(repoDetail) {
    const repositorio = new Repo()
    repositorio.id = repoDetail.id
    repositorio.name = repoDetail.name
    repositorio.language = repoDetail.language
    repositorio.description = repoDetail.description
    repositorio.html_url = repoDetail.html_url

    // TODO: topics precisa atualizar os projetos também, já que esse é você quem vai gerar, escolhi essa opção pois o languages mostra os tópicos que o git identificou, mas ele não identifica frameworks e bibliotecas, o que é algo interessante a se colocar.

    return repositorio
}


gitApi.getRepo = () => {
    const url = `https://api.github.com/users/paulaandrezza/repos`

    return fetch(url)
        .then((response) => response.json())
        .then((repositorios) => repositorios.map(convertRepoApitoRepo))
}