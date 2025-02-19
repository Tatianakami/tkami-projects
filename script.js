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
// ------------------------------------------------------------------------
 // Dados de exemplo para projetos Python (pode ser adaptado para outras tecnologias)
const projectsData = {
  Python: [
    { title: "Projeto Python 1", tags: ["Data Science"], description: "Descrição breve 1.", site: "https://www.w3schools.com/charsets/tryit.asp?deci=11144", repo: "https://www.w3schools.com/charsets/tryit.asp?deci=11144", article:"https://www.w3schools.com/charsets/tryit.asp?deci=11144" },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    // ... adicione mais projetos conforme necessário
    // ... adicione mais projetos conforme necessário
  ],

  Java: [
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Desk"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    { title: "Projeto Python 1", description: "Descrição breve 1.", site: "https://exemplo.com/site1", repo: "https://github.com/exemplo/repo1", tags: ["Data Science"] },
    { title: "Projeto Python 2", description: "Descrição breve 2.", site: "https://exemplo.com/site2", repo: "https://github.com/exemplo/repo2", tags: ["Web"] },
    // ... adicione mais projetos conforme necessário
  ]
};

let currentTech = "";
let currentFilter = "";
let currentPage = 1;
// Atualizado para exibir 6 projetos por página
const projectsPerPage = 6;

function showProjects(tech) {
  currentTech = tech;
  currentPage = 1;
  currentFilter = "";
  document.getElementById("techTitle").innerText = tech;
  
  renderFilterBar(tech);
  renderProjects();
  renderPagination();
  
  document.getElementById("projectsScreen").classList.add("active");
}

function renderFilterBar(tech) {
  const filterBar = document.getElementById("filterBar");
  filterBar.innerHTML = "";
  const projects = projectsData[tech] || [];
  let tagsSet = new Set();
  
  projects.forEach(proj => {
    if (proj.tags) {
      proj.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  
  const tags = Array.from(tagsSet);
  if (tags.length > 0) {
    filterBar.classList.remove("hidden");

    // Botão "All" para mostrar todos os projetos
    const btnAll = document.createElement("button");
    btnAll.innerText = "All";
    btnAll.className =
      "border border-gray-500 text-gray-500 px-2 py-1 rounded-full shadow-md transition hover:bg-gray-500 hover:text-white mr-2";
    btnAll.onclick = () => { currentFilter = ""; currentPage = 1; renderProjects(); renderPagination(); };
    filterBar.appendChild(btnAll);
    
    tags.forEach(tag => {
      const btn = document.createElement("button");
      btn.innerText = tag;
      btn.className =
        "border border-gray-500 text-gray-500 px-2 py-1 rounded-full shadow-md transition hover:bg-gray-500 hover:text-white mr-2";
      btn.onclick = () => { currentFilter = tag; currentPage = 1; renderProjects(); renderPagination(); };
      filterBar.appendChild(btn);
    });
  } else {
    filterBar.classList.add("hidden");
  }
}

function renderProjects() {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = "";
  const projects = projectsData[currentTech] || [];
  
  // Aplica o filtro, se definido
  const filteredProjects = currentFilter ? projects.filter(proj => proj.tags && proj.tags.includes(currentFilter)) : projects;
  
  // Paginação: calcula os projetos da página atual
  const startIndex = (currentPage - 1) * projectsPerPage;
  const pageProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);
  
  pageProjects.forEach(proj => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "bg-gray-100 p-3 rounded-lg shadow";
    
    // Constrói os botões de acordo com as propriedades do projeto
    let buttonsHtml = "";
    if (proj.site) {
      buttonsHtml += `<a href="${proj.site}" target="_blank" class="border border-blue-800 text-blue-800 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-blue-800 hover:text-white">Front</a>`;
    }
    if (proj.repo) {
      buttonsHtml += `<a href="${proj.repo}" target="_blank" class="border border-purple-900 text-purple-900 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-purple-900 hover:text-white">Repositório</a>`;
    }
    if (proj.article) {
      buttonsHtml += `<a href="${proj.article}" target="_blank" class="border border-orange-800 text-orange-800 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-orange-800 hover:text-white">Artigo</a>`;
    }
    
    projectDiv.innerHTML = `
      <h3 class="font-semibold text-sm">${proj.title}</h3>
      <p class="text-xs text-gray-600">${proj.description}</p>
      <div class="mt-2 flex gap-1">
        ${buttonsHtml}
      </div>
    `;
    
    // Previne a propagação de cliques dos links para o cartão pai
    projectDiv.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", e => e.stopPropagation());
    });
    
    container.appendChild(projectDiv);
  });
  
}

function renderPagination() {
  const projects = projectsData[currentTech] || [];
  const filtered = currentFilter ? projects.filter(proj => proj.tags && proj.tags.includes(currentFilter)) : projects;
  const totalPages = Math.ceil(filtered.length / projectsPerPage);
  
  const pageIndicator = document.getElementById("pageIndicator");
  if (totalPages > 1) {
    pageIndicator.innerText = `Página ${currentPage} de ${totalPages}`;
    document.getElementById("prevPage").disabled = (currentPage === 1);
    document.getElementById("nextPage").disabled = (currentPage === totalPages);
  } else {
    pageIndicator.innerText = "";
  }
}

function nextPage() {
  const projects = projectsData[currentTech] || [];
  const filtered = currentFilter ? projects.filter(proj => proj.tags && proj.tags.includes(currentFilter)) : projects;
  const totalPages = Math.ceil(filtered.length / projectsPerPage);
  
  if (currentPage < totalPages) {
    currentPage++;
    renderProjects();
    renderPagination();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProjects();
    renderPagination();
  }
}

function hideProjects() {
  document.getElementById("projectsScreen").classList.remove("active");
}

function goHome() {
  hideProjects();
  document.getElementById("card").classList.remove("flipped");
}


// ------------------------------------------------------------------------
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