// Sincronizar las letras con Alec Benjamin - Water Fountain
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Tiempos ajustados para la estructura de Water Fountain
var lyricsData = [
  { text: "She told me that she loved me", time: 14 },
  { text: "By the water fountain", time: 16 },
  { text: "She told me that she loved me", time: 18 },
  { text: "And she didn't love him", time: 20 },
  { text: "And that was really lovely", time: 22 },
  { text: "Cause it was innocent", time: 24 },
  { text: "But now she's got a cup", time: 26 },
  { text: "With something else in it", time: 28 },
  { text: "It's getting kind of blurry", time: 30 },
  { text: "At a quarter past ten", time: 32 },
  { text: "And he was in a hurry", time: 34 },
  { text: "To be touching her skin", time: 36 },
  { text: "She's feeling kind of dirty", time: 38 },
  { text: "When she's dancing with him", time: 40 },
  { text: "Forgetting what she told me", time: 42 },
  { text: "By the water fountain", time: 44 },
  { text: "Now he's grabbing her hips", time: 46 },
  { text: "And pulling her in", time: 48 },
  { text: "Kissing her lips", time: 50 },
  { text: "And whispering in her ear", time: 52 },
  { text: "And she knows that she shouldn't listen", time: 54 },
  { text: "She should be with me by the water fountain", time: 58 },
  { text: "Too young... I was too young 🌻", time: 78 }
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  // Buscamos la línea que corresponde al segundo actual
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el mensaje inicial rápido (después de 10 segundos)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Llamamos a ocultar el título mucho antes para que no tape el karaoke
setTimeout(ocultarTitulo, 10000);
