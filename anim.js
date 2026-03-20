window.onload = () => {
    const mensaje = document.getElementById('mensaje-especial');
    
    // 1. Después de 6 segundos, quitamos el mensaje
    setTimeout(() => {
        mensaje.style.opacity = '0';
        
        // 2. Después de que se borre el mensaje, crecen las flores
        setTimeout(() => {
            mensaje.style.display = 'none';
            document.body.classList.remove("container");
        }, 2000);
    }, 6000);
};
