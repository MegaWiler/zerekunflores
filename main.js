const audio = document.getElementById("player");
const lyricsContainer = document.querySelector("#lyrics");
const rgbBall = document.querySelector("#rgb-ball");

let currentLineIndex = -1;
let currentWordIndex = -1;

// 1. LETRA COMPLETA SINCRONIZADA (Water Fountain - Alec Benjamin)
const lyricsData = [
    // Primera Estrofa
    { text: "She told me that she loved me by the water fountain", time: 14.2, words: ["She", "told", "me", "that", "she", "loved", "me", "by", "the", "water", "fountain"], wordTimes: [14.2, 14.5, 14.8, 15.1, 15.3, 15.6, 16.0, 16.3, 16.5, 16.8, 17.2] },
    { text: "She told me that she loved me and she didn't love him", time: 17.5, words: ["She", "told", "me", "that", "she", "loved", "me", "and", "she", "didn't", "love", "him"], wordTimes: [17.5, 17.8, 18.1, 18.4, 18.6, 18.9, 19.3, 19.6, 19.8, 20.1, 20.5, 20.8] },
    { text: "And that was really lovely 'cause it was innocent", time: 21.0, words: ["And", "that", "was", "really", "lovely", "'cause", "it", "was", "innocent"], wordTimes: [21.0, 21.3, 21.6, 21.9, 22.3, 22.8, 23.2, 23.5, 24.0] },
    { text: "But now she's got a cup with something else in it", time: 24.5, words: ["But", "now", "she's", "got", "a", "cup", "with", "something", "else", "in", "it"], wordTimes: [24.5, 24.8, 25.1, 25.4, 25.6, 25.9, 26.2, 26.5, 26.8, 27.2, 27.5] },
    { text: "It's getting kind of blurry at a quarter past ten", time: 28.0, words: ["It's", "getting", "kind", "of", "blurry", "at", "a", "quarter", "past", "ten"], wordTimes: [28.0, 28.3, 28.6, 28.9, 29.3, 29.8, 30.1, 30.4, 30.8, 31.2] },
    { text: "And he was in a hurry to be touching her skin", time: 31.5, words: ["And", "he", "was", "in", "a", "hurry", "to", "be", "touching", "her", "skin"], wordTimes: [31.5, 31.8, 32.1, 32.4, 32.6, 32.9, 33.3, 33.6, 33.9, 34.3, 34.7] },
    { text: "She's feeling kind of dirty when she's dancing with him", time: 35.0, words: ["She's", "feeling", "kind", "of", "dirty", "when", "she's", "dancing", "with", "him"], wordTimes: [35.0, 35.3, 35.6, 35.9, 36.3, 36.8, 37.1, 37.4, 37.8, 38.2] },
    { text: "Forgetting what she told me by the water fountain", time: 38.5, words: ["Forgetting", "what", "she", "told", "me", "by", "the", "water", "fountain"], wordTimes: [38.5, 38.9, 39.2, 39.5, 39.9, 40.3, 40.6, 40.9, 41.5] },
    
    // Coro 1
    { text: "Now he's grabbing her hips, and pulling her in", time: 42.5, words: ["Now", "he's", "grabbing", "her", "hips,", "and", "pulling", "her", "in"], wordTimes: [42.5, 42.8, 43.1, 43.4, 43.8, 44.2, 44.5, 44.8, 45.2] },
    { text: "Kissing her lips, and whispering in her ear", time: 46.0, words: ["Kissing", "her", "lips,", "and", "whispering", "in", "her", "ear"], wordTimes: [46.0, 46.3, 46.7, 47.1, 47.5, 48.0, 48.4, 48.9] },
    { text: "And she knows that she shouldn't listen", time: 49.5, words: ["And", "she", "knows", "that", "she", "shouldn't", "listen"], wordTimes: [49.5, 49.8, 50.2, 50.6, 51.0, 51.5, 52.0] },
    { text: "And that she should be with me by the water fountain", time: 53.5, words: ["And", "that", "she", "should", "be", "with", "me", "by", "the", "water", "fountain"], wordTimes: [53.5, 53.8, 54.1, 54.4, 54.8, 55.2, 55.6, 56.0, 56.4, 56.8, 57.5] },
    
    // Post-Coro
    { text: "She couldn't be at home in the night time because", time: 58.0, words: ["She", "couldn't", "be", "at", "home", "in", "the", "night", "time", "because"], wordTimes: [58.0, 58.3, 58.6, 58.9, 59.2, 59.5, 59.8, 60.2, 60.6, 61.1] },
    { text: "It made her feel alone, but at that time she was too young", time: 61.5, words: ["It", "made", "her", "feel", "alone,", "but", "at", "that", "time", "she", "was", "too", "young"], wordTimes: [61.5, 61.8, 62.1, 62.4, 62.8, 63.2, 63.5, 63.8, 64.2, 64.6, 65.0, 65.5, 66.0] },
    { text: "I was too young", time: 67.0, words: ["I", "was", "too", "young"], wordTimes: [67.0, 67.4, 67.8, 68.5] },
    { text: "I should've built a home with a fountain for us", time: 70.5, words: ["I", "should've", "built", "a", "home", "with", "a", "fountain", "for", "us"], wordTimes: [70.5, 70.8, 71.2, 71.5, 71.9, 72.3, 72.6, 73.0, 73.4, 73.9] },
    { text: "The moment that she told me that she was in love", time: 74.5, words: ["The", "moment", "that", "she", "told", "me", "that", "she", "was", "in", "love"], wordTimes: [74.5, 74.8, 75.1, 75.4, 75.8, 76.2, 76.5, 76.9, 77.3, 77.7, 78.2] },
    { text: "Too young... I was too young 🌻", time: 79.0, words: ["Too", "young...", "I", "was", "too", "young", "🌻"], wordTimes: [79.0, 79.5, 80.0, 80.4, 80.8, 81.3, 82.0] },
    
    // Segunda Estrofa
    { text: "And if she ever goes back to the water fountain", time: 98.0, words: ["And", "if", "she", "ever", "goes", "back", "to", "the", "water", "fountain"], wordTimes: [98.0, 98.3, 98.6, 98.9, 99.2, 99.5, 99.8, 100.1, 100.5, 101.0] },
    { text: "The handle will be broken and the rust set in", time: 101.5, words: ["The", "handle", "will", "be", "broken", "and", "the", "rust", "set", "in"], wordTimes: [101.5, 101.8, 102.1, 102.4, 102.7, 103.1, 103.4, 103.7, 104.0, 104.5] },
    { text: "But my hand, it will be open and I'll try to fix it", time: 105.0, words: ["But", "my", "hand,", "it", "will", "be", "open", "and", "I'll", "try", "to", "fix", "it"], wordTimes: [105.0, 105.3, 105.6, 105.9, 106.2, 106.5, 106.8, 107.1, 107.4, 107.7, 108.0, 108.3, 108.8] },
    { text: "My heart, it will be open and I'll try to give it", time: 109.0, words: ["My", "heart,", "it", "will", "be", "open", "and", "I'll", "try", "to", "give", "it"], wordTimes: [109.0, 109.3, 109.6, 109.9, 110.2, 110.5, 110.8, 111.1, 111.4, 111.7, 112.0, 112.5] },
    
    // Coro Final
    { text: "Now I'm grabbing her hips, and pulling her in", time: 113.0, words: ["Now", "I'm", "grabbing", "her", "hips,", "and", "pulling", "her", "in"], wordTimes: [113.0, 113.3, 113.6, 113.9, 114.3, 114.7, 115.0, 115.3, 115.7] },
    { text: "Kissing her lips, and whispering in her ear", time: 116.5, words: ["Kissing", "her", "lips,", "and", "whispering", "in", "her", "ear"], wordTimes: [116.5, 116.8, 117.2, 117.6, 118.0, 118.5, 118.9, 119.4] },
    { text: "And I know that it's only a wish", time: 120.0, words: ["And", "I", "know", "that", "it's", "only", "a", "wish"], wordTimes: [120.0, 120.3, 120.7, 121.1, 121.5, 122.0, 122.4, 123.0] },
    { text: "And that we're not standing by the water fountain", time: 124.0, words: ["And", "that", "we're", "not", "standing", "by", "the", "water", "fountain"], wordTimes: [124.0, 124.3, 124.6, 124.9, 125.3, 125.7, 126.0, 126.4, 127.0] },
    { text: "Para ti, con amor infinito 💛", time: 130.0, words: ["Para", "ti,", "con", "amor", "infinito", "💛"], wordTimes: [130.0, 130.5, 131.0, 131.5, 132.0, 133.0] }
];

