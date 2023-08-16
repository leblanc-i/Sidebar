// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
const sideBar = document.getElementById("side-bar");
const contenu = document.querySelector(".content");

btn.addEventListener("click", () => {
    sideBar.classList.toggle("div-side");
});
contenu.addEventListener("click", () => {
    sideBar.classList.remove("div-side");
})