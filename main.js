const audio = document.getElementById("player");
const lyricsContainer = document.getElementById("lyrics");
const startBtn = document.getElementById("start-btn");
const overlay = document.getElementById("overlay");
const garden = document.getElementById("flower-garden");
const title = document.getElementById("main-title");

// LETRA COMPLETA SINCRONIZADA
const lyricsData = [
    { time: 14, words: "She told me that she loved me by the water fountain" },
    { time: 18, words: "She told me that she loved me and she didn't love him" },
    { time: 22, words: "And that was really lovely 'cause it was innocent" },
    { time: 25, words: "But now she's got a cup with something else in it" },
    { time: 29, words: "It's getting kind of blurry at a quarter past ten" },
    { time: 32, words: "And he was in a hurry to be touching her skin" },
    { time: 36, words: "She's feeling kind of dirty when she's dancing with him" },
    { time: 40, words: "Forgetting what she told me by the water fountain" },
    { time: 44, words: "Now he's grabbing her hips and pulling her in" },
    { time: 47, words: "Kissing her lips and whispering in her ear" },
    { time: 51, words: "And she knows that she shouldn't listen" },
    { time: 54, words: "And that she should be with me by the water fountain" },
    { time: 60, words: "She couldn't be at home in the night time because" },
    { time: 64, words: "It made her feel alone but at that time she was too young" },
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
    { time: 140, words: "🌻 Para siempre 🌻" }
];

// Evento del botón azul
startBtn.addEventListener("click", () => {
    overlay.style.display = "none"; // Quita el mapache y el botón
    garden.style.display = "block"; // Muestra las flores
    title.style.display = "block";  // Muestra la frase
    audio.play();                   // Inicia la música
});

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
        const ratio = (time - currentLine.time) / 3.8; 
        const wordIndex = Math.floor(ratio * spans.length);

        spans.forEach((span, i) => {
            if (i <= wordIndex) span.classList.add("highlight");
        });
    } else {
        lyricsContainer.innerHTML = "";
    }
}

setInterval(updateKaraoke, 50);
