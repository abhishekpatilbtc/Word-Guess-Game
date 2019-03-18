
var civilizations = [ "aztec" , "berber", "mayans",
 "incas", "franks", "goths", "indian", "slavs", "chinese", "japanese",
 "briton", "burmese", "byzantines", "celts", "ethiopian", "hun", "italian", "khmer",
 "korean", "magyar", "malay", "malian", "mongol", "persian", "portuguese", "saracen",
 "spanish", "teutons", "turks", "vietnamese", "vikings"];

 var k=0;

var correctGuesses = 0;
var letters = civilizations.length;
var numGuessRemain = 12;
var increment = 1
var answer = [];
var wrongGuess=[];
var joinedWrongGuess=[];

//mapping to html
var currentWord = document.getElementById("guess");
var lettersUsed = document.getElementById("letterused")
var numGuessRemainWord = document.getElementById("numguess")

//Select random civilization
var civilization = civilizations[Math.floor(Math.random() * civilizations.length)];
//create blank array   

//for civilization length generate random word
for (var i = 0; i < civilization.length; i++) 
{
    answer[i]= "_";
    currentWord.textContent = answer.join(" ");
}

    document.onkeyup = function(event) {
    var guess = event.key;
    do{
    for (var j = 0; j < civilization.length; j++) {
        if (guess === civilization[j]) {
            answer[j] = guess;
            currentWord.textContent = answer.join(" ");
            found = true;
        } 
    }
        if (guess !== civilization[j] && answer.includes(guess)===false) {
            wrongGuess.push(guess);
            numGuessRemain --;
            //
            joinedWrongGuess = wrongGuess.join(" ");
            lettersUsed.textContent=joinedWrongGuess; 
            numGuessRemainWord.textContent=numGuessRemain;
        }
        if (numGuessRemain === 0) {
        alert("Game Over")
        }
        
    }
    while (numGuessRemain < 0);

    }