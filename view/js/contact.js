function validateForm() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var mail = document.getElementById('mail').value;
    var message = document.getElementById('message').value;
    var errorMessage = "";

    // Vérification des champs vides
    if (nom === "" || prenom === "" || mail === "" || message === "") {
        errorMessage += "Tous les champs doivent être remplis.\n";
    }

    // Vérification du nombre minimum de lettres pour nom et prénom
    if (nom.length < 2 || prenom.length < 2) {
        errorMessage += "Le nom et le prénom doivent contenir au moins 2 lettres.\n";
    }

    // Vérification de l'email valide
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(mail)) {
        errorMessage += "Veuillez entrer une adresse e-mail valide.\n";
    }

    // Vérification du nombre minimum de lettres pour le message
    if (message.length < 5) {
        errorMessage += "Le message doit contenir au moins 5 lettres.\n";
    }

    // Affichage des erreurs ou soumission du formulaire
    var errorDiv = document.getElementById('error-message');
    if (errorMessage !== "") {
        errorDiv.innerHTML = errorMessage;
    } else {
        errorDiv.innerHTML = ""; // Réinitialiser les erreurs
        document.getElementById('contactForm').submit();
    }
}