const timelineItems = [
  {
    title: "Aprendizagem Industrial em Eletroeletrônica | SENAI",
    content: "Meu primeiro contato com tecnologia, o que me abriu as portas para esse mundo incrível",
    year: "2017.1",
    icon: "bolt"
  },
  {
    title: "Técnico em Mecatrônica | IFSP",
    content: "Estava decidida que queria trabalhar com tecnologia, então fiz um técnico para poder trabalhar na área",
    year: "2018.1",
    icon: "settings_suggest"
  },
  {
    title: "Engenharia de Controle e Automação | IFSP",
    content: "Iniciei a faculdade, seguindo na área de automação",
    year: "2019.1",
    icon: "engineering"
  },
  {
    title: "Técnico Eletrônico Jr. | Assistência Técnica | Multilaser",
    content: "Meu primeiro emprego na área, onde tive a oportunidade de trabalhar de perto com eletrônica",
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
    title: "Análise e Desenvolvimento de Sistemas | IFSP",
    content: "Depois de pensar muito sobre, percebi que era apaixonada por programação e troquei de curso. Melhor decisão que tomei",
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

export const loadtimelineItems = () => {
  const newHtml = timelineItems.map(makeTimelineLi).join('')
  timeline.innerHTML = newHtml
}