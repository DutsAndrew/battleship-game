export {
  startGame
}

function startGame() {
  const playerOneBoard = document.querySelector('#player-one-board');
  const computerBoard = document.querySelector('#computer-board');
  
  const createPlayerOneBoard = createGameBoardCells(playerOneBoard);
  const createComputerBoard = createGameBoardCells(computerBoard);
  return {
    createPlayerOneBoard,
    createComputerBoard
  }
}

function createGameBoardCells(playerBoard) {
  const boardSize = 10;
  let newCount = counter();
  for(let row = 0; row < boardSize; row++) {
    const boardRow = document.createElement('div');
    boardRow.classList.add('game-board-row');

    for (let cell = 0; cell < boardSize; cell++) {
      const boardCell = document.createElement('div');
      boardCell.classList.add('game-board-cell');
      boardCell.setAttribute('id', `Cell: ${newCount()}`);
      boardRow.appendChild(boardCell);
    }
  playerBoard.appendChild(boardRow);
  }
}

function counter() {
  let counter = 0;

  function increaseCounter() {
    return counter += 1;
  }

  return increaseCounter;
}