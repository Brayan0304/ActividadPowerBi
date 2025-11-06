// Función para ocultar el indicador de carga cuando el iframe esté listo
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

// Mostrar indicador de carga al inicio
window.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'block';
    }
});

// Añadir efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Log cuando el dashboard está completamente cargado
console.log('Power BI Dashboard cargado correctamente ✓');