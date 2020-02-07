/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        
        this.missed = 0;
        this.phrases = [ new Phrase("what does the fox say"),
        //new Phrase("happy birthday"),
        //new Phrase("good morning"),
        new Phrase("aaaaa"),
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
            this.activePhrase = phrase;
            overlay.style.display = "none";
        }
        
        // removeLife() {
          // phrase.checkLetter();
            /* if (count == 0) {
                var tries = document.getElementsByTagName('ol')[0];
                    tries.firstElementChild.remove();
                console.log('miss');
                if (tries.firstElementChild == null) {
                    console.log("you lose");
                }
            }
           } */
        
       handleInteraction() {
        this.activePhrase.checkLetter("a");
        this.activePhrase.showMatchedLetter("a");
        // this.activePhrase.showMatchedLetter();
        // game.removeLife();
       } 
       checkForWin() {
           // console.log(document.getElementsByClassName("hide").length);
           if (document.getElementsByClassName("hide").length == 0) {
               return true;
           } else {
               return false;
           }
       }
    }




     /*  
        checkForWin();
        gameOver(); */