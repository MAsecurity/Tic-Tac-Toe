//First process and extract the choice of player 1 and player 2 using click listeners and so on and pass them into the module gameBoard
//Create a global variable inside of gameBoard named activePlayer, this will be used to switch between current player and enemy player
//Create a Factory function which is  public which processes those values , and then calls the private Factory function playRound
//playRound, makes this private, which should query all div elements and add event listeners, depending on the active player x or o will be drawn


const gameBoard = (player1, player2) => {
  let activePlayer;
  console.log(player1, player2);
};
// https://dev.to/nicm42/multiple-buttons-looking-like-theyre-staying-pressed-one-at-a-time-4bbb this shows how to click only one button
let player1Choice;
let player2Choice;
const player1Btn = document.querySelectorAll(".player1 button");
const player2Btn = document.querySelectorAll(".player2 button");
const submitBtn = document.querySelector(".submit-button");
player1Btn.forEach(currentPlayer1button => {
  currentPlayer1button.addEventListener("click", () => {
    player1Btn.forEach(removeBtnClass => removeBtnClass.classList.remove("active"));
    currentPlayer1button.classList.add("active");
    player1Choice = currentPlayer1button.textContent;   
  });
});


player2Btn.forEach(currentPlayer2button => {
  currentPlayer2button.addEventListener("click", () => {
    player2Btn.forEach(removeBtnClass => removeBtnClass.classList.remove("active"));
    currentPlayer2button.classList.add("active");
    player2Choice = currentPlayer2button.textContent;
    
  });
});

submitBtn.addEventListener("click", () => {
  if (player1Choice != '' && player2Choice != '') {
    gameBoard(player1Choice, player2Choice);
  }
})



