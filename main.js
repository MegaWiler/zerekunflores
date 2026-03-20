var audio = document.getElementById("player");
var lyricsText = document.getElementById("lyrics");

var lyricsData = [
  { text: "She told me that she loved me by the water fountain", time: 14.36 },
  { text: "She told me that she loved me and she didn't love him", time: 17.62 },
  { text: "And that was really lovely 'cause it was innocent", time: 21.35 },
  { text: "But now she's got a cup with something else in it", time: 24.86 },
  { text: "Too young... I was too young 🌻", time: 78.60 }
];

audio.addEventListener('timeupdate', () => {
    var time = audio.currentTime;
    var currentLine = lyricsData.find((line, index) => {
        let nextLine = lyricsData[index + 1];
        return time >= line.time && (!nextLine || time < nextLine.time);
    });

    if (currentLine) {
        lyricsText.innerHTML = currentLine.text;
        lyricsText.style.opacity = 1;
    } else {
        lyricsText.style.opacity = 0;
    }
});
