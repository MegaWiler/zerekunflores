const audio = document.getElementById("player");
const lyricsContainer = document.getElementById("lyrics");

const lyricsData = [
    { time: 14, words: "She told me that she loved me by the water fountain" },
    { time: 18, words: "She told me that she loved me and she didn't love him" },
    { time: 21, words: "And that was really lovely 'cause it was innocent" },
    { time: 25, words: "But now she's got a cup with something else in it" },
    { time: 29, words: "It's getting kind of blurry at a quarter past ten" },
    { time: 32, words: "And he was in a hurry to be touching her skin" },
    { time: 35, words: "She's feeling kind of dirty when she's dancing with him" },
    { time: 39, words: "Forgetting what she told me by the water fountain" },
    { time: 43, words: "Now he's grabbing her hips and pulling her in" },
    { time: 46, words: "Kissing her lips and whispering in her ear" },
    { time: 50, words: "And she knows that she shouldn't listen" },
    { time: 54, words: "And that she should be with me by the water fountain" },
    { time: 59, words: "She couldn't be at home in the night time because" },
    { time: 63, words: "It made her feel alone but at that time she was too young" },
    { time: 68, words: "I was too young" },
    { time: 98, words: "And if she ever goes back to the water fountain" },
    { time: 102, words: "The handle will be broken and the rust set in" },
    { time: 106, words: "But my hand it will be open and I'll try to fix it" },
    { time: 110, words: "Only one who's standing by the water fountain" },
    { time: 114, words: "Now I'm grabbing her hips and pulling her in" },
    { time: 117, words: "Kissing her lips and whispering in her ear" },
    { time: 121, words: "And I know that it's only a wish" },
    { time: 125, words: "And that we're not standing by the water fountain" },
    { time: 132, words: "Too young, too young, too young..." },
    { time: 138, words: "🌻 Para ti, Eve 🌻" }
];

// Click para iniciar todo
document.addEventListener("click", () => {
    audio.play();
}, { once: true });

function updateKaraoke() {
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

setInterval(updateKaraoke, 50);
