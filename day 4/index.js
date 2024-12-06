// /*
// You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

// For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

// In data.js you have an array of Christmas movies with emoji and text for aria labels.

// Your task is to build an app that meets these criteria:

// - The app should present the player with a set of emoji selected at random from the array in data.js. 

// - The player will input their guess.

// - If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

// - If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

// - If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

// - When all films in the array have been used, the player should see a message saying "That's all folks!".N

// - Each film should only be used once. There should be no repetition. 


// Stretch Goals

// - Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

// - Improve the UX by disabling the form/button when the game is over and during the pause between questions.
// */


import { films } from '/data.js'

let remainingMovies = [...films];
let currentMovie = null;
let guessesRemaining = 3;

// Some useful elements
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById('guess-input');
const messageContainer = document.getElementsByClassName('message-container')[0];
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0];

// To get a random movie

const getRandomMovie = () => {
    if (remainingMovies.length === 0) {
        messageContainer.textContent = "That's all folks!";
        emojiCluesContainer.textContent = ""; 
        return null;
    }
    const randomIndex = Math.floor(Math.random() * remainingMovies.length); 
    const selectedMovie = remainingMovies.splice(randomIndex, 1)[0];
    return selectedMovie;
};

// Display the current movie

const displayCurrentMovie = () => {
    if (currentMovie) {
        emojiCluesContainer.textContent = currentMovie.emoji.join("");
    }
};

// Start the game
const startGame = () => {
    currentMovie = getRandomMovie();
    if (currentMovie) {
        guessesRemaining = 3;
        displayCurrentMovie();
        messageContainer.textContent = `You have ${guessesRemaining} guesses remaining.`;
    }
};

// Handling the guesses

guessForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userGuess = guessInput.value.trim();
    guessInput.value = "";
    if (!currentMovie) return;

    if (userGuess.toLowerCase() === currentMovie.title.toLowerCase()) {
        messageContainer.textContent = "Correct!";
        setTimeout(() => {
            startGame(); 
        }, 3000);
    } else {
        guessesRemaining -= 1;
        if (guessesRemaining > 0) {
            messageContainer.textContent = `Incorrect! You have ${guessesRemaining} guesses remaining.`;
        } else {
            messageContainer.textContent = `The film was ${currentMovie.title}!`;
            setTimeout(() => {
                startGame(); 
            }, 3000);
        }
    }
});

startGame();
