const btn = document.querySelector('.btn');

// Fonction pour afficher ou masquer le bouton en fonction de la position de défilement
function toggleButtonVisibility() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

// Écouteur d'événement de défilement
window.addEventListener('scroll', toggleButtonVisibility);

// Écouteur d'événement pour remonter en haut de la page lors du clic sur le bouton
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// Appel initial pour gérer l'état initial du bouton
toggleButtonVisibility();
