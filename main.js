const audio = document.getElementById("player");
const lyricsContainer = document.getElementById("lyrics");

const lyricsData = [
    // Estrofa 1
    { time: 14.2, words: "She told me that she loved me by the water fountain" },
    { time: 17.5, words: "She told me that she loved me and she didn't love him" },
    { time: 21.0, words: "And that was really lovely cause it was innocent" },
    { time: 24.5, words: "But now she's got a cup with something else in it" },
    // Pre-Coro
    { time: 28.0, words: "It's getting kind of blurry at a quarter past ten" },
    { time: 31.5, words: "And he was in a hurry to be touching her skin" },
    { time: 35.0, words: "She's feeling kind of dirty when she's dancing with him" },
    { time: 38.5, words: "Forgetting what she told me by the water fountain" },
    // Coro
    { time: 42.5, words: "Now he's grabbing her hips and pulling her in" },
    { time: 46.0, words: "Kissing her lips and whispering in her ear" },
    { time: 49.5, words: "And she knows that she shouldn't listen" },
    { time: 53.5, words: "And that she should be with me by the water fountain" },
    // Estrofa 2
    { time: 98.0, words: "And if she ever goes back to the water fountain" },
    { time: 101.5, words: "The handle will be broken and the rust set in" },
    { time: 105.0, words: "But my hand it will be open and I'll try to fix it" },
    { time: 109.0, words: "Only one who's standing by the water fountain" },
    // Coro Final
    { time: 113.0, words: "Now I'm grabbing her hips and pulling her in" },
    { time: 116.5, words: "Kissing her lips and whispering in her ear" },
    { time: 120.0, words: "And I know that it's only a wish" },
    { time: 124.0, words: "And that we're not standing by the water fountain" },
    // Final
    { time: 132.0, words: "Too young, too young, too young..." }
];

document.addEventListener("click", () => { audio.play(); }, { once: true });

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
        const ratio = (time - currentLine.time) / 3; // Estimación de velocidad
        const wordIndex = Math.floor(ratio * spans.length);

        spans.forEach((span, i) => {
            if (i <= wordIndex) span.classList.add("highlight");
        });
    } else {
        lyricsContainer.innerHTML = "";
    }
}

setInterval(updateLyrics, 50);
