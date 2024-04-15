const responsiveMenu = () => {
    const menuButton = document.querySelector('#menu-button');
    const header = document.querySelector('.site-header');
    const menu = document.querySelector('.full-menu');
    // Definiera menuLinks här
    const menuLinks = menu.querySelectorAll('a'); 

    const toggleMenu = () => {
        menuButton.classList.toggle('close');
        header.classList.toggle('menu-opened');
        menu.classList.toggle('open');
    };

    menuButton.addEventListener('click', toggleMenu);

    // Lägg till eventlyssnare för varje länk i menyn
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
};

responsiveMenu();


const changeHeaderOnScroll = () => {
    const header = document.querySelector('.site-header'); 
    const scrollActivationHeight = 10; 

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > scrollActivationHeight) {
            header.classList.add('scroll-active'); 
        } else {
            header.classList.remove('scroll-active'); 
        }
    });
};

changeHeaderOnScroll();



