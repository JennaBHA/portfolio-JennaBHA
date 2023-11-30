/* navbar.js */
const header = document.querySelector('.header');

// Fonction pour changer la classe en fonction de la position de défilement
function toggleNavbarColor() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Écouteur d'événement de défilement
window.addEventListener('scroll', toggleNavbarColor);

// Appel initial pour gérer l'état initial de la navbar
toggleNavbarColor();
