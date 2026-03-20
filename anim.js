window.onload = () => {
    // Esto quita el bloqueo de carga y activa la animación de las flores
    const timer = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        // Si tu CSS usa la clase "container" para ocultarlas, esto la quita:
        document.body.classList.remove("container");
        clearTimeout(timer);
    }, 1000);
};
