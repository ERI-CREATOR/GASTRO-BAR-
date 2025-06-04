// filtros del los elementos del menú
const filterButtons = document.querySelectorAll('#filterButtons button');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.textContent.toLowerCase();
    
    menuItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'todos' || category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// la parte del Acordeón 
const acordeonBtns = document.querySelectorAll('.acordeon-btn');
acordeonBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// la parte de la Alerta de reserva
function mostrarAlerta() {
  alert("¡Gracias por tu reserva! Te esperamos en nuestro gastrobar.");
}

// Modal - Versión mejorada usando Bootstrap
function abrirModal() {
  const modal = new bootstrap.Modal(document.getElementById('miModal'));
  modal.show();
}

function cerrarModal() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('miModal'));
  modal.hide();
}

// parte del Toast de Bootstrap para agregar pedido
function showToast() {
  const toastEl = document.getElementById('pedidoToast');
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

// parte del Toast para el formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Mostrar toast de Bootstrap 
  const toastEl = document.getElementById('pedidoToast');
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
  
  this.reset();
});

// Inicializar componentes de Bootstrap cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // parte de la Inicializacion de popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Inicializacion del  carrusel
  const myCarousel = new bootstrap.Carousel(document.getElementById('galeriaCarrusel'));
});
                }
