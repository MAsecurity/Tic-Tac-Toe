//First process and extract the choice of player 1 and player 2 using click listeners and so on and pass them into the factory function gameBoardFunc
//Create a global variable inside of gameBoard named activePlayer, this will be used to switch between current player and enemy player
//Create a Factory function which is  public which processes those values , and then calls the private Factory function playRound
//playRound, makes this private, which should query all div elements and add event listeners, depending on the active player x or o will be drawn


const gameBoardFunc = (player1, player2) => {
  let _activePlayer;
  const processChoices = () => {


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
  const player1Btn = document.querySelectorAll(".player1 button");
  const player2Btn = document.querySelectorAll(".player2 button");
  const submitBtn = document.querySelector(".submit-button");
  const info = document.querySelector(".info");
  const gameBoard = document.querySelector(".gameboard");
  const warningMessage = document.querySelector(".warning");

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
    if (player1Choice != null && player2Choice != null) {
      info.classList.add("fadeOut");
      gameBoard.classList.remove("fadeOut");
      gameBoard.classList.add("fadeIn");
      gameBoardFunc(player1Choice, player2Choice);
    }else {
      warningMessage.textContent = `*Please select a choice for player 1 and player 2...`
    }
  })

})();