// 2. ACTIVAR CON CLIC
document.addEventListener("click", () => {
    audio.play().then(() => {
        if (rgbBall) rgbBall.style.opacity = "1";
        if (lyricsContainer) {
            lyricsContainer.style.opacity = "1";
            lyricsContainer.innerHTML = "Presiona para comenzar...";
        }
    }).catch(err => console.log("Error de audio:", err));
}, { once: true });

// 3. ACTUALIZAR KARAOKE PALABRA POR PALABRA
function updateKaraoke() {
    const currentTime = audio.currentTime;
    
    let newLineIndex = -1;
    for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime >= lyricsData[i].time) {
            newLineIndex = i;
        }
    }

    // Cambio de línea
    if (newLineIndex !== currentLineIndex) {
        currentLineIndex = newLineIndex;
        currentWordIndex = -1;

        if (currentLineIndex !== -1) {
            lyricsContainer.innerHTML = '';
            const phrase = lyricsData[currentLineIndex];
            phrase.words.forEach(wordText => {
                const wordSpan = document.createElement("span");
                wordSpan.classList.add("word");
                wordSpan.innerText = wordText;
                lyricsContainer.appendChild(wordSpan);
            });
        } else {
            lyricsContainer.innerHTML = '';
        }
    }

    // Salto de la bola sobre las palabras
    if (currentLineIndex !== -1) {
        const phrase = lyricsData[currentLineIndex];
        const words = lyricsContainer.querySelectorAll(".word");
        
        let newWordIndex = -1;
        for (let i = 0; i < phrase.wordTimes.length; i++) {
            if (currentTime >= phrase.wordTimes[i]) {
                newWordIndex = i;
            }
        }

        if (newWordIndex !== currentWordIndex && words[newWordIndex]) {
            currentWordIndex = newWordIndex;
            const targetWord = words[currentWordIndex];

            if (rgbBall) {
                const wordRect = targetWord.getBoundingClientRect();
                const containerRect = lyricsContainer.getBoundingClientRect();
                
                // Centrar bola horizontalmente sobre la palabra
                const targetLeft = wordRect.left - containerRect.left + (wordRect.width / 2) - (rgbBall.offsetWidth / 2);
                
                rgbBall.style.left = `${targetLeft}px`;
                
                // Animación de salto
                rgbBall.classList.remove('ball-jump');
                void rgbBall.offsetWidth; 
                rgbBall.classList.add('ball-jump');
            }
        }
    }
}

setInterval(updateKaraoke, 30);
