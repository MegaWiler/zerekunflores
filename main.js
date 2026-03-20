var audio = document.getElementById("player");
var lyrics = document.querySelector("#lyrics");

// Letras de Alec Benjamin - Water Fountain
var lyricsData = [
  { text: "She told me that she loved me", time: 14 },
  { text: "By the water fountain", time: 16 },
  { text: "She told me that she loved me", time: 18 },
  { text: "And she didn't love him", time: 20 },
  { text: "And that was really lovely", time: 22 },
  { text: "Cause it was innocent", time: 24 },
  { text: "But now she's got a cup", time: 26 },
  { text: "With something else in it", time: 28 },
  { text: "Too young... I was too young 🌻", time: 78 }
];

// FUNCIÓN PARA ACTIVAR AL HACER CLIC
document.body.addEventListener('click', function() {
    audio.play().catch(function(error) {
        console.log("Esperando interacción para sonar...");
    });
}, { once: true }); // Solo se ejecuta la primera vez que hace clic

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
  }
}

// Actualizamos más rápido (cada 500ms) para que sea preciso
setInterval(updateLyrics, 500);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}
setTimeout(ocultarTitulo, 10000);
