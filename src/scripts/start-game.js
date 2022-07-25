export {
  createGameBoards,
  startGameButton,
  resetGameButton,
}

function createGameBoards() {
  const gameBoard = document.querySelector('#game-board');
  const playerOneBoard = document.querySelector('#player-one-board');
  const computerBoard = document.querySelector('#computer-board');
  const createPlayerOneBoard = createGameBoardCells('player', playerOneBoard);
  const createComputerBoard = createGameBoardCells('computer', computerBoard);
  gameBoard.classList.add('game-board-hidden');
  return {
    createPlayerOneBoard,
    createComputerBoard
  }  
}

function createGameBoardCells(player, playerBoard) {
  const boardSize = 10;
  let cellCount = counter();
  let rowCount = counter();
  for(let row = 0; row < boardSize; row++) {
    const boardRow = document.createElement('div');
    boardRow.classList.add(`game-board-row`);
    boardRow.setAttribute('id', `row-${rowCount()}`);

    for (let cell = 0; cell < boardSize; cell++) {
      const boardCell = document.createElement('div');
      boardCell.classList.add('game-board-cell');
      boardCell.setAttribute('id', `${player}-${cellCount()}`);
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

function startGameButton() {
  console.log('starting game');
  const gameBoard = document.querySelector('#game-board');
  const computerContainer = document.querySelector('#computer-container');
  gameBoard.classList.remove('game-board-hidden');
  computerContainer.classList.add('computer-container-hidden');
}

function resetGameButton() {
  console.log('reseting game');
  location.reload();
}