// ==========================
// Tradução PT/EN
// ==========================
const textPT = {
  role: "Dados | Python, SQL e Engenharia de Dados",
  education: "Cursando Ciência da Computação",
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
  aboutMe: `Atualmente atuo como estagiária na área de Dados, com foco no desenvolvimento de soluções orientadas a dados.

Tenho experiência com Python, SQL e Power BI, aplicando esses conhecimentos em projetos práticos como análise de dados, predição de churn e construção de pipelines de dados.

Venho direcionando minha evolução para Engenharia de Dados, com estudos e projetos envolvendo PySpark, ETL e integração de dados, além de análise exploratória e visualização.

Sou estudante de Ciência da Computação e possuo formação em Engenharia de Produção, o que contribui com uma visão analítica e orientada a processos, permitindo transformar dados em insights para tomada de decisão.

Meu objetivo é atuar na área de Dados, com foco em Engenharia de Dados e Análise de Dados, desenvolvendo soluções eficientes, escaláveis e de impacto real.`
};

const textEN = {
  role: "Data | Python, SQL & Data Engineering",
  education: "Computer Science Student",
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
  aboutMe: `I am currently working as a Data Intern, focusing on building data-driven solutions.

I have experience with Python, SQL, and Power BI, applying these skills in projects such as data analysis, churn prediction, and data pipeline development.

I am progressing towards Data Engineering, working with PySpark, ETL processes, and data integration, along with exploratory data analysis and visualization.

I am a Computer Science student with a background in Production Engineering, bringing a structured and analytical mindset to transform data into actionable insights.

My goal is to work in the Data field, focusing on Data Engineering and Data Analytics, building scalable and impactful solutions.`
};

let currentLang = "PT";

// ==========================
// Atualiza idioma
// ==========================
function updateLanguage() {
  const texts = currentLang === "PT" ? textPT : textEN;

  // Perfil
  const titles = document.querySelectorAll(".text-gray-900 h2");
  if (titles.length >= 2) {
    titles[0].innerText = texts.role;
    titles[1].innerText = texts.education;
  }

  const location = document.getElementById("local");
  if (location) location.innerText = texts.location;

  // Botões front
  document.querySelectorAll(".front button, .front a").forEach(btn => {
    if (btn.innerText.includes("Badges")) btn.innerText = texts.badges;
    if (btn.innerText.includes("Currículo") || btn.innerText.includes("Resume")) btn.innerText = texts.resume;
    if (btn.innerText.includes("Projetos") || btn.innerText.includes("Projects")) btn.innerText = texts.projects;
    if (btn.innerText.includes("Sobre") || btn.innerText.includes("About")) btn.innerText = texts.about;
  });

  // Back
  const backTitle = document.querySelector(".back h2");
  if (backTitle) backTitle.innerText = texts.technologies;

  document.querySelectorAll(".back button").forEach(btn => {
    if (btn.innerText.includes("Voltar") || btn.innerText.includes("Back")) {
      btn.innerText = texts.back;
    }
  });

  // Sobre mim
  const aboutText = document.querySelector("#aboutScreen p");
  if (aboutText) aboutText.innerText = texts.aboutMe;

  // Paginação
  const pageIndicator = document.getElementById("pageIndicator");
  if (pageIndicator && pageIndicator.innerText) {
    pageIndicator.innerText = pageIndicator.innerText.replace(/Pag|Page/, texts.page);
  }
}

// ==========================
// Botão idioma
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const btnLanguage = document.getElementById("btnLanguage");

  if (btnLanguage) {
    btnLanguage.addEventListener("click", () => {
      currentLang = currentLang === "PT" ? "EN" : "PT";
      updateLanguage();
      btnLanguage.innerText = currentLang === "PT" ? "EN" : "PT";
    });
  }
});

// ==========================
// Flip
// ==========================
function flipCardToTech() {
  document.getElementById("card").classList.add("flipped");
}

function flipCardToProfile() {
  document.getElementById("card").classList.remove("flipped");
}

// ==========================
// Navegação
// ==========================
function showAbout() {
  document.getElementById("flipContainer").style.display = "none";
  document.getElementById("projectsScreen").classList.remove("active");
  document.getElementById("badgesScreen").classList.remove("active");
  document.getElementById("aboutScreen").classList.add("active");
  updateLanguage();
}

function voltarDoSobreMim() {
  document.getElementById("aboutScreen").classList.remove("active");
  document.getElementById("flipContainer").style.display = "flex";
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

function goHome() {
  document.getElementById("projectsScreen").classList.remove("active");
  document.getElementById("flipContainer").style.display = "block";
  document.getElementById("card").classList.remove("flipped");
}
