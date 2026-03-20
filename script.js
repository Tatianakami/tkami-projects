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
  aboutMe: `Estagiária na área de Dados e estudante de Ciência da Computação, com foco em análise, visualização e desenvolvimento de soluções orientadas a dados.

Possuo experiência com SQL, Power BI e Python, aplicando esses conhecimentos em projetos práticos como análise de vendas, predição de churn e construção de pipelines de dados.

Minha formação em Engenharia de Produção agrega uma visão analítica, estruturada e orientada a processos, permitindo transformar dados em insights estratégicos para tomada de decisão.

Atualmente, venho desenvolvendo projetos voltados a Data Analytics e Data Engineering, com o objetivo de evoluir continuamente e construir soluções escaláveis, eficientes e de impacto real.`
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
  aboutMe: `I am a data-focused professional and Computer Science student, with a strong focus on data analysis, visualization, and building data-driven solutions.

I have experience with SQL, Power BI, and Python, applying these tools in practical projects such as sales analysis, churn prediction, and data pipeline development.

My background in Production Engineering brings a structured, analytical, and process-oriented mindset, enabling me to transform data into strategic insights for decision-making.

Currently, I am developing projects in Data Analytics and Data Engineering, aiming to continuously grow and build scalable, efficient solutions that generate real impact.`
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

  // Botões
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
// Flip e navegação
// ==========================
function flipCardToTech() {
  document.getElementById("card").classList.add("flipped");
}

function flipCardToProfile() {
  document.getElementById("card").classList.remove("flipped");
}
