const audio = document.getElementById("player");
const lyricsContainer = document.querySelector("#lyrics");
const rgbBall = document.querySelector("#rgb-ball");

// Variable para rastrear la frase actual
let currentLineIndex = -1;

// 1. LETRA COMPLETA (Sincronizada con Water Fountain)
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
  { text: "Too young... I was too young 🌻", time: 78 },
  { text: "Too young, too young, too young", time: 82 },
  { text: "And if she ever goes back to the water fountain", time: 98 },
  { text: "The handle will be broken and the rust set in", time: 102 },
  { text: "But my hand, it will be open and I'll try to fix it", time: 105 },
  { text: "My heart, it will be open and I'll try to give it", time: 109 },
  { text: "Now I'm grabbing her hips, and pulling her in", time: 113 },
  { text: "Kissing her lips, and whispering in her ear", time: 116 },
  { text: "And I know that it's only a wish", time: 120 },
  { text: "And that we're not standing by the water fountain", time: 124 },
  { text: "Too young, too young, too young", time: 128 }
];

// 2. ACTIVAR CON CLIC
document.addEventListener("click", () => {
    audio.play().then(() => {
        console.log("Música iniciada correctamente.");
        if (rgbBall) rgbBall.style.opacity = "1";
        if (lyricsContainer) lyricsContainer.style.opacity = "1";
    }).catch(err => console.error("Error al reproducir:", err));
}, { once: true });

// 3. ACTUALIZAR LETRA Y BOLA RGB
function updateKaraoke() {
    const currentTime = audio.currentTime;
    
    // Buscar la frase actual
    let newLineIndex = -1;
    for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime >= lyricsData[i].time) {
            newLineIndex = i;
        }
    }

    // Si la frase cambió
    if (newLineIndex !== currentLineIndex) {
        currentLineIndex = newLineIndex;

        if (currentLineIndex !== -1) {
            // Actualizar texto y forzar visibilidad
            lyricsContainer.innerHTML = lyricsData[currentLineIndex].text;
            lyricsContainer.style.opacity = "1";

            // Salto de la bola RGB
            if (rgbBall) {
                rgbBall.style.opacity = "1"; // Asegurar que sea visible
                rgbBall.classList.remove('ball-jump');
                void rgbBall.offsetWidth; // Reiniciar animación
                rgbBall.classList.add('ball-jump');
            }
        }
    }
}

// Intervalo rápido para sincronización perfecta
setInterval(updateKaraoke, 50);
