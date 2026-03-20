var audio = document.getElementById("player");
var lyrics = document.querySelector("#lyrics");

// Array con la letra completa y tiempos aproximados para "Water Fountain"
var lyricsData = [
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
  { text: "Too young, too young, too young", time: 128 },
  { text: "She couldn't be at home in the night time", time: 142 },
  { text: "Because it made her feel alone", time: 146 },
  { text: "But at that time she was too young", time: 149 },
  { text: "I was too young", time: 153 },
  { text: "I should've built a home with a fountain for us", time: 158 },
  { text: "The moment that she told me that she was in love", time: 162 },
  { text: "Too young... I was too young", time: 166 }
];

// Función para activar todo al hacer CLIC en la pantalla
// Añade esto al final de tu main.js
document.addEventListener('click', function() {
    var audio = document.getElementById("player");
    audio.play().catch(function(error) {
        console.log("El navegador bloqueó el audio: ", error);
    });
}, { once: true }); // Solo se ejecuta la primera vez que hace clic

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  // Buscamos la línea actual (se queda visible 4 segundos o hasta la siguiente)
  var currentLine = lyricsData.find(
    (line, index) => {
        let nextLine = lyricsData[index + 1];
        return time >= line.time && (!nextLine || time < nextLine.time);
    }
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
  }
}

// Intervalo más rápido para mayor precisión
setInterval(updateLyrics, 300);

// Ocultar el título de las flores amarillas para que no estorbe
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => { titulo.style.display = "none"; }, 3000);
  }
}
setTimeout(ocultarTitulo, 10000);
