/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        
        this.missed = 0;
    // random phrases
        this.phrases = [ new Phrase("what does the fox say"),
        new Phrase("happy birthday"),
        new Phrase("good morning"),
        new Phrase("hey there"),
        new Phrase("how are you")];
        this.activePhrase = "null";
    }
        /***************
         * RANDOM PHRASE
         ****************/
        getRandomPhrase() {
            // get a number between 0-4
            var randomNumber = Math.floor(Math.random() * 5);
            console.log(randomNumber);
            // get the phrase from the array with that #
            var phraseReturn = this.phrases[randomNumber];
            return phraseReturn;
        }
         /***************
         Start GAME
         ****************/
        startGame() {
            game.missed = 0;
            // remove any prior loaded phrase
            document.getElementsByTagName('ul')[0].innerHTML =  " ";
           // remove any win/lose class from overlay that was just hidden
            document.getElementById('overlay').setAttribute("class", "");

            var keys = document.getElementsByClassName("key");
            
            // remove wrong/right classes from keys to reset fresh
            for (var i = 0; i < keys.length; i++) {
                keys[i].setAttribute("class", "key");
            }
            
            var triesReset = document.getElementsByClassName("lost");
            // reset every heart with lost class to tries
            // for loop "backwards" or else it will keep adjusting bc triesReset changes length
            for (var i = triesReset.length; i > 0; i--) {
                triesReset[(i-1)].setAttribute("class", "tries");
                console.log(i);
            }
            
           var triesImageReset = document.getElementsByClassName("tries");
           // same as above but for image for the heart
           for (var i = triesImageReset.length; i > 0; i--) {
                triesImageReset[(i-1)].firstElementChild.setAttribute("src", "images/liveHeart.png");
             }

            var overlay = document.getElementById('overlay');
            // get a randomPhrase
            const randomPhrase = game.getRandomPhrase();
            const phrase = new Phrase(randomPhrase.phrase);
            // add the Phrase to the screen
            phrase.addPhraseToDisplay();
            // set it as the activePhrase
            this.activePhrase = phrase;
            // hide the overlay
            overlay.style.display = "none";
        }
         /***************
        REMOVE LIFE
         ****************/
        removeLife() {
                var tries = document.getElementsByClassName('tries');
                var lengthTries = tries.length;
                tries[(lengthTries-1)].classList.add("lost");
                tries[(lengthTries-1)].classList.remove("tries");
                var lost = document.getElementsByClassName("lost");
                game.missed++;
                console.log(game.missed);
                for (var i = 0; i < lost.length; i++) {
                    lost[i].firstElementChild.removeAttribute("src");
                    lost[i].firstElementChild.setAttribute("src", "images/lostHeart.png");
                }
            }
          /***************
            CHECK FOR WIN
         ****************/   
        checkForWin() {
            // if no letters in hidden phrase are still hidden, checkForWin is true    
            if (document.getElementsByClassName("hide").length == 0) {
                    return true;
                } else {
                    return false;
                }
            }   
         /***************
         GAME OVER
         ****************/
        gameOver(gameWon) {
              // if you won
               if (gameWon == true) {
               var overlay = document.getElementById('overlay')
               // update overlay class and text and unhide
               overlay.classList.remove('start');
               document.getElementsByTagName('h1')[0].innerHTML = "YOU WON!"
               overlay.classList.add('win');
               overlay.style.display = "";
            } else if (gameWon == false) {
               // same updates as true but with different content
                var overlay = document.getElementById('overlay')
                overlay.classList.remove('start');
                document.getElementsByTagName('h1')[0].innerHTML = "YOU LOST!"
                overlay.classList.add('lose');
                overlay.style.display = "";
            }
        }
         /***************
        HANDLE INTERACTION
         ****************/
        // button represents what was clicked
        // handleInteraction takes all actions after the click
       handleInteraction(button) {
        // checkLetter to see if theres a match   
        this.activePhrase.checkLetter(button.innerHTML);
            // if no match- remove heart and mark button wrong
            if (this.activePhrase.checkLetter(button.innerHTML) == false) {
                button.classList.add('wrong');
                game.removeLife();
                // if no hearts left, game over/lost
                //alt code- if (document.getElementsByClassName('tries').length == 0)
                if (game.missed == 5) {
                    var gameWon = false;
                    this.gameOver(gameWon);
                }
            // if there is a match    
            } else {
                // update button to mark correct, show matches
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.innerHTML);
                this.checkForWin();
                    // if checkForWin is true, run gameOver with true
                    if (this.checkForWin() == true) {
                        var gameWon = true;
                        this.gameOver(gameWon);
                    }
            }
        
    

       } 
       
    }
