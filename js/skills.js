  const skillsItems = [
    {
      title: "Linaguagens de Programação e de Marcação",
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          language: "Python"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          language: "HTML"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          language: "CSS"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          language: "JavaScript"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
          language: "Linguagem C"
        },
      ]
    },
    {
      title: "Frameworks e Bibliotecas",
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          language: "React"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
          language: "NodeJS"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          language: "Material UI"
        },
      ] 
    },
    {
      title: "Design",
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          language: "Figma"
        },
      ]
    },
    {
      title: "Banco de dados",
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          language: "MySQL"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
          language: "SQLite"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          language: "MongoDB"
        },
      ]
    }
  ]


  const makeSkillLi = (skill) => {
    return `
      <li class="neon-border"> 
        <img src=${skill.icon} />
        <span class="section-subtitle">${skill.language}</span>  
      </li>
    `
  }
  

  const makeSkillUl = (skillUl) => {
    return `
      <div>
        <p class="skill-title">${skillUl.title}</p>
        <ul class="skill-list" id="skill-list">
          ${skillUl.icons.map(makeSkillLi).join('')}
        </ul>
      </div>
    `
  }

  const skillTemplate = document.getElementById('skill-template');

  export const loadSkillsItems = () => {
    const newHtml = skillsItems.map(makeSkillUl).join('');
    skillTemplate.innerHTML = newHtml;
  };