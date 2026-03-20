// main.js
const audio = document.getElementById("player");
const lyrics = document.querySelector("#lyrics");

// 1. SINCRONIZACIÓN DE LA LETRA (Water Fountain)
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
  { text: "Too young... too young...", time: 128 }
];

// 2. FORZAR REPRODUCCIÓN (Importante: Eve debe hacer clic en las flores)
document.addEventListener("click", () => {
    audio.play().then(() => {
        console.log("Sonando perfectamente");
    }).catch(err => console.log("Error de audio:", err));
}, { once: true });

// 3. ACTUALIZAR LETRA EN PANTALLA
function updateLyrics() {
  let time = Math.floor(audio.currentTime);
  let currentLine = lyricsData.find((line, index) => {
      let nextLine = lyricsData[index + 1];
      return time >= line.time && (!nextLine || time < nextLine.time);
  });

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
  }
}

// 4. OCULTAR MENSAJE DE TEXTO INICIAL
function ocultarTitulo() {
  const titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => { titulo.style.display = "none"; }, 3000);
  }
}

setInterval(updateLyrics, 300);
setTimeout(ocultarTitulo, 10000); // Se borra a los 10 segundos
