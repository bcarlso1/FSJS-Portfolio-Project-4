/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// add code comments!!
class Game {
    constructor() {
        
        this.missed = 0;
        this.phrases = [ new Phrase("what does the fox say"),
        new Phrase("happy birthday"),
        new Phrase("good morning"),
        new Phrase("hey there"),
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
            document.getElementsByTagName('ul')[0].innerHTML =  " ";
            document.getElementById('overlay').setAttribute("class", "");
            var keys = document.getElementsByClassName("key");
            for (var i = 0; i < keys.length; i++) {
                keys[i].setAttribute("class", "key");
            }
            var triesReset = document.getElementsByClassName("lost");
            for (var i = triesReset.length; i > 0; i--) {
                triesReset[(i-1)].setAttribute("class", "tries");
                console.log(i);
            }
            
           var triesImageReset = document.getElementsByClassName("tries");
             for (var i = triesImageReset.length; i > 0; i--) {
                triesImageReset[(i-1)].firstElementChild.setAttribute("src", "images/liveHeart.png");
             }

            var overlay = document.getElementById('overlay');
            const randomPhrase = game.getRandomPhrase();
            const phrase = new Phrase(randomPhrase.phrase);
            phrase.addPhraseToDisplay();
            this.activePhrase = phrase;
            overlay.style.display = "none";
        }
        
        removeLife() {
                var tries = document.getElementsByClassName('tries');
                var lengthTries = tries.length;
                tries[(lengthTries-1)].classList.add("lost");
                tries[(lengthTries-1)].classList.remove("tries");
                var lost = document.getElementsByClassName("lost");
                for (var i = 0; i < lost.length; i++) {
                    lost[i].firstElementChild.removeAttribute("src");
                    lost[i].firstElementChild.setAttribute("src", "images/lostHeart.png");
                }
            }
        checkForWin() {
                // console.log(document.getElementsByClassName("hide").length);
                if (document.getElementsByClassName("hide").length == 0) {
                    return true;
                } else {
                    return false;
                }
            }   
        gameOver(gameWon) {
              if (gameWon == true) {
               var overlay = document.getElementById('overlay')
               overlay.classList.remove('start');
               document.getElementsByTagName('h1')[0].innerHTML = "YOU WON!"
               overlay.classList.add('win');
               overlay.style.display = "";
            } else if (gameWon == false) {
                var overlay = document.getElementById('overlay')
                overlay.classList.remove('start');
                document.getElementsByTagName('h1')[0].innerHTML = "YOU LOST!"
                overlay.classList.add('lose');
                overlay.style.display = "";
            }
        }
       
       handleInteraction(button) {
        this.activePhrase.checkLetter(button.innerHTML);
        console.log(button.innerHTML);
            if (this.activePhrase.checkLetter(button.innerHTML) == false) {
                button.classList.add('wrong');
                game.removeLife();
                console.log('WRONG');
                if (document.getElementsByClassName('tries').length == 0) {
                    var gameWon = false;
                    this.gameOver(gameWon);
                }
            } else {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.innerHTML);
                this.checkForWin();
                    if (this.checkForWin() == true) {
                        var gameWon = true;
                        this.gameOver(gameWon);
                    }
            }
        
    

       } 
       
    }
