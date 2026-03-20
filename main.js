const audio = document.getElementById("player");
const lyricsContainer = document.querySelector("#lyrics");

const lyricsData = [
    { text: "She told me that she loved me by the water fountain", time: 14 },
    { text: "She told me that she loved me and she didn't love him", time: 17 },
    { text: "And that was really lovely 'cause it was innocent", time: 21 },
    { text: "But now she's got a cup with something else in it", time: 25 },
    { text: "It's getting kind of blurry at a quarter past ten", time: 28 },
    { text: "Too young... I was too young 🌻", time: 78 }
];

document.addEventListener("click", () => {
    audio.play().catch(err => console.log("Error al reproducir:", err));
}, { once: true });

function updateLyrics() {
    const currentTime = audio.currentTime;
    let currentLine = lyricsData.find((line, index) => {
        let nextLine = lyricsData[index + 1];
        return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
    });

    if (currentLine) {
        lyricsContainer.innerHTML = currentLine.text;
        lyricsContainer.style.opacity = 1;
    } else {
        lyricsContainer.style.opacity = 0;
    }
}

setInterval(updateLyrics, 100);
