//Query all of the divs, and add event listeners to them
//Then if its is clicked  change the textContent to either x or o depending on active player, 
// but before  also check for if the textcontent is equal to empty string or not, and prevent it it isnt
//To modify the active player, call switch player after each move so in this case player 1 will move first, then call
//Switch player function to change current active player.
//Now you must check for wins constantly by calling the checkWinner funciton after each move
const gameBoardFunc = (player1, player2) => {
  const allDivs = document.querySelectorAll(".gameboard-grid div");
  const playerStatus = document.querySelector(".playerstatus");
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
    if (getPlayer2 == 'Human' && getPlayer1 == 'Human') {
      allDivs.forEach(divItem => {
        divItem.addEventListener("click", () => {
          if(divItem.textContent == '') {
            if (_activePlayer === "player1") {
              playerStatus.textContent = "Player 2 Turn:"
              //Add X
              divItem.textContent = "X";
              divItem.classList.add("player1-css")
              //Call switchplayer function to change current player
              _switchPlayer()
              //Call CheckWinner function
              _checkWinner();
              let result = _checkWinner();
              if (result == "Draw"){
                console.log("Draw");
              }else if (result == "X"){
                console.log("Player 1 (X) won");
              }else if (result == "O"){
                console.log("Player 2 (O) won");
              }

            }else if (_activePlayer === "player2"){
              //Add O
              playerStatus.textContent = "Player 1 Turn:";
              divItem.textContent = "O";
              divItem.classList.add("player2-css");
              //Call switchplayer function to change current player
              _switchPlayer();
              //Call checkWinner function
              let result = _checkWinner();
              if (result == "Draw"){
                console.log("Draw");
              }else if (result == "X"){
                console.log("Player 1 (X) won");
              }else if (result == "O"){
                console.log("Player 2 (O) won");
              }

            }

          }else{
            return;
          }

        });
      });
    }else if (getPlayer2 == 'AI'){
      return;
      
    }

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
      let makeAMove = gameBoardFunc(player1Choice, player2Choice);
      makeAMove.processChoices();
    }else {
      warningMessage.textContent = `*Please select a choice for Player 1 and Player 2...`
    }
  })

})();


