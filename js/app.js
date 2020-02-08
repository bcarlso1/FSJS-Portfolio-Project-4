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

document.addEventListener("keyup", (e) => {
    var buttonPress = e.key;
    console.log(buttonPress);
    var button;
    var keyCheck = document.getElementsByClassName('key');
    for (var i = 0; i < keyCheck.length; i++) {
        if (keyCheck[i].innerHTML == buttonPress) {
            button = keyCheck[i];
        } 
    }
   if (button.tagName == "BUTTON" && button.className != "key wrong" && button.className != "key chosen") {  
        game.handleInteraction(button);
    }
});

