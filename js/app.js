/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



 const game = new Game();
 var reset = document.getElementById('btn__reset');
 reset.addEventListener("click", (e) => {
   game.startGame();
   game.handleInteraction();
})

 // testing
