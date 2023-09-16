//Query all of the divs, and add event listeners to them
//Then if its is clicked  change the textContent to either x or o depending on active player, 
// but before  also check for if the textcontent is equal to empty string or not, and prevent it it isnt
//To modify the active player, call switch player after each move so in this case player 1 will move first, then call
//Switch player function to change current active player.
const gameBoardFunc = (player1, player2) => {
  let getPlayer1 = player1;
  let getPlayer2 = player2;
  let _activePlayer;
  const processChoices = () => {
    if (getPlayer2 === 'Human') {
      const allDivs = document.querySelectorAll(".gameboard-grid div")
      allDivs.forEach(divItem, () => {
        divItem.addEventListener("click", () => {

        });
      });

      
    }

  }
  const _switchPlayer = () => {

  }
  const _render = () => {
  }

  const _checkWinner = () => {

  }

  return {
    processChoices
  }
  
};
const getTheChoices = (() => {
  let player1Choice;
  let player2Choice;
  const player1Btn = document.querySelector(".player1 button");
  const player2Btn = document.querySelectorAll(".player2 button");
  const submitBtn = document.querySelector(".submit-button");
  const info = document.querySelector(".info");
  const gameBoard = document.querySelector(".gameboard");
  const warningMessage = document.querySelector(".warning");

  player1Btn.addEventListener("click", () => {
    player1Btn.classList.add("active");
    player1Choice = player1Btn.textContent;
  });


  player2Btn.forEach(currentPlayer2button => {
    currentPlayer2button.addEventListener("click", () => {
      player2Btn.forEach(removeBtnClass => removeBtnClass.classList.remove("active"));
      currentPlayer2button.classList.add("active");
      player2Choice = currentPlayer2button.textContent;
      
    });
  });

  submitBtn.addEventListener("click", () => {
    if (player1Choice != null && player2Choice != null) {
      info.classList.add("fadeOut");
      gameBoard.classList.remove("fadeOut");
      gameBoard.classList.add("fadeIn");
      gameBoardFunc(player1Choice, player2Choice);
    }else {
      warningMessage.textContent = `*Please select a choice for Player 1 and Player 2...`
    }
  })

})();


