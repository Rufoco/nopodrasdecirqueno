// Velocidad inicial de movimiento del botón
let velocidad = 1000; // tiempo en milisegundos (1 segundo al inicio)
const decrementoVelocidad = 100; // cantidad en milisegundos que se reduce en cada movimiento

// Función para mover el botón a una posición aleatoria
function moverBoton() {
    const boton = document.getElementById('btnNo');
    const btnWidth = boton.offsetWidth;
    const btnHeight = boton.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    boton.style.position = 'fixed';
    boton.style.left = `${newX}px`;
    boton.style.top = `${newY}px`;

    // Disminuir la velocidad para el próximo movimiento, haciendo que el botón se mueva más rápido
    velocidad = Math.max(100, velocidad - decrementoVelocidad); // Limita la velocidad mínima a 100 ms para no ser demasiado rápido
}

// Iniciar el movimiento automático del botón
function iniciarMovimiento() {
    moverBoton();
    setTimeout(iniciarMovimiento, velocidad);
}

document.getElementById('btnSi').addEventListener('click', function() {
    alert('¡Sabía que dirías que sí! 🎉');
});

// Inicia el movimiento automático cuando se carga la página
window.onload = iniciarMovimiento;


