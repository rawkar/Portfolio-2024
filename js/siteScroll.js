// Välj alla ankarelement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // Lägg till en händelselyssnare för 'click' händelsen på varje sådant ankarelement.
  anchor.addEventListener('click', function (e) {
    
      e.preventDefault();

      // Hitta det målelement som ankaret länkar till
      let target = document.querySelector(this.getAttribute('href'));

      // Definiera en offset för header
      let headerOffset = 40; // höjden på header

      // Hämta y-positionen för målelementet i sidan
      let elementPosition = target.offsetTop;

      // Beräkna den faktiska positionen 
      let offsetPosition = elementPosition - headerOffset;

      // Scrolla till beräknad position.
      window.scrollTo({
          top: offsetPosition, 
          behavior: 'smooth' 
      });
  });
});



  // Funktion för att hantera klick på menyval
const updateCurrentMenuItem = () => {
  // Hämta alla menyval
    const menuItems = document.querySelectorAll('.menu__item a'); 
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
  