const filterButtons = document.querySelectorAll('#filterButtons button');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

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

  const acordeonBtns = document.querySelectorAll('.acordeon-btn');

acordeonBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// este es el js de la alerta de la página

function mostrarAlerta() {
    alert("¡Gracias por tu reserva! Te esperamos en nuestro gastrobar.");
  }

// este es el js de el modal de la página


function abrirModal() {
  document.getElementById("miModal").style.display = "block";
}

     document.querySelector('form').addEventListener('submit', function(e) {
                    e.preventDefault();
                        
                        showToast('Mensaje enviado con éxito.');       
                        this.reset();
                    
                });

 function showToast(message) {
  let toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '16px 24px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    toast.style.zIndex = '9999';
    toast.style.fontSize = '16px';
    document.body.appendChild(toast);

                    setTimeout(() => {
                        toast.style.transition = 'opacity 0.5s';
                        toast.style.opacity = '0';
                        setTimeout(() => document.body.removeChild(toast), 500);
                    }, 3000);
                }