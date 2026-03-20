window.onload = () => {
    document.body.classList.remove("container");
};

var audio = document.getElementById("player");
var lyrics = document.querySelector("#lyrics");

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
  { text: "Too young... I was too young", time: 78.60 },
  { text: "And if she ever goes back to the water fountain", time: 100.62 },
  { text: "The handle will be broken and the rust set in", time: 103.87 },
  { text: "But my hand, it will be open and I'll try to fix it", time: 107.37 },
  { text: "My heart, it will be open and I'll try to give it", time: 111.12 },
  { text: "Now I'm grabbing her hips, and pulling her in", time: 114.34 },
  { text: "Kissing her lips, and whispering in her ear", time: 117.86 },
  { text: "And I know that it's only a wish", time: 121.62 },
  { text: "And that we're not standing by the water fountain", time: 125.35 },
  { text: "She couldn't be at home in the night time", time: 143.85 },
  { text: "Because it made her feel alone", time: 146.11 },
  { text: "But at that time she was too young", time: 148.61 },
  { text: "I was too young", time: 153.12 },
  { text: "I should've built a home with a fountain for us", time: 157.35 },
  { text: "The moment that she told me that she was in love", time: 161.10 },
  { text: "Too young... I was too young", time: 164.35 },
  { text: "I should've built a home with a fountain for us", time: 186.86 },
  { text: "The moment that she told me that she was in love", time: 189.62 },
  { text: "Too young... I was too young 🌻", time: 193.16 }
];

function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find((line, index) => {
    let nextLine = lyricsData[index + 1];
    return time >= line.time && (!nextLine || time < nextLine.time);
  });

  if (currentLine) {
    if (lyrics.innerHTML !== currentLine.text) {
        lyrics.innerHTML = currentLine.text;
        lyrics.style.opacity = 1;
    }
  } else {
    lyrics.innerHTML = "";
    lyrics.style.opacity = 0;
  }
}

setInterval(updateLyrics, 100);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => { titulo.style.display = "none"; }, 3000);
  }
}
setTimeout(ocultarTitulo, 216000);
