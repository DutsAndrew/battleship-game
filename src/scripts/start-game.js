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
  addAxisSwitch();
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

function addAxisSwitch() {
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
    axisSwitch.textContent = 'Place on X-Axis';
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
    axisSwitch.textContent = 'Place on Y-Axis';
  }
}

function enableDragAndDrop() {
  const playerBoats = document.querySelectorAll('.player-boat');
  const gameBoardCells = document.querySelectorAll('.game-board-cell');
  const label = document.querySelector('#label-for-placing-boat');
  playerBoats.forEach(boat => {
    boat.addEventListener('dragstart', e => {
      boat.classList.add('dragging');
      displaySelectedBoat(boat.id);
      e.dataTransfer.setData('boat', `${boat.id}`);
      e.dataTransfer.effectAllowed = 'move';
    })
    boat.addEventListener('dragend', () => {
      boat.classList.remove('dragging');
      label.textContent = 'Place your boats Captain';
    })
  })
  gameBoardCells.forEach(cell => {
    cell.addEventListener('dragenter', () => {
      const boatInDrag = document.querySelector('.dragging').id;
      cell.classList.add(`${boatInDrag}`);
      cell.classList.add('boat-drop-selected');
      cell.addEventListener('click', removeBoatPlacement)
    })
  })
  gameBoardCells.forEach(cell => {
    cell.addEventListener('dragleave', () => {
      const boatInDrag = document.querySelector('.dragging').id;
      cell.classList.remove(`${boatInDrag}`);
      cell.classList.remove('boat-drop-selected');
      cell.removeEventListener('click', e => removeBoatPlacement(e));
    })
  })
  gameBoardCells.forEach(cell => {
    cell.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    })
  })
  gameBoardCells.forEach(cell => {
    cell.addEventListener('drop', e => {
      e.preventDefault();
      const movedBoat = e.dataTransfer.getData('boat');
      preventDuplicateDrop(movedBoat);
      console.log(e);
    })
  })
}

function getAxisStatus() {
  const axisSwitch = document.querySelector('#axis-switch');
  let axisStatus;
  if (axisSwitch.classList.contains('y-axis')) {
    axisStatus = 'y';
    return axisStatus;
  }
  if (axisSwitch.classList.contains('x-axis')) {
    axisStatus = 'x';
    return axisStatus;
  }
}

function displaySelectedBoat(id) {
  const label = document.querySelector('#label-for-placing-boat');
  const boatName = id.split('-')[0].toUpperCase()
  label.textContent = `Placing: ${boatName}`;
}

function preventDuplicateDrop(boat) {
  const boatInDOM = document.querySelector(`#${boat}`);
  boatInDOM.setAttribute('draggable', 'false');
  boatInDOM.classList.add(`${boatInDOM.id}`);
  boatInDOM.classList.add('boat-has-been-placed');
  boatInDOM.addEventListener('click', e => removeBoatPlacement(e));
}

function removeBoatPlacement(e) {
  e.preventDefault();
  const targetEl = e.composedPath()[0].classList[1];
  const getAllTargetEls = document.querySelectorAll(`.${targetEl}`);
  
  getAllTargetEls.forEach(element => {
    const selectedBoat = document.querySelector(`#${targetEl}`);
    selectedBoat.setAttribute('draggable', 'true');
    if (element.classList.contains(`${targetEl}`)) {
      element.classList.remove(`${targetEl}`);
    }
    if (element.classList.contains('boat-drop-selected')) {
      element.classList.remove('boat-drop-selected');
    }
    if (element.classList.contains('boat-has-been-placed')) {
      element.classList.remove('boat-has-been-placed');
    }
  })
}

function resetGameButton() {
  console.log('reseting game');
  location.reload();
}