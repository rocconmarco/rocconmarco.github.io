document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = hamburgerMenu.querySelector('ul.dropdown');

    // Aggiunge/rimuove la classe 'open' per mostrare/nascondere il menu
    hamburgerMenu.querySelector('img').addEventListener('click', function (event) {
        event.preventDefault(); // Previene il comportamento predefinito del link
        hamburgerMenu.classList.toggle('open');
    });

    // Aggiungiamo un evento per chiudere il menu cliccando fuori di esso
    document.addEventListener('click', function (event) {
        if (!hamburgerMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('open');
        }
    });

    // Previene che i click sui link chiudano il menu
    dropdownMenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});