document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.querySelector('.darkmode-icon'); // Hämtar knappen för mörkläge
    const darkModeIcon = darkModeButton.querySelector('img'); // Hämtar bild-ikonen inuti mörkläge-knappen

    // Kontrollerar om både knappen och ikonen finns
    if (darkModeButton && darkModeIcon) {
        darkModeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark'); // Växlar mörkläge på eller av
            // Ändrar bild-ikonen baserat på om mörkläge är aktiverat eller inte
            if (document.body.classList.contains('dark')) {
                darkModeIcon.src = '/assets/icons/sun.svg'; // Bild för ljusläge
            } else {
                darkModeIcon.src = '/assets/icons/icon-darkmode.svg'; // Bild för mörkläge
            }
        });
    } else {
        console.error('Dark mode button or icon not found.'); // Loggar fel om knappen eller ikonen inte hittas
    }
});
