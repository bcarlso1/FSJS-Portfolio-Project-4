/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



 const game = new Game();
 var reset = document.getElementById('btn__reset');
 reset.addEventListener("click", (e) => {
   game.startGame();
})

var qwerty = document.getElementById('qwerty');
qwerty.addEventListener("click", (e) => {
    var button = event.target;
    if (button.tagName == "BUTTON" && button.className != "key wrong" && button.className != "key chosen") {  
        game.handleInteraction(button);
    }
})
