const audio = document.getElementById("player");
const lyricsContainer = document.getElementById("lyrics");
const startBtn = document.getElementById("start-btn");
const overlay = document.getElementById("overlay");
const garden = document.getElementById("flower-garden");
const title = document.getElementById("main-title");

const lyricsData = [
    { time: 14, words: "She told me that she loved me by the water fountain" },
    { time: 18, words: "She told me that she loved me and she didn't love him" },
    { time: 22, words: "And that was really lovely cause it was innocent" },
    { time: 25, words: "But now she's got a cup with something else in it" },
    { time: 29, words: "It's getting kind of blurry at a quarter past ten" },
    { time: 32, words: "And he was in a hurry to be touching her skin" },
    { time: 36, words: "She's feeling kind of dirty when she's dancing with him" },
    { time: 40, words: "Forgetting what she told me by the water fountain" },
    { time: 44, words: "Now he's grabbing her hips and pulling her in" },
    { time: 47, words: "Kissing her lips and whispering in her ear" },
    { time: 51, words: "And she knows that she shouldn't listen" },
    { time: 54, words: "And that she should be with me by the water fountain" },
    { time: 98, words: "And if she ever goes back to the water fountain" },
    { time: 102, words: "The handle will be broken and the rust set in" },
    { time: 106, words: "But my hand it will be open and I'll try to fix it" },
    { time: 114, words: "Now I'm grabbing her hips and pulling her in" },
    { time: 117, words: "Kissing her lips and whispering in her ear" },
    { time: 121, words: "And I know that it's only a wish" },
    { time: 125, words: "And that we're not standing by the water fountain" },
    { time: 132, words: "Too young too young too young..." },
    { time: 140, words: "🌻 Para siempre, Eve 🌻" }
];

startBtn.addEventListener("click", () => {
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
        garden.style.display = "block";
        title.style.display = "block";
        audio.play();
    }, 500);
});

function updateLyrics() {
    const time = audio.currentTime;
    let currentLine = lyricsData.find((line, index) => {
        const nextLine = lyricsData[index + 1];
        return time >= line.time && (!nextLine || time < nextLine.time);
    });

    if (currentLine) {
        if (lyricsContainer.dataset.text !== currentLine.words) {
            lyricsContainer.innerHTML = "";
            currentLine.words.split(" ").forEach(word => {
                const span = document.createElement("span");
                span.innerText = word + " ";
                lyricsContainer.appendChild(span);
            });
            lyricsContainer.dataset.text = currentLine.words;
        }

        const spans = lyricsContainer.querySelectorAll("span");
        const ratio = (time - currentLine.time) / 3.5;
        const wordIndex = Math.floor(ratio * spans.length);

        spans.forEach((span, i) => {
            if (i <= wordIndex) span.classList.add("highlight");
        });
    } else {
        lyricsContainer.innerHTML = "";
    }
}

setInterval(updateLyrics, 50);
