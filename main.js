const audio = document.getElementById("player");
const lyricsContainer = document.getElementById("lyrics");

// Base de datos de la letra completa con tiempos aproximados
const lyricsData = [
  { time: 14, words: "She told me that she loved me by the water fountain" },
  { time: 18, words: "She told me that she loved me and she didn't love him" },
  { time: 22, words: "And that was really lovely cause it was innocent" },
  { time: 25, words: "But now she's got a cup with something else in it" },
  { time: 29, words: "It's getting kind of blurry at a quarter past ten" },
  { time: 32, words: "And he was in a hurry to be touching her skin" },
  { time: 36, words: "She's feeling kind of dirty when she's dancing with him" },
  { time: 40, words: "Forgetting what she told me by the water fountain" },
  // CORO
  { time: 44, words: "Now he's grabbing her hips and pulling her in" },
  { time: 47, words: "Kissing her lips and whispering in her ear" },
  { time: 51, words: "And she knows that she shouldn't listen" },
  { time: 54, words: "And that she should be with me by the water fountain" },
  // ESTROFA 2
  { time: 74, words: "She couldn't be at home in the night time because" },
  { time: 77, words: "It made her feel alone but at that time she was too young" },
  { time: 82, words: "I was too young" },
  { time: 98, words: "And if she ever goes back to the water fountain" },
  { time: 102, words: "The handle will be broken and the rust set in" },
  { time: 106, words: "But my hand it will be open and I'll try to fix it" },
  { time: 110, words: "Only one who's standing by the water fountain" },
  // CORO FINAL
  { time: 114, words: "Now I'm grabbing her hips and pulling her in" },
  { time: 117, words: "Kissing her lips and whispering in her ear" },
  { time: 121, words: "And I know that it's only a wish" },
  { time: 125, words: "And that we're not standing by the water fountain" },
  // FINAL
  { time: 133, words: "Too young too young too young..." },
  { time: 140, words: "🌻" }
];

// Iniciar música al primer clic
document.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  }
}, { once: true });

function updateLyrics() {
  const currentTime = audio.currentTime;
  let currentLine = null;

  // Encontrar la línea actual basada en el tiempo
  for (let i = 0; i < lyricsData.length; i++) {
    if (currentTime >= lyricsData[i].time) {
      currentLine = lyricsData[i];
    }
  }

  if (currentLine) {
    // Si la línea ha cambiado, renderizar nuevas palabras
    if (lyricsContainer.dataset.currentText !== currentLine.words) {
      lyricsContainer.innerHTML = "";
      const wordsArray = currentLine.words.split(" ");
      wordsArray.forEach((word) => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        span.style.transition = "all 0.3s ease";
        lyricsContainer.appendChild(span);
      });
      lyricsContainer.dataset.currentText = currentLine.words;
    }

    // Efecto de resaltado palabra por palabra (simulado por duración de la frase)
    const spans = lyricsContainer.querySelectorAll("span");
    const timeInLine = currentTime - currentLine.time;
    const wordDuration = 2.5 / spans.length; // Ajuste de velocidad de resaltado
    
    spans.forEach((span, index) => {
      if (timeInLine >= index * wordDuration) {
        span.classList.add("highlight");
      } else {
        span.classList.remove("highlight");
      }
    });
  } else {
    lyricsContainer.innerHTML = "";
    lyricsContainer.dataset.currentText = "";
  }
}

// Ejecutar actualización cada 50ms para suavidad
setInterval(updateLyrics, 50);
