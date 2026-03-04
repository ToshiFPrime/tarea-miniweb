// 1. FUNCIÓN: Modo Oscuro / Modo Claro
const btnToggle = document.getElementById('toggle-mode');

btnToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnToggle.textContent = 'Activar Modo Claro';
    } else {
        btnToggle.textContent = 'Activar Modo Oscuro';
    }
});

// 2. FUNCIÓN: Validación de Formulario y Envío Real
const formulario = document.getElementById('contactForm');
const errorMsg = document.getElementById('error-msg');

formulario.addEventListener('submit', function(evento) {
    // Detenemos el envío automático temporalmente para revisar los datos
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validamos si hay campos vacíos
    if (nombre === '' || correo === '' || mensaje === '') {
        errorMsg.style.display = 'block'; // Mostramos el error
    } else {
        errorMsg.style.display = 'none'; // Ocultamos el error
        
        // ¡COMO TODO ESTÁ BIEN, ENVIAMOS EL FORMULARIO DE VERDAD!
        formulario.submit(); 
    }
});