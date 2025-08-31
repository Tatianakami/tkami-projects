// ==========================
// Tradução PT/EN
// ==========================
const textPT = {
  role: "Desenvolvedora Web & Analista de Dados Jr",
  education: "Ciência da Computação",
  location: "📍 São Paulo, SP-Brasil",
  badges: "Badges",
  resume: "Currículo PDF",
  projects: "Projetos",
  about: "Sobre Mim",
  technologies: "Tecnologias",
  back: "Voltar",
  interface: "Interface",
  repo: "Repositório",
  article: "Artigo",
  doc: "Documentação",
  page: "Pag",
  aboutMe: `Sou uma profissional apaixonada por transformar desafios em soluções inteligentes. 
Com formação em Engenharia de Produção e experiência nas áreas de atendimento, logística e finanças, 
também concluí uma pós-graduação em Segurança da Informação.

Atualmente, estou em transição para a área de tecnologia, movida pela paixão por dados, desenvolvimento web 
e pela oportunidade de criar soluções que conectem estratégia e inovação. Tenho foco em dados e desenvolvimento web, 
buscando aplicar meu conhecimento multidisciplinar, aprender continuamente e desenvolver projetos que gerem impacto real e resultados concretos.`
};

const textEN = {
  role: "Web Developer & Junior Data Analyst",
  education: "Computer Science",
  location: "📍 São Paulo, Brazil",
  badges: "Badges",
  resume: "Resume PDF",
  projects: "Projects",
  about: "About Me",
  technologies: "Technologies",
  back: "Back",
  interface: "Interface",
  repo: "Repository",
  article: "Article",
  doc: "Documentation",
  page: "Page",
  aboutMe: `I am a professional passionate about transforming challenges into smart solutions. 
With a background in Production Engineering and experience in customer service, logistics, and finance, 
I also completed a postgraduate degree in Information Security.

I am currently transitioning into the technology field, driven by my passion for data, web development, 
and the opportunity to create solutions that connect strategy and innovation. My focus is on data and web development, 
seeking to apply my multidisciplinary knowledge, learn continuously, and develop projects that generate real impact and tangible results.`
};

let currentLang = "PT";

// Atualiza os textos de acordo com o idioma
function updateLanguage() {
  const texts = currentLang === "PT" ? textPT : textEN;

  // Perfil
  document.querySelector(".text-gray-900 p:first-child").innerText = texts.role;
  document.querySelector(".text-gray-900 p:nth-child(2)").innerText = texts.education;
  document.getElementById("local").innerText = texts.location;

  // Botões Front
  document.querySelectorAll(".front button, .front a").forEach(btn => {
    if (btn.innerText.includes("Badges")) btn.innerText = texts.badges;
    if (btn.innerText.includes("Currículo") || btn.innerText.includes("Resume")) btn.innerText = texts.resume;
    if (btn.innerText.includes("Projetos") || btn.innerText.includes("Projects")) btn.innerText = texts.projects;
    if (btn.innerText.includes("Sobre") || btn.innerText.includes("About")) btn.innerText = texts.about;
  });

  // Botões Back
  document.querySelector(".back h2").innerText = texts.technologies;
  document.querySelectorAll(".back button").forEach(btn => {
    if (btn.innerText.includes("Voltar") || btn.innerText.includes("Back")) btn.innerText = texts.back;
  });

  // Texto Sobre Mim
  const aboutText = document.querySelector("#aboutScreen p");
  if (aboutText) aboutText.innerText = texts.aboutMe;

  // Paginação
  const pageIndicator = document.getElementById("pageIndicator");
  if (pageIndicator && pageIndicator.innerText) {
    pageIndicator.innerText = pageIndicator.innerText.replace(/Pag|Page/, texts.page);
  }
}

// Alternar idioma
document.getElementById("btnLanguage").addEventListener("click", () => {
  currentLang = currentLang === "PT" ? "EN" : "PT";
  updateLanguage();
  document.getElementById("btnLanguage").innerText = currentLang === "PT" ? "EN" : "PT";
});

// ==========================
// Funções do Flip e Navegação
// ==========================
function flipCardToTech() {
  document.getElementById("card").classList.add("flipped");
}

function flipCardToProfile() {
  document.getElementById("card").classList.remove("flipped");
}

let currentTech = "";
let currentFilter = "";
let currentPage = 1;

function getProjectsPerPage() {
  return window.innerWidth <= 640 ? 3 : 6;
}

function showProjects(tech) {
  document.getElementById("badgesScreen").classList.remove("active");
  currentTech = tech;
  currentPage = 1;
  currentFilter = "";
  document.getElementById("techTitle").innerText = tech;
  renderFilterBar(tech);
  renderProjects();
  renderPagination();
  document.getElementById("flipContainer").style.display = "none";
  document.getElementById("projectsScreen").classList.add("active");
}

