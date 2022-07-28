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
  const computerContainer = document.querySelector('#computer-container');
  if (computerContainer.classList.contains('computer-container-hidden')) {
    return;
  }
  onlyDisplayPlayerOneBoard();
  addBoatSelectionBox();
  addBoatsToBox();
  addAxisSwitching();
  enableDragAndDrop();
}

function onlyDisplayPlayerOneBoard() {
  const gameBoard = document.querySelector('#game-board');
  const computerContainer = document.querySelector('#computer-container');
  gameBoard.classList.remove('game-board-hidden');
  computerContainer.classList.add('computer-container-hidden');
}

function addBoatSelectionBox() {
  const gameBoard = document.querySelector('#game-board');
  const boatContainer = document.createElement('div');
    boatContainer.setAttribute('id', 'boat-container');
  const labelForPlacingBoat = document.createElement('p');
    labelForPlacingBoat.setAttribute('id', 'label-for-placing-boat');
    labelForPlacingBoat.textContent = 'Place Your Boats Captain!';
  const boatSelectionBox = document.createElement('div');
    boatSelectionBox.setAttribute('id', 'boat-selection-box');
    boatSelectionBox.classList.add('display-y-axis');
  boatContainer.appendChild(labelForPlacingBoat);
  boatContainer.appendChild(boatSelectionBox);
  gameBoard.appendChild(boatContainer);
}

function addBoatsToBox() {
  const boatSelectionBox = document.querySelector('#boat-selection-box');
  const cellWidth = document.querySelector('.game-board-cell').clientWidth;
  const cellHeight = document.querySelector('.game-board-cell').clientHeight;

  const carrierIcon = document.createElement('div');
    carrierIcon.setAttribute('id', 'carrier-player');
    carrierIcon.classList.add('player-boat');
    const carrierHeight = cellHeight * 5 + 8;
    carrierIcon.style.height = `${carrierHeight}px`;
    carrierIcon.style.width = `${cellWidth}px`;
    carrierIcon.draggable = 'true';
  const battleshipIcon = document.createElement('div');
    battleshipIcon.setAttribute('id', 'battleship-player');
    battleshipIcon.classList.add('player-boat');
    const battleshipHeight = cellHeight * 4 + 7;
    battleshipIcon.style.height = `${battleshipHeight}px`;
    battleshipIcon.style.width = `${cellWidth}px`;
    battleshipIcon.draggable = 'true';
  const cruiserIcon = document.createElement('div');
    cruiserIcon.setAttribute('id', 'cruiser-player');
    cruiserIcon.classList.add('player-boat');
    const cruiserHeight = cellHeight * 3 + 6;
    cruiserIcon.style.height = `${cruiserHeight}px`;
    cruiserIcon.style.width = `${cellWidth}px`;
    cruiserIcon.draggable = 'true';
  const submarineIcon = document.createElement('div');
    submarineIcon.setAttribute('id', 'submarine-player');
    submarineIcon.classList.add('player-boat');
    const submarineHeight = cellHeight * 3 + 6;
    submarineIcon.style.height = `${submarineHeight}px`;
    submarineIcon.style.width = `${cellWidth}px`;
    submarineIcon.draggable = 'true';
  const destroyerIcon = document.createElement('div');
    destroyerIcon.setAttribute('id', 'destroyer-player');
    destroyerIcon.classList.add('player-boat');
    const destroyerHeight = cellHeight * 2 + 3;
    destroyerIcon.style.height = `${destroyerHeight}px`;
    destroyerIcon.style.width = `${cellWidth}px`;
    destroyerIcon.draggable = 'true';

  boatSelectionBox.appendChild(carrierIcon);
  boatSelectionBox.appendChild(battleshipIcon);
  boatSelectionBox.appendChild(cruiserIcon);
  boatSelectionBox.appendChild(submarineIcon);
  boatSelectionBox.appendChild(destroyerIcon);
}

function addAxisSwitching() {
  const main = document.querySelector('#main-document');
  const axisButton = document.createElement('button');
    axisButton.setAttribute('id', 'axis-switch');
    axisButton.classList.add('y-axis');
    axisButton.textContent = 'Place on Y-Axis';
  axisButton.addEventListener('click', changeAxis);
  main.appendChild(axisButton);
}

function changeAxis() {
  const axisSwitch = document.querySelector('#axis-switch');
  const boats = document.querySelectorAll('.player-boat');
  const boatSelectionBox = document.querySelector('#boat-selection-box');
  if (axisSwitch.classList.contains('y-axis')) {
    boats.forEach(boat => {
      const currentHeight = boat.style.height;
      const currentWidth = boat.style.width;
      boat.style.width = currentHeight;
      boat.style.height = currentWidth;
    })
    boatSelectionBox.classList.remove('display-y-axis');
    boatSelectionBox.classList.add('display-x-axis');
    axisSwitch.classList.remove('y-axis');
    axisSwitch.classList.add('x-axis');
  } else if (axisSwitch.classList.contains('x-axis')) {
    boats.forEach(boat => {
      const currentHeight = boat.style.height;
      const currentWidth = boat.style.width;
      boat.style.width = currentHeight;
      boat.style.height = currentWidth;
    })
    boatSelectionBox.classList.remove('display-x-axis');
    boatSelectionBox.classList.add('display-y-axis');
    axisSwitch.classList.remove('x-axis');
    axisSwitch.classList.add('y-axis');
  }
}

function enableDragAndDrop() {
  const playerBoats = document.querySelectorAll('.player-boat');
  const gameBoardCells = document.querySelectorAll('.game-board-cell');
  playerBoats.forEach(boat => {
    boat.addEventListener('dragstart', () => {
      boat.classList.add('dragging');
      console.log('drag started');
    })
    boat.addEventListener('dragend', () => {
      boat.classList.remove('dragging');
      console.log('dragend');
    })
  })
  gameBoardCells.forEach(cell => {
    cell.addEventListener('dragover', () => {
      console.log(cell);
      const boat = document.querySelector('.dragging');
      cell.appendChild(boat);
    })
  })
}

function resetGameButton() {
  console.log('reseting game');
  location.reload();
}