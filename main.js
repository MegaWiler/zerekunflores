const audio = document.getElementById("player");
const lyrics = document.querySelector("#lyrics");

// 1. CONFIGURACIÓN DE LA LETRA
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
  { text: "Too young... I was too young 🌻", time: 78 }
];

// 2. ACTIVAR MÚSICA CON CLIC (Solución al bloqueo del navegador)
document.addEventListener("click", () => {
    console.log("Intentando reproducir tracker.mp3...");
    audio.play().then(() => {
        console.log("Reproduciendo con éxito");
    }).catch(err => {
        console.log("Error: Revisa que tracker.mp3 esté en la raíz de GitHub", err);
    });
}, { once: true });

// 3. ACTUALIZACIÓN DE LETRA
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

// 4. OCULTAR EL TÍTULO INICIAL
function ocultarTitulo() {
  const titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => { titulo.style.display = "none"; }, 3000);
  }
}

setInterval(updateLyrics, 300);
setTimeout(ocultarTitulo, 8000);
