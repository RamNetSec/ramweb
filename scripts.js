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


document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");

  // Función para alternar la visibilidad del sidebar al hacer clic en el botón de alternar
  sidebarToggle.addEventListener("click", function () {
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-100%";
    } else {
      sidebar.style.right = "0";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
const sections = document.querySelectorAll('.section'); // Selecciona todas las secciones que deseas marcar
const dotsContainer = document.querySelector('.progress-bar-container');
sections.forEach((sec, idx) => {
  const dot = document.createElement('div');
  dot.classList.add('progress-dot');
  if (idx === 0) dot.classList.add('active-dot'); // Activa la primera bolita
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.progress-dot');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach((section, idx) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = idx;
      }
  });
  dots.forEach((dot, idx) => {
      if (idx === current) {
          dot.classList.add('active-dot');
      } else {
          dot.classList.remove('active-dot');
      }
  });
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
setTimeout(type, 120); // Velocidad de escritura
} else {
setTimeout(type, 1500); // Espera antes de empezar a borrar
forward = false;
}
} else {
if (currentCharacter > 0) {
html = html.substring(0, html.length - 1);
textElement.innerHTML = html;
currentCharacter--;
setTimeout(type, 60); // Velocidad de borrado
} else {
forward = true;
currentPhrase = (currentPhrase + 1) % phrases.length; // Siguiente frase
setTimeout(type, 500); // Espera antes de escribir de nuevo
}
}
}

document.addEventListener('DOMContentLoaded', function() {
setTimeout(type, 1000); // Inicia el efecto tras cargar la página
});
