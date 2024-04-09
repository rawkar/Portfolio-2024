const responsiveMenu = () => {

    const menuButton = document.querySelector('#menu-button')
    const header = document.querySelector('.site-header')

    const menu = document.querySelector('.full-menu')



    const toggleMenu = () => 
    {

        menuButton.classList.toggle('close')
        header.classList.toggle('menu-opened')
        menu.classList.toggle('open')
    }




    menuButton.addEventListener('click', toggleMenu)



}



responsiveMenu()