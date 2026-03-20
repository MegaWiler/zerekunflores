const audio = document.getElementById("player");
const lyrics = document.querySelector("#lyrics");

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

// 2. FUNCIÓN DE REPRODUCCIÓN FORZADA
function playMusic() {
    audio.muted = false; // Quitar silencio
    audio.volume = 1.0;  // Volumen al máximo
    
    audio.play().then(() => {
        console.log("Reproduciendo track.mp3 con éxito");
    }).catch(err => {
        console.error("Error: El navegador sigue bloqueando o no encuentra track.mp3", err);
    });
}

// Escuchar el clic en TODA la pantalla para activar el audio
document.addEventListener("click", playMusic, { once: true });

// 3. ACTUALIZAR LETRAS
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

setInterval(updateLyrics, 300);

// 4. OCULTAR TÍTULO
setTimeout(() => {
  const titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => { titulo.style.display = "none"; }, 3000);
  }
}, 10000);
