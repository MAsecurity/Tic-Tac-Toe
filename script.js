const gameBoardFunc = (player1, player2) => {
  const allDivs = document.querySelectorAll(".gameboard-grid div");
  const playerStatus = document.querySelector(".playerstatus");
  const playAgain = document.querySelector(".reset");
  let getPlayer1 = player1;
  let getPlayer2 = player2;
  let _activePlayer = "player1";
  const processChoices = (player1,player2) => {
    _render();
  }
  const _switchPlayer = () => {
    //Use tenary operator to switch values of activeplayer
    _activePlayer = (_activePlayer === "player1") ? _activePlayer = "player2" : _activePlayer = "player1";


  }
  const _render = () => {
      allDivs.forEach(divItem => {
        divItem.addEventListener("click", () => {
          if(divItem.textContent == '') {
            if (getPlayer2 == 'Human' && getPlayer1 == 'Human') {
              if (_activePlayer === "player1") {
                //Add X
                divItem.textContent = "X";
                divItem.classList.add("player1-css");
                playerStatus.textContent = "Player 2 Turn (O):";
                //Call switchplayer function to change current player
                _switchPlayer()
                //Call CheckWinner function
                _checkWinner();
                let result = _checkWinner();
                //Declare winner
                _declareWinner(result);

              }else if (_activePlayer === "player2"){
                //Add O
                divItem.textContent = "O";
                divItem.classList.add("player2-css");
                playerStatus.textContent = "Player 1 Turn (X):"
                //Call switchplayer function to change current player
                _switchPlayer();
                //Call checkWinner function
                let result = _checkWinner();
                //Declare winner
                _declareWinner(result)

              }
              

              }else if (getPlayer2 == 'AI' && getPlayer1 == 'Human'){
                return;
              }

          }else{
            return;
          }

        });
      });
    }

  const _checkWinner = () => {
    // let cardBoard = [0,1,2,
    //                  3,4,5,
    //                  6,7,8]

    //Check for Horizontal wins and its not equal to empty ''
    if (allDivs[0].textContent == allDivs[1].textContent && allDivs[0].textContent == allDivs[2].textContent && allDivs[0].textContent != ''){
      return (allDivs[0].textContent == "X") ? "X" : "O";

    }else if(allDivs[3].textContent == allDivs[4].textContent &&  allDivs[3].textContent == allDivs[5].textContent && allDivs[3].textContent != '') {
        return (allDivs[3].textContent == "X") ? "X" : "O";


    }else if (allDivs[6].textContent == allDivs[7].textContent && allDivs[6].textContent == allDivs[8].textContent && allDivs[6].textContent != ''){
        return (allDivs[6].textContent == "X") ? "X" : "O";
 

    }
    //Check for vertical wins
    if (allDivs[0].textContent == allDivs[3].textContent && allDivs[0].textContent == allDivs[6].textContent && allDivs[0].textContent != '') {
      return (allDivs[0].textContent == "X") ? "X" : "O";

      
    }else if(allDivs[1].textContent == allDivs[4].textContent && allDivs[1].textContent == allDivs[7].textContent && allDivs[1].textContent != '') {
      return (allDivs[1].textContent == "X") ? "X" : "O";
   

    }else if (allDivs[2].textContent == allDivs[5].textContent && allDivs[2].textContent == allDivs[8].textContent && allDivs[2].textContent != '') {
      return (allDivs[2].textContent == "X") ? "X" : "O";

    }
    
    //Check for Diagonal wins 
    if (allDivs[0].textContent == allDivs[4].textContent && allDivs[0].textContent == allDivs[8].textContent && allDivs[0].textContent != ''){
      return (allDivs[0].textContent == "X") ? "X" : "O";

    }else if(allDivs[2].textContent == allDivs[4].textContent && allDivs[2].textContent == allDivs[6].textContent && allDivs[2].textContent != '') {
      return (allDivs[2].textContent == "X") ? "X" : "O";

    }
    
    if (allDivs[0].textContent != '' && allDivs[1].textContent != '' && allDivs[2].textContent != '' && allDivs[3].textContent != '' && allDivs[4].textContent != '' && allDivs[5].textContent != '' && allDivs[6].textContent != '' && allDivs[7].textContent != '' && allDivs[8].textContent != '') {
      //Game is a draw and no empty divs left
      return "Draw";


    }
  

  }

  const _clear = () => {
    //Should reset all values when the reset button is clicked
    playAgain.addEventListener("click", () => {
      _enableGrid();
      for (let i=0; i<allDivs.length; i++){
        allDivs[i].textContent = '';
        allDivs[i].classList.remove("player1-css");
        allDivs[i].classList.remove("player2-css");
      }
      playAgain.classList.remove("fadeIn");
      playAgain.classList.add("fadeOut");
      playerStatus.textContent = '';
      _activePlayer = "player1";
      
    });
  }

  const _declareWinner = (result) => {
    if (result == "Draw"){
      playerStatus.textContent = "Draw";
      playAgain.classList.remove("fadeOut");
      playAgain.classList.add("fadeIn");
      _disableGrid();
      _clear();
    }else if (result == "X"){
      playerStatus.textContent = `Player 1 has won (${result})`;
      playAgain.classList.remove("fadeOut");
      playAgain.classList.add("fadeIn");
      allDivs.disabled = "true";
      _disableGrid();
      _clear();
    }else if (result == "O"){
      playerStatus.textContent = `Player 2 has won (${result})`;
      playAgain.classList.remove("fadeOut");
      playAgain.classList.add("fadeIn");
      allDivs.disabled = "true";
      _disableGrid();
      _clear();
    }

  }

  const _disableGrid = () => {
    for (let i=0; i < allDivs.length; i++){
      allDivs[i].classList.add("disable");
    }

  }

  const _enableGrid = () => {
    for (let i=0; i < allDivs.length; i++){
      allDivs[i].classList.remove("disable");
    }

  }

  return {processChoices};
  
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
      let players = gameBoardFunc(player1Choice, player2Choice);
      players.processChoices();
    }else {
      warningMessage.textContent = `*Please select a choice for Player 1 and Player 2...`
    }
  })

})();


