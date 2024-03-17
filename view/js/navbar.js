 /* navbar.js */
 const navbarLinks = document.querySelectorAll('.navbar a');

 // Parcourez chaque lien et ajoutez un gestionnaire d'événements pour le clic
 navbarLinks.forEach(function(link) {
   link.addEventListener('click', function(event) {
     // Retirez la classe 'active' de tous les autres liens
     navbarLinks.forEach(function(link) {
       link.classList.remove('active');
     });

     // Ajoutez la classe 'active' au lien qui a été cliqué
     this.classList.add('active');
   });
 });

 // Récupérer le titre de la page actuelle
 const pageTitle = document.title;
 const currentPageLink = document.querySelector(`.navbar a[href="${pageTitle.toLowerCase()}.html"]`);

 // Si le lien correspondant à la page actuelle existe, ajoutez la classe 'active' pour indiquer le focus
 if (currentPageLink) {
   currentPageLink.classList.add('active');
 }

 // Ajoute un gestionnaire d'événements pour rétablir automatiquement le focus sur le dernier lien sélectionné
 document.addEventListener('focusout', function(event) {
   // Vérifiez si l'élément qui a perdu le focus est un lien de la navbar
   if (!event.relatedTarget || !event.relatedTarget.classList.contains('navbar')) {
     // Déplacez le focus vers le lien de la page actuelle
     const currentPageLink = document.querySelector('.navbar .active');
     if (currentPageLink) {
       currentPageLink.focus();
     }
   }
 });

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



