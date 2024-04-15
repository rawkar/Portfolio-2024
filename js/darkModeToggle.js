document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.querySelector('.darkmode-icon');
    const darkModeIcon = darkModeButton.querySelector('img'); // Hämtar img-elementet inuti .darkmode-icon

    if (darkModeButton && darkModeIcon) {
        darkModeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            if (document.body.classList.contains('dark')) {
                darkModeIcon.src = '/assets/icons/sun.svg'; // Bild för ljusläge
            } else {
                darkModeIcon.src = '/assets/icons/icon-darkmode.svg'; // Bild för mörkläge
            }
        });
    } else {
        console.error('Dark mode button or icon not found.');
    }
});
