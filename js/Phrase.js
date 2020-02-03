/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     addPhraseToDisplay() {
        var newPhrase = this.phrase;
        var stringPhrase = JSON.stringify(newPhrase);
        console.log(stringPhrase);
        // for each letter in phrase- add li
       for (var i = 0; i < stringPhrase.length; i++) {
            let currentLetter = stringPhrase.charAt(i);
            if (currentLetter != '"') {
                // console.log(currentLetter);
                let newLi = document.createElement('li');
                newLi.innerHTML = currentLetter;
                if (currentLetter.indexOf(" ") == 0) {
                    newLi.classList.add("space");
                } else {
                    newLi.classList.add("hide");
                    newLi.classList.add("letter");
                    newLi.classList.add(currentLetter);
                }
                document.getElementsByTagName('ul')['0'].appendChild(newLi);
            }
        }
    }
    checkLetter() {
        var qwerty = document.getElementById('qwerty');
        var liText = document.getElementsByClassName('letter');
       qwerty.addEventListener("click", (e) => {
        for (var i = 0; i < liText.length; i++) {
           if (event.target.innerHTML == liText[i].innerHTML) {
             liText[i].classList.remove('hidden');
             liText[i].classList.add('show');
         }
    };
    })
}
 }
        