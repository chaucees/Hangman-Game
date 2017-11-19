// Define Variables

var wins = "";
var currentScore = 0;
var randomWords = ["fishtown", "pretzel", "libertybell", "cheesesteak"];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var currentState = [ ];
var wrongGuess= [];

// This creates the underscores when the page loads
for (var i = 0; i < randomWord.length; i++) {
    currentState.push(" _ ");    
}

// USER GUESS 
document.onkeyup = function(event) {
    
    var userGuess = event.key;

    // DISPLAYS USER GUESS
    document.getElementById("user-guess").innerHTML = userGuess; 

    for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
            currentState[i] = userGuess;
        } else {
            wrongGuess.push(userGuess);
        }
    }
    // DISPLAYS CURRENT WORD
    document.getElementById("current-word").innerHTML = currentState.join(" ");

    // DISPLAYS WRONG GUESS
    document.getElementById("wrong-guess").innerHTML = userGuess; 
    
    }

// END FUNCTION

// If they guess the whole word, reset the current state to blank underscores with next word.

// WIN + LOOSE LOGIC HERE INSIDE THIS

// Loop the game until the user guesses all four words

// Update the score +1 each time they finish completing a word

var currentScore = 0;

for (var i = 0; i < randomWords.legnth; i++) {
    if (userGuess === randomWords[i]) {
        currentScore[i++];
    }
}

function update() {
    currentScore.text = "SCORE: " + currentScore;

// Displays Current Score

    document.getElementById("wins").innerHTML = currentScore; }

// NUMBERS OF GUESSES REMAINING 

// RESET BUTTON