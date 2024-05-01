document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, // Activa cuando al menos el 10% del elemento está visible
    }
  );

  // Selecciona los elementos a observar
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    observer.observe(section); // Observa cada sección para las animaciones
  });
});

const phrases = ["Desarrollador de Software y Ciberseguridad", "Programador web", "Entusiasta de la PC y Hardware"];
let currentPhrase = 0;
let currentCharacter = 0;
let html = '';
let forward = true;

function type() {
const textElement = document.getElementById('typed-text');
if (forward) {
if (currentCharacter < phrases[currentPhrase].length) {
html += phrases[currentPhrase].charAt(currentCharacter);
textElement.innerHTML = html;
currentCharacter++;
setTimeout(type, 1200); // Velocidad de escritura
} else {
setTimeout(type, 100); // Espera antes de empezar a borrar
forward = false;
}
} else {
if (currentCharacter > 0) {
html = html.substring(0, html.length - 1);
textElement.innerHTML = html;
currentCharacter--;
setTimeout(type, 1200); // Velocidad de borrado
} else {
forward = true;
currentPhrase = (currentPhrase + 1) % phrases.length; // Siguiente frase
setTimeout(type, 200); // Espera antes de escribir de nuevo
}
}
}

document.addEventListener('DOMContentLoaded', function() {
setTimeout(type, 1000); // Inicia el efecto tras cargar la página
});


var dots = document.querySelectorAll('.dot');
var sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;

  sections.forEach(function(section, index) {
    if (section.offsetTop <= scrollPosition) {
      dots[index].style.background = '#6c5ce7';
    } else {
      dots[index].style.background = '#ccc';
    }
  });
});