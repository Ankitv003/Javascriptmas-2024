const emojis = ['🎄', '🎁', '🎅', '☃️']; // Your set of emojis


/**
 *🎄 Requirements:
 * - This is a classic "Find the Pair" game with a christmas theme.
 * - The player should be able to reveal cards by clicking on them.
 * - When the player reveals one card, it should stay revealed until a second card is revealed.
 * - When the player reveals two cards:
 *   - If they are the same, they should remain revealed for the rest of the game.
 *   - If they are different, they should be flipped back to hidden.
 * - The cards should be shuffled at the start of each game.
 */

/**
 * 🎅 Stretch Goals:
 * - Add a point system where points are awarded for each correctly revealed pair 
 *   and deducted for each incorrect pair (you decide the exact points for each action).
 * - Implement a high-score system using the browser's local storage.
 * - Add a "Restart Game" button that appears when the game ends so the user can start over.
 */
  
//   shufle the cards

// function shuffleCards() {
//     const cards = [...emojis, ...emojis];
//     for (let i = cards.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [cards[i], cards[j]] = [cards[j], cards[i]];
//     }
//     return cards;
// }


// function initializeGame(){
//     const gameBoard = document.getElementById("game-board")
//     const cards =shuffleCards()
    
//     cards.forEach((index, emoji)=>{
//         const card=document.createElement("div")
//         card.classList.add("card")
//         card.dataset.index=index
//         card.dataset.emoji=emoji
//         card.textContent=""
//         card.addEventListener("click",()=> revealCard(card))
//         gameBoard.appendChild(card)
//     })
// }

// const revealedCards=[]
// const matchedPairs=0

// function revealCard(card){
//     if(card.classList.contains("revealed")||revealedCards.length===2){
//         return
//     }
    
//     card.classList.add("revealed", "flip-in")
//     card.textContent= card.dataset.emoji
    
//     revealedCards.push(card)
//     if (revealedCards.length === 2) {
//         checkForMatch();
//     }
// }

// function checkForMatch() {
//     const [card1, card2] = revealedCards;

//     if (card1.dataset.emoji === card2.dataset.emoji) {
//         matchedPairs++;
//         revealedCards.forEach(card => card.classList.add('match'));
//         revealedCards = [];

//         if (matchedPairs === emojis.length) {
//             setTimeout(() => alert('Congratulations! You found all pairs!'), 500);
//         }
//     } else {
//         setTimeout(() => {
//             revealedCards.forEach(card => {
//                 card.classList.add('flip-out');
//                 setTimeout(() => {
//                     card.classList.remove('revealed', 'flip-in', 'flip-out');
//                     card.textContent = '';
//                 }, 500);
//             });
//             revealedCards = [];
//         }, 1000);
//     }
// }


// function resetGame(){
//     const gameBoard = document.getElementById("game-board")
//     gameBoard.innerHTML=""
//     matchedPairs=0
//     revealedCards=[]
//     initializeGame()
// }

// window.onload=initializeGame()

let matchedPairs = 0;
let revealedCards = [];

function shuffleCards() {
    const cards = [...emojis, ...emojis];
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

function initializeGame() {
    const gameBoard = document.getElementById("game-board");
    const cards = shuffleCards();
    
    cards.forEach((emoji, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.dataset.emoji = emoji;
        card.textContent = "";
        card.addEventListener("click", () => revealCard(card));
        gameBoard.appendChild(card);
    });
}

function revealCard(card) {
    if (card.classList.contains("revealed") || revealedCards.length === 2) {
        return;
    }

    card.classList.add("revealed", "flip-in");
    card.textContent = card.dataset.emoji;

    revealedCards.push(card);
    if (revealedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = revealedCards;

    if (card1.dataset.emoji === card2.dataset.emoji) {
        matchedPairs++;
        revealedCards.forEach(card => card.classList.add('match'));
        revealedCards = [];

    if (matchedPairs === emojis.length) {
        setTimeout(() => {
            alert('Congratulations! You found all pairs!');
            resetGame();  
        }, 500);
    }

    } else {
        setTimeout(() => {
            revealedCards.forEach(card => {
                card.classList.add('flip-out');
                setTimeout(() => {
                    card.classList.remove('revealed', 'flip-in', 'flip-out');
                    card.textContent = '';
                }, 500);
            });
            revealedCards = [];
        }, 1000);
    }
}

function resetGame() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    matchedPairs = 0;
    revealedCards = [];
    initializeGame();
}

window.onload=initializeGame()