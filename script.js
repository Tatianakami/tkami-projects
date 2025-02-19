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
  
  // Exibe a Tela 3 (Projetos) com a tecnologia selecionada
  function showProjects(tech) {
    console.log("showProjects: " + tech);
    document.getElementById("techTitle").innerText = tech;
    document.getElementById("projectsScreen").classList.add("active");
  }
  
  // Oculta a Tela 3 (retorna à Tela 2)
  function hideProjects() {
    console.log("hideProjects");
    document.getElementById("projectsScreen").classList.remove("active");
  }
  
  // Retorna à Tela 1 (Perfil) a partir da Tela 3
  function goHome() {
    console.log("goHome");
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