    function initTyped() {
        var typed = new Typed(".auto-type", {
            strings: ["Developer", "développeuse", "programmeuse", "designer"],
            typeSpeed: 150,
            backSpeed: 50,
            loop: false,
            onComplete: function () {
                setTimeout(function () {
                    typed.reset(); // Réinitialiser le texte après un court délai
                    typed.start(); // Redémarrer l'auto typing
                }, 1000); // Délai en millisecondes avant de réinitialiser
            }
        });
    }

    // Initialiser Typed lors du chargement de la page
    document.addEventListener("DOMContentLoaded", function () {
        initTyped();
    });