/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        
        this.missed = 0;
        this.phrases = [ new Phrase("what does the fox say"),
        new Phrase("happy birthday"),
        new Phrase("good morning"),
        new Phrase("sleep well"),
        new Phrase("how are you")];
        this.activePhrase = "null";
    }
        getRandomPhrase() {
            var randomNumber = Math.floor(Math.random() * 5);
            console.log(randomNumber);
            var phraseReturn = this.phrases[randomNumber];
            return phraseReturn;
        }
        startGame() {
            var overlay = document.getElementById('overlay');
            const randomPhrase = game.getRandomPhrase();
            const phrase = new Phrase(randomPhrase.phrase);
            phrase.addPhraseToDisplay();
            phrase.checkLetter();
            this.activePhrase = phrase;
            overlay.style.display = "none";
        }
    }



     /*   activePhrase

     startGame()
        getRandomPhrase()
        handleInteraction();
        removeLife();
        checkForWin();
        gameOver(); */
        