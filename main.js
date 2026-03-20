const audio = document.getElementById("player");
const lyricsContainer = document.getElementById("lyrics");
const rgbBall = document.getElementById("rgb-ball");

let currentLineIndex = -1;
let currentWordIndex = -1;

// BASE DE DATOS COMPLETA: Tiempos ajustados palabra por palabra
const lyricsData = [
    // --- ESTROFA 1 ---
    { text: "She told me that she loved me by the water fountain", time: 14.2, words: ["She", "told", "me", "that", "she", "loved", "me", "by", "the", "water", "fountain"], wordTimes: [14.2, 14.5, 14.8, 15.0, 15.2, 15.5, 15.8, 16.1, 16.3, 16.6, 17.0] },
    { text: "She told me that she loved me and she didn't love him", time: 17.5, words: ["She", "told", "me", "that", "she", "loved", "me", "and", "she", "didn't", "love", "him"], wordTimes: [17.5, 17.8, 18.0, 18.3, 18.5, 18.8, 19.1, 19.4, 19.6, 19.9, 20.2, 20.6] },
    { text: "And that was really lovely 'cause it was innocent", time: 21.2, words: ["And", "that", "was", "really", "lovely", "'cause", "it", "was", "innocent"], wordTimes: [21.2, 21.5, 21.8, 22.1, 22.5, 23.0, 23.3, 23.6, 24.1] },
    { text: "But now she's got a cup with something else in it", time: 24.8, words: ["But", "now", "she's", "got", "a", "cup", "with", "something", "else", "in", "it"], wordTimes: [24.8, 25.1, 25.4, 25.7, 25.9, 26.2, 26.5, 26.8, 27.2, 27.5, 27.8] },
    
    // --- PRE-CORO ---
    { text: "It's getting kind of blurry at a quarter past ten", time: 28.2, words: ["It's", "getting", "kind", "of", "blurry", "at", "a", "quarter", "past", "ten"], wordTimes: [28.2, 28.5, 28.8, 29.1, 29.5, 29.9, 30.2, 30.5, 30.9, 31.4] },
    { text: "And he was in a hurry to be touching her skin", time: 31.8, words: ["And", "he", "was", "in", "a", "hurry", "to", "be", "touching", "her", "skin"], wordTimes: [31.8, 32.1, 32.4, 32.7, 32.9, 33.2, 33.6, 33.9, 34.2, 34.6, 35.1] },
    { text: "She's feeling kind of dirty when she's dancing with him", time: 35.5, words: ["She's", "feeling", "kind", "of", "dirty", "when", "she's", "dancing", "with", "him"], wordTimes: [35.5, 35.8, 36.1, 36.4, 36.8, 37.2, 37.5, 37.8, 38.2, 38.7] },
    { text: "Forgetting what she told me by the water fountain", time: 39.0, words: ["Forgetting", "what", "she", "told", "me", "by", "the", "water", "fountain"], wordTimes: [39.0, 39.4, 39.7, 40.0, 40.4, 40.8, 41.1, 41.4, 42.0] },
    
    // --- CORO 1 ---
    { text: "Now he's grabbing her hips, and pulling her in", time: 42.8, words: ["Now", "he's", "grabbing", "her", "hips,", "and", "pulling", "her", "in"], wordTimes: [42.8, 43.1, 43.4, 43.7, 44.1, 44.5, 44.8, 45.1, 45.5] },
    { text: "Kissing her lips, and whispering in her ear", time: 46.2, words: ["Kissing", "her", "lips,", "and", "whispering", "in", "her", "ear"], wordTimes: [46.2, 46.5, 46.9, 47.3, 47.7, 48.2, 48.6, 49.1] },
    { text: "And she knows that she shouldn't listen", time: 49.8, words: ["And", "she", "knows", "that", "she", "shouldn't", "listen"], wordTimes: [49.8, 50.1, 50.5, 50.9, 51.3, 51.8, 52.3] },
    { text: "And that she should be with me by the water fountain", time: 53.8, words: ["And", "that", "she", "should", "be", "with", "me", "by", "the", "water", "fountain"], wordTimes: [53.8, 54.1, 54.4, 54.7, 55.1, 55.5, 55.9, 56.3, 56.7, 57.1, 57.8] },
    
    // --- PUENTE / POST-CORO ---
    { text: "She couldn't be at home in the night time because", time: 58.2, words: ["She", "couldn't", "be", "at", "home", "in", "the", "night", "time", "because"], wordTimes: [58.2, 58.5, 58.8, 59.1, 59.4, 59.7, 60.0, 60.4, 60.8, 61.3] },
    { text: "It made her feel alone, but at that time she was too young", time: 61.8, words: ["It", "made", "her", "feel", "alone,", "but", "at", "that", "time", "she", "was", "too", "young"], wordTimes: [61.8, 62.1, 62.4, 62.7, 63.1, 63.5, 63.8, 64.1, 64.5, 64.9, 65.3, 65.8, 66.3] },
    { text: "I was too young", time: 67.5, words: ["I", "was", "too", "young"], wordTimes: [67.5, 67.9, 68.3, 69.0] },
    
    // --- ESTROFA 2 ---
    { text: "And if she ever goes back to the water fountain", time: 98.2, words: ["And", "if", "she", "ever", "goes", "back", "to", "the", "water", "fountain"], wordTimes: [98.2, 98.5, 98.8, 99.1, 99.4, 99.7, 100.0, 100.3, 100.7, 101.2] },
    { text: "The handle will be broken and the rust set in", time: 101.8, words: ["The", "handle", "will", "be", "broken", "and", "the", "rust", "set", "in"], wordTimes: [101.8, 102.1, 102.4, 102.7, 103.0, 103.4, 103.7, 104.0, 104.3, 104.8] },
    { text: "But my hand, it will be open and I'll try to fix it", time: 105.2, words: ["But", "my", "hand,", "it", "will", "be", "open", "and", "I'll", "try", "to", "fix", "it"], wordTimes: [105.2, 105.5, 105.8, 106.1, 106.4, 106.7, 107.0, 107.3, 107.6, 107.9, 108.2, 108.5, 109.0] },
    
    // --- CORO FINAL ---
    { text: "Now I'm grabbing her hips, and pulling her in", time: 113.2, words: ["Now", "I'm", "grabbing", "her", "hips,", "and", "pulling", "her", "in"], wordTimes: [113.2, 113.5, 113.8, 114.1, 114.5, 114.9, 115.2, 115.5, 115.9] },
    { text: "Kissing her lips, and whispering in her ear", time: 116.8, words: ["Kissing", "her", "lips,", "and", "whispering", "in", "her", "ear"], wordTimes: [116.8, 117.1, 117.5, 117.9, 118.3, 118.8, 119.2, 119.7] },
    { text: "And I know that it's only a wish", time: 120.2, words: ["And", "I", "know", "that", "it's", "only", "a", "wish"], wordTimes: [120.2, 120.5, 120.9, 121.3, 121.7, 122.2, 122.6, 123.2] },
    { text: "And that we're not standing by the water fountain", time: 124.2, words: ["And", "that", "we're", "not", "standing", "by", "the", "water", "fountain"], wordTimes: [124.2, 124.5, 124.8, 125.1, 125.5, 125.9, 126.2, 126.6, 127.2] },
    
    // --- FINAL ---
    { text: "Too young, too young, too young 🌻", time: 128.5, words: ["Too", "young,", "too", "young,", "too", "young", "🌻"], wordTimes: [128.5, 129.2, 130.1, 130.8, 131.7, 132.5, 133.5] }
];

// LÓGICA DE ACTIVACIÓN
document.addEventListener("click", () => {
    audio.play();
}, { once: true });

function updateKaraoke() {
    const time = audio.currentTime;
    
    // 1. Detectar la frase
    let lineIdx = -1;
    for (let i = 0; i < lyricsData.length; i++) {
        if (time >= lyricsData[i].time) lineIdx = i;
    }

    if (lineIdx !== currentLineIndex) {
        currentLineIndex = lineIdx;
        if (currentLineIndex !== -1) {
            lyricsContainer.innerHTML = "";
            lyricsData[currentLineIndex].words.forEach(w => {
                const s = document.createElement("span");
                s.classList.add("word");
                s.innerText = w;
                lyricsContainer.appendChild(s);
            });
        }
    }

    // 2. Detectar la palabra y mover esfera
    if (currentLineIndex !== -1) {
        const line = lyricsData[currentLineIndex];
        const wordSpans = lyricsContainer.getElementsByClassName("word");
        let wordIdx = -1;

        for (let i = 0; i < line.wordTimes.length; i++) {
            if (time >= line.wordTimes[i]) wordIdx = i;
        }

        if (wordIdx !== currentWordIndex && wordSpans[wordIdx]) {
            currentWordIndex = wordIdx;
            const target = wordSpans[wordIdx];
            
            // Cálculo de posición
            const rect = target.getBoundingClientRect();
            const contRect = lyricsContainer.getBoundingClientRect();
            const leftPos = rect.left - contRect.left + (rect.width / 2) - (rgbBall.offsetWidth / 2);
            
            rgbBall.style.left = `${leftPos}px`;
            
            // Animación de salto
            rgbBall.classList.remove("ball-jump");
            void rgbBall.offsetWidth; 
            rgbBall.classList.add("ball-jump");
        }
    }
}

// Ejecución ultra-rápida (30ms) para que no haya lag
setInterval(updateKaraoke, 30);
