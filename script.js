const gameBoardFunc = (player1, player2) => {
  const allDivs = document.querySelectorAll(".gameboard-grid div");
  const playerStatus = document.querySelector(".playerstatus");
  const playAgain = document.querySelector(".reset");
  // const player1Btn = document.querySelector(".player1 button");
  // const player2Btn = document.querySelectorAll(".player2 button");
  // const info = document.querySelector(".info");
  // const restartButton = document.querySelector(".restart");
  let getPlayer1 = player1;
  let getPlayer2 = player2;
  let _activePlayer = "player1";
  // restartButton.addEventListener("click",()=>{
  //   // info.classList.remove("fadeOut");
  //   // gameBoard.classList.add("fadeOut");
  //   // player1Btn.classList.remove("active");
  //   // player2Btn.forEach(currentButton =>{
  //   //   currentButton.classList.remove("active");
  //   // })
  //   getPlayer1 = "Human";
  //   getPlayer2 = "AI";
  //   _restart()
  //   _render()
  // })
  const processChoices = () => {
    _render();
  }
  const _switchPlayer = () => {
    //Use tenary operator to switch values of activeplayer
    _activePlayer = (_activePlayer === "player1") ? _activePlayer = "player2" : _activePlayer = "player1";


  }
  const _render = () => {
    if (getPlayer2 == 'Human' && getPlayer1 == 'Human') {
      allDivs.forEach(divItem => {
        divItem.onclick= () => {
          if(divItem.textContent == '') {
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
              }
          }
        });
      }else if (getPlayer2 == "AI" && getPlayer1 == "Human"){
        allDivs.forEach(divItem => {
          divItem.onclick = () => {
            if(divItem.textContent == '') {
              if (_activePlayer === "player1"){
                //Add X
                divItem.textContent = "X";
                divItem.classList.add("player1-css");
                playerStatus.textContent = "Player 2 Turn (O):";
                //Call switchplayer function to change current player
                _switchPlayer();
                //Call CheckWinner function
                _checkWinner();
                let result = _checkWinner();
                //Declare winner
                _declareWinner(result);
                //Call _makeAIMoves function to make an AI move if result is neither X or O
                if(result != "X" && result != "O" && result != "Draw"){
                  _makeAiMoves()
                }
                
              }
            }
          }
        })
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
      playerStatus.textContent = 'Player 1 Turn (X):';
      _activePlayer = "player1";
      
    });
  }
  function restart(){
    _enableGrid();
    for (let i=0; i<allDivs.length; i++){
      allDivs[i].textContent = '';
      allDivs[i].classList.remove("player1-css");
      allDivs[i].classList.remove("player2-css");
    }
    playAgain.classList.remove("fadeIn");
    playAgain.classList.add("fadeOut");
    playerStatus.textContent = 'Player 1 Turn (X):';
    _activePlayer = "player1";
    _render()
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
      _disableGrid();
      _clear();
    }else if (result == "O"){
      playerStatus.textContent = `Player 2 has won (${result})`;
      playAgain.classList.remove("fadeOut");
      playAgain.classList.add("fadeIn");
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

  const _makeAiMoves = () => {
    let randomValue;
    let validatedNumber = false;
    let value = _findBestAiMove();
    console.log(value);
    while(validatedNumber == false){
      //Generate random values ranging from 0-8
      randomNumber = Math.floor(Math.random()*9);
      if(allDivs[randomNumber].textContent != ''){
        continue
      }else{
        randomValue = randomNumber;
        validatedNumber = true;

      }
    }
    //Find best Ai move
    if(value != "None"){
      //Add O
      allDivs[value].textContent = "O";
      allDivs[value].classList.add("player2-css");
      playerStatus.textContent = "Player 1 Turn (X):"
      //Call switchplayer function to change current player
      _switchPlayer();
      //Call checkWinner function
      let result = _checkWinner();
      //Declare winner
      _declareWinner(result);
    }else if (value == "None"){
      //Add O
      allDivs[randomValue].textContent = "O";
      allDivs[randomValue].classList.add("player2-css");
      playerStatus.textContent = "Player 1 Turn (X):"
      //Call switchplayer function to change current player
      _switchPlayer();
      //Call checkWinner function
      let result = _checkWinner();
      //Declare winner
      _declareWinner(result);
    }

  }
    
  const _findBestAiMove = () => {
    let currentState = [];
    let findEmptyIndex = [];
    let enemyMark = "X";
    let bestAiMove;
    allDivs.forEach(divItem => {
      currentState.push(divItem.textContent)
    })
    for (let i=0; i<currentState.length; i++){
      if(currentState[i] == ''){
        findEmptyIndex.push(i);
      }
      }

    for(let i=0; i<findEmptyIndex.length; i++){
      let currentIndex = findEmptyIndex[i];
      let testState = currentState;
      testState.splice(currentIndex,1,enemyMark);
      let result = _testBoard(testState,enemyMark);
      if(result == 10 ){
        bestAiMove = findEmptyIndex[i];
        return bestAiMove;
        break;   
      }
      testState.splice(currentIndex,1,'');
    }
    if (bestAiMove == null){
      return "None";
    }
    }

  const _testBoard = (board, enemyMark) => {
    // let cardBoard = [0,1,2,
    //                  3,4,5,
    //                  6,7,8]
    //Check for Horizontal wins
    if(board[0] == board[1] && board[0] == board[2] && board[0] == enemyMark){
      return 10;
    }else if (board[3] == board[4] && board[3] == board[5] && board[3] == enemyMark){
      return 10;
    }else if (board[6] == board[7] && board[6] == board[8] && board[6] == enemyMark){
      return 10;
    }else if(board[0] == board[3] && board[0] == board[6] && board[0] == enemyMark){
      //Check for vertical wins
      return 10;
    }else if(board[1] == board[4] && board[1] == board[7] && board[1] == enemyMark){
      return 10;
    }else if (board[2] == board[5] && board[2] == board[8] && board[2] == enemyMark){
      return 10;
    }else if(board[0] == board[4] && board[0] == board[8] && board[0] == enemyMark){
      //Check for Diagonal wins
      return 10;
    }else if(board[2] == board[4] && board[2] == board[6] && board[2] == enemyMark){
      return 10;
    }else{
      return "None";
    }

    }
    
    return {processChoices,restart};

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
  const restartButton = document.querySelector(".restart");
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
      // gameBoard.classList.add("fadeIn");
      let players = gameBoardFunc(player1Choice, player2Choice);
      players.restart()
      players.processChoices();
    }else {
      warningMessage.textContent = `*Please select a choice for Player 1 and Player 2...`
    }
  })
  restartButton.addEventListener("click",()=>{
    info.classList.remove("fadeOut");
    gameBoard.classList.add("fadeOut");
    player1Btn.classList.remove("active");
    player2Btn.forEach(currentButton =>{
      currentButton.classList.remove("active");
    })

  })

})();


