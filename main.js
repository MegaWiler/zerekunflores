const audio = document.getElementById("player");
const lyricsContainer = document.querySelector("#lyrics");
const instruccion = document.querySelector(".instruccion-inicio");

// 1. LETRA SINCRONIZADA
const lyricsData = [
    { text: "She told me that she loved me by the water fountain", time: 14 },
    { text: "She told me that she loved me and she didn't love him", time: 17 },
    { text: "And that was really lovely 'cause it was innocent", time: 21 },
    { text: "But now she's got a cup with something else in it", time: 25 },
    { text: "It's getting kind of blurry at a quarter past ten", time: 28 },
    { text: "And he was in a hurry to be touching her skin", time: 32 },
    { text: "She's feeling kind of dirty when she's dancing with him", time: 36 },
    { text: "Forgetting what she told me by the water fountain", time: 40 },
    { text: "Now he's grabbing her hips, and pulling her in", time: 43 },
    { text: "Kissing her lips, and whispering in her ear", time: 46 },
    { text: "And she knows that she shouldn't listen", time: 50 },
    { text: "And that she should be with me by the water fountain", time: 54 },
    { text: "She couldn't be at home in the night time because", time: 57 },
    { text: "It made her feel alone, but at that time she was too young", time: 61 },
    { text: "I was too young", time: 66 },
    { text: "I should've built a home with a fountain for us", time: 71 },
    { text: "The moment that she told me that she was in love", time: 75 },
    { text: "Too young... I was too young 🌻", time: 78 }
];

// 2. FUNCIÓN PARA ACTIVAR MÚSICA
function activarMusica() {
    audio.play().then(() => {
        console.log("Reproduciendo...");
        if(instruccion) instruccion.style.display = 'none';
    }).catch(error => {
        console.log("Error al reproducir: ", error);
    });
}

// Escuchar clic en toda la pantalla
document.addEventListener("click", activarMusica, { once: true });

// 3. ACTUALIZAR LETRAS
function updateLyrics() {
    const currentTime = audio.currentTime;
    
    // Buscar la línea actual basándose en el tiempo
    let currentLine = null;
    for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime >= lyricsData[i].time) {
            currentLine = lyricsData[i];
        }
    }

    if (currentLine) {
        lyricsContainer.innerHTML = currentLine.text;
        lyricsContainer.style.opacity = 1;
    } else {
        lyricsContainer.style.opacity = 0;
    }
}

// Ejecutar actualización cada 100ms para mayor precisión
setInterval(updateLyrics, 100);

// 4. DETECTOR DE ERRORES DE ARCHIVO
audio.addEventListener('error', function() {
    alert("¡ERROR! No se encuentra el archivo 'tracker.mp3' en la raíz de tu GitHub. Revisa el nombre.");
});
