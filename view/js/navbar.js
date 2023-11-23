document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY;

        if (scrollPos > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
