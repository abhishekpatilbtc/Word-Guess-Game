
var civilizations = ["aztec", "berber", "mayans",
    "incas", "franks", "goths", "indian", "slavs", "chinese", "japanese",
    "briton", "burmese", "byzantines", "celts", "ethiopian", "hun", "italian", "khmer",
    "korean", "magyar", "malay", "malian", "mongol", "persian", "portuguese", "saracen",
    "spanish", "teutons", "turks", "vietnamese", "vikings"];


var correctGuesses = 0;
var letters = civilizations.length;
var numGuessRemain = 12;
var increment = 1
var answer = [];
var wrongGuess = [];
var joinedWrongGuess = [];
var win = 0;

//mapping to html
var currentWord = document.getElementById("guess");
var lettersUsed = document.getElementById("letterused")
var numGuessRemainWord = document.getElementById("numguess")
var winincreased = document.getElementById("wins")
var civilization;

//Select random civilization
function randomCiv() {
    civilization = civilizations[Math.floor(Math.random() * civilizations.length)];
    //create blank array   
    //
    //for civilization length generate random word
    for (var i = 0; i < civilization.length; i++) {
        answer[i] = "_";

    }
    currentWord.textContent = answer.join(" ");
    numGuessRemainWord.textContent = numGuessRemain;
}

function myreset() {
    currentWord.innerHTML = "";
    lettersUsed.innerHTML = "";
    numGuessRemain = 12
    numGuessRemainWord.textContent = numGuessRemain;
    answer=[];
    joinedWrongGuess = [];

    
}

document.onkeyup = function (event) {
    console.log(numGuessRemainWord);
    var guess = event.key;
    //do {
    var found = false;
    for (var j = 0; j < civilization.length; j++) {
        if (guess === civilization[j]) {
            answer[j] = guess;
            //currentWord.textContent = answer.join(" ");
        }
    }
    currentWord.textContent = answer.join(" ");
    //guess !== civilization[j] &&
    if (answer.includes(guess) === false) {
        wrongGuess.push(guess);
        numGuessRemain--;
        //
        joinedWrongGuess = wrongGuess.join(" ");
        lettersUsed.textContent = joinedWrongGuess;
        numGuessRemainWord.textContent = numGuessRemain;
    }
    if (answer.includes("_") === false) {
        win++;
        winincreased.textContent = win;
        myreset();
        randomCiv();

    }
    if (numGuessRemain === 0) {
        alert("Game Over");
        location.reload();
    }
    // }
    //while (numGuessRemain < 0);

}

winincreased.textContent = win;

randomCiv();