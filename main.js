// Quitar clase al cargar
window.onload = () => {
    document.body.classList.remove("container");
};

// Referencias a elementos
var audio = document.getElementById("player");
var lyrics = document.querySelector("#lyrics");

// Letra sincronizada de Alec Benjamin - Water Fountain
var lyricsData = [
  { text: "She told me that she loved me by the water fountain", time: 14.36 },
  { text: "She told me that she loved me and she didn't love him", time: 17.62 },
  { text: "And that was really lovely 'cause it was innocent", time: 21.35 },
  { text: "But now she's got a cup with something else in it", time: 24.86 },
  { text: "It's getting kind of blurry at a quarter past ten", time: 28.60 },
  { text: "And he was in a hurry to be touching her skin", time: 32.36 },
  { text: "She's feeling kind of dirty when she's dancing with him", time: 36.13 },
  { text: "Forgetting what she told me by the water fountain", time: 39.35 },
  { text: "Now he's grabbing her hips, and pulling her in", time: 42.85 },
  { text: "Kissing her lips, and whispering in her ear", time: 46.36 },
  { text: "And she knows that she shouldn't listen", time: 49.89 },
  { text: "And that she should be with me by the water fountain", time: 53.87 },
  { text: "She couldn't be at home in the night time because", time: 57.37 },
  { text: "It made her feel alone, but at that time she was too young", time: 60.85 },
  { text: "I was too young", time: 66.86 },
  { text: "I should've built a home with a fountain for us", time: 71.36 },
  { text: "The moment that she told me that she was in love", time: 75.11 },
  { text: "Too young... I was too young", time: 78.60 }
];

// Función de actualización para modo Karaoke
function updateLyrics() {
  var time = audio.currentTime; // Usar tiempo exacto sin redondear
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
    lyrics.innerHTML = "";
  }
}

// Intervalo de 100ms para una sincronización suave
setInterval(updateLyrics, 100);

// Función para ocultar el título después de un tiempo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}
setTimeout(ocultarTitulo, 216000); // 216 segundos
