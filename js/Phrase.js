/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }
     /*****************
      ADD PHRASE TO DISPLAY
      **************/
     addPhraseToDisplay() {
        var newPhrase = this.phrase;
        var stringPhrase = JSON.stringify(newPhrase);
        console.log(stringPhrase);
        // for each letter in phrase- add li
       for (var i = 0; i < stringPhrase.length; i++) {
            // get each letter in the phrase
            let currentLetter = stringPhrase.charAt(i);
            // if it's not a space
            if (currentLetter != '"') {
                // create li with letter as innerHTML
                let newLi = document.createElement('li');
                newLi.innerHTML = currentLetter;
                // add Li with space class if space
                if (currentLetter.indexOf(" ") == 0) {
                    newLi.classList.add("space");
                } else {
                    // if not a space, add  hidden letter
                    newLi.classList.add("hide");
                    newLi.classList.add("letter");
                    newLi.classList.add(currentLetter);
                }
                // add Li to UL
                document.getElementsByTagName('ul')['0'].appendChild(newLi);
            }
        }
    }
     /*****************
      CHECK LETTER
      **************/
    checkLetter(letter) {
        // true if phrase contains letter
        if (game.activePhrase.phrase.includes(letter)) {
            return true
       } else {
            return false
       }
         }
       /*****************
      SHOW MATCHES
      *******************/
    showMatchedLetter(letter) {
        if (this.checkLetter(letter) == true) {
            // if phrase does contain letter
            var qwerty = document.getElementById('qwerty')
            var liText = document.getElementsByClassName('letter');

        for (var i = 0; i < liText.length; i++) {
           // check each letter to see if match 
           if (letter == liText[i].innerHTML) {
            // for each match update class name
            liText[i].classList.remove('hide');
            liText[i].classList.add('show');
            }
        }
        }
    }
};
        