function renderFilterBar(tech) {
  const filterBar = document.getElementById("filterBar");
  filterBar.innerHTML = "";
  const projects = projectsData[tech] || [];
  let tagsSet = new Set();
  projects.forEach(proj => {
    if (proj.tags) proj.tags.forEach(tag => tagsSet.add(tag));
  });
  const tags = Array.from(tagsSet);
  if (tags.length > 0) {
    filterBar.classList.remove("hidden");
    const btnAll = document.createElement("button");
    btnAll.innerText = currentLang === "PT" ? "Todos" : "All";
    btnAll.className = "border border-gray-500 text-gray-500 px-2 py-1 rounded-full shadow-md transition hover:bg-gray-500 hover:text-white mr-2";
    btnAll.onclick = () => {
      currentFilter = "";
      currentPage = 1;
      renderProjects();
      renderPagination();
    };
    filterBar.appendChild(btnAll);
    tags.forEach(tag => {
      const btn = document.createElement("button");
      btn.innerText = tag;
      btn.className = "border border-gray-500 text-gray-500 px-2 py-1 rounded-full shadow-md transition hover:bg-gray-500 hover:text-white mr-2";
      btn.onclick = () => {
        currentFilter = tag;
        currentPage = 1;
        renderProjects();
        renderPagination();
      };
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
  const filteredProjects = currentFilter
    ? projects.filter(proj => proj.tags && proj.tags.includes(currentFilter))
    : projects;

  const startIndex = (currentPage - 1) * getProjectsPerPage();
  const pageProjects = filteredProjects.slice(startIndex, startIndex + getProjectsPerPage());

  const texts = currentLang === "PT" ? textPT : textEN;

  pageProjects.forEach(proj => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "bg-gray-100 p-3 rounded-lg shadow";

    let buttonsHtml = "";
    if (proj.site) {
      buttonsHtml += `<a href="${proj.site}" target="_blank" class="border border-yellow-600 text-yellow-600 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-yellow-600 hover:text-white">${texts.interface}</a>`;
    }
    if (proj.repo) {
      buttonsHtml += `<a href="${proj.repo}" target="_blank" class="border border-purple-900 text-purple-900 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-purple-900 hover:text-white">${texts.repo}</a>`;
    }
    if (proj.article) {
      buttonsHtml += `<a href="${proj.article}" target="_blank" class="border border-orange-800 text-orange-800 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-orange-800 hover:text-white">${texts.article}</a>`;
    }
    if (proj.doc) {
      buttonsHtml += `<a href="${proj.doc}" target="_blank" class="border border-blue-800 text-blue-800 px-2 py-1 rounded-full text-xs shadow-md transition hover:bg-blue-800 hover:text-white">${texts.doc}</a>`;
    }

    projectDiv.innerHTML = `
      <h3 class="font-semibold text-sm">${proj.title}</h3>
      <p class="text-xs text-gray-600 text-left">${proj.description}</p>
      <div class="mt-2 flex gap-1">
        ${buttonsHtml}
      </div>
    `;

    container.appendChild(projectDiv);
  });
}

function renderPagination() {
  const projects = projectsData[currentTech] || [];
  const filtered = currentFilter
    ? projects.filter(proj => proj.tags && proj.tags.includes(currentFilter))
    : projects;
  const totalPages = Math.ceil(filtered.length / getProjectsPerPage());
  const pageIndicator = document.getElementById("pageIndicator");
  const texts = currentLang === "PT" ? textPT : textEN;
  if (totalPages > 1) {
    document.getElementById("paginationControls").classList.remove("hidden");
    pageIndicator.innerText = `${texts.page} ${currentPage} / ${totalPages}`;
    document.getElementById("prevPage").disabled = (currentPage === 1);
    document.getElementById("nextPage").disabled = (currentPage === totalPages);
  } else {
    document.getElementById("paginationControls").classList.add("hidden");
    pageIndicator.innerText = "";
  }
}

function nextPage() {
  const projects = projectsData[currentTech] || [];
  const filtered = currentFilter
    ? projects.filter(proj => proj.tags && proj.tags.includes(currentFilter))
    : projects;
  const totalPages = Math.ceil(filtered.length / getProjectsPerPage());
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
  document.getElementById("flipContainer").style.display = "block";
}

function goHome() {
  hideProjects();
  document.getElementById("card").classList.remove("flipped");
}

function showBadges() {
  document.getElementById("projectsScreen").classList.remove("active");
  document.getElementById("flipContainer").style.display = "none";
  document.getElementById("badgesScreen").classList.add("active");
}

function voltarDosBadges() {
  document.getElementById("badgesScreen").classList.remove("active");
  document.getElementById("flipContainer").style.display = "block";
}

function voltarDosProjects() {
  document.getElementById("projectsScreen").classList.remove("active");
  document.getElementById("flipContainer").style.display = "block";
}

function showAbout() {
  document.getElementById("flipContainer").style.display = "none";
  document.getElementById("projectsScreen").classList.remove("active");
  document.getElementById("badgesScreen").classList.remove("active");
  document.getElementById("aboutScreen").classList.add("active");
  updateLanguage(); // garante tradução correta
}

function voltarDoSobreMim() {
  document.getElementById("aboutScreen").classList.remove("active");
  document.getElementById("flipContainer").style.display = "flex";
}
