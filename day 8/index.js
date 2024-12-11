// The keyboard has been rendered for you
import { renderKeyboard } from '/keyboard'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')

/*
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter. 
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.
    
*** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/

// Set the word to guess
const word = "gift"
// 6 guesses for the 6 parts of the snowman
let guesses = 6
let guessArr = []
let guessedChars = [];


function renderGuess() {
    const guessHtml = guessArr.map((char) => {
        return `<div class="guess-char">${char}</div>`
    })
    guessContainer.innerHTML = guessHtml.join('')
}


function start() {
    for (let i = 0; i < word.length; i++) {
        guessArr.push('-')
    }
    renderGuess()
}

start()




function checkGameStatus(){
    if(guesses===0){
        if(guessArr.includes("-")){
            guessContainer.innerHTML=`<div class ="message">You Lose!</div>`
            document.querySelector(".puddle").style.visibility="visible"
        }
    }
    else if(!guessArr.includes("-")){
            guessContainer.innerHTML=`<div class ="message">You WIn!</div>`
            document.querySelector(".sunglasses").style.visibility="visible"
            snowmanIsAlive();
    }
}

function checkGuess(e) {
const letter=e.target.id;
if(guessedChars.includes(letter)){
    return
}
guessedChars.push(letter)

if(word.includes(letter)){
    for (let i=0; i<word.length;i++){
        if(word[i]===letter){
            guessArr[i]=letter
        }
    }
    renderGuess()
}
else{
    guesses--;
    deleteSnowmanPart()
}
    const letterElement= document.getElementById(letter)
    letterElement.disabled="true"
    letterElement.style.cursor="not-allowed"
    checkGameStatus()
}


function deleteSnowmanPart() {
    if (guesses === 5) {
        snowmanParts[5].style.visibility = 'hidden'; 
    } else if (guesses === 4) {
        snowmanParts[4].style.visibility = 'hidden'; 
    } else if (guesses === 3) {
        snowmanParts[3].style.visibility = 'hidden'; 
    } else if (guesses === 2) {
        snowmanParts[2].style.visibility = 'hidden'; 
    } else if (guesses === 1) {
        snowmanParts[1].style.visibility = 'hidden'; 
    } else if (guesses === 0) {
        snowmanParts[0].style.visibility = 'hidden'; 
    }
}
function snowmanIsAlive(){
    for (let part of snowmanParts){
        part.style.visibility="visible"
    }
}

renderKeyboard()
