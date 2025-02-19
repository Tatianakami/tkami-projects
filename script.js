// Função para acionar o flip para a Tela 2 (Tecnologias)
function flipCardToTech() {
    console.log("flipCardToTech");
    document.getElementById("card").classList.add("flipped");
  }
  
  // Função para retornar à Tela 1 (Perfil)
  function flipCardToProfile() {
    console.log("flipCardToProfile");
    document.getElementById("card").classList.remove("flipped");
  }
  
  // Dados dos projetos para cada tecnologia
const projectsData = {
  Python: [
    { title: "Projeto Python Teste", description: "Teste teste Descrição breve 1.", site: "", repo: "#" },
    { title: "Projeto Python Teste", description: "Teste teste Descrição breve 1.", site: "", repo: "#" },
    { title: "Projeto Python Teste", description: "Teste teste Descrição breve 1.", site: "", repo: "#" },
    { title: "Projeto Python Teste", description: "Teste teste Descrição breve 1.", site: "", repo: "#" },
    { title: "Projeto Python Teste", description: "Teste teste Descrição breve 1.", site: "", repo: "#" },
    { title: "Projeto Python Teste", description: "Teste teste Descrição breve 1.", site: "", repo: "#" },
    { title: "Projeto Python Teste", description: "Teste teste Descrição breve 1.", site: "", repo: "#" },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://github.com/eduardolentz/fullstack-python-EBAC", repo: "https://github.com/eduardolentz/fullstack-python-EBAC" }
  ],
  Java: [
    { title: "Projeto Java 1", description: "Descrição breve 1.", site: "#", repo: "#" },
    { title: "Projeto Java 2", description: "Descrição breve 2.", site: "#", repo: "#" }
  ],
  JavaScript: [
    { title: "Projeto JS 1", description: "Descrição breve 1.", site: "#", repo: "#" },
    { title: "Projeto JS 2", description: "Descrição breve 2.", site: "#", repo: "#" }
  ]
};

function showProjects(tech) {
  // Atualiza o título da tela de projetos
  document.getElementById("techTitle").innerText = tech;

  // Limpa o container e insere os projetos correspondentes
  const container = document.getElementById("projectsContainer");
  container.innerHTML = ""; // Limpa projetos anteriores
  if (projectsData[tech]) {
    projectsData[tech].forEach(proj => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "bg-gray-100 p-3 rounded-lg shadow";
      projectDiv.innerHTML = `
        <h3 class="font-semibold text-sm">${proj.title}</h3>
        <p class="text-xs text-gray-600">${proj.description}</p>
        <div class="mt-2 flex gap-1">
          <a href="${proj.site}" target="_blank" class="border border-blue-500 text-blue-500 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-blue-500 hover:text-white">Site</a>
          <a href="${proj.repo}" target="_blank" class="border border-green-500 text-green-500 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-green-500 hover:text-white">Repo</a>
        </div>
      `;
      container.appendChild(projectDiv);
    });
  }
  // Exibe a tela de projetos
  document.getElementById("projectsScreen").classList.add("active");
}

function hideProjects() {
  document.getElementById("projectsScreen").classList.remove("active");
}

function goHome() {
  hideProjects();
  document.getElementById("card").classList.remove("flipped");
}

  // Funções para a tela de Badges
  function showBadges() {
    // Oculta o flipContainer e exibe a tela de badges
    document.getElementById("flipContainer").style.display = "none";
    document.getElementById("badgesScreen").classList.add("active");
  }
  function voltarDosBadges() {
    // Esconde a tela de badges e retorna o flipContainer
    document.getElementById("badgesScreen").classList.remove("active");
    document.getElementById("flipContainer").style.display = "block";
  }