document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      let headerOffset = 120;  // Höjden på din header
      let elementPosition = target.offsetTop;
      let offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  


  // Funktion för att hantera klick på menyval
const updateCurrentMenuItem = () => {
    const menuItems = document.querySelectorAll('.menu__item a'); // Hämta alla menyval
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        // Ta bort nuvarande klass från alla menyval
        menuItems.forEach(item => {
          item.parentElement.classList.remove('menu__item-current');
        });
        // Lägg till klassen 'menu__item-current' till föräldern av den klickade länken
        this.parentElement.classList.add('menu__item-current');
      });
    });
  };
  
  // Anropa funktionen när sidan laddas
  document.addEventListener('DOMContentLoaded', updateCurrentMenuItem);
  