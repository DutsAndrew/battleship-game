export {
  createGameBoards,
  startGameButton,
  resetGameButton,
}

function createGameBoards() {
  const gameBoard = document.querySelector('#game-board');
  const playerOneBoard = document.querySelector('#player-one-board');
  const createPlayerOneBoard = createGameBoardCells('player', playerOneBoard);
  gameBoard.classList.add('game-board-hidden');
  return {
    createPlayerOneBoard,
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
      boardCell.classList.add(`${player}-game-board-cell`);
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
  const cellWidth = document.querySelector('.player-game-board-cell').clientWidth;
  const cellHeight = document.querySelector('.player-game-board-cell').clientHeight;

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
  const gameBoardCells = document.querySelectorAll('.player-game-board-cell');
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
    cell.addEventListener('dragleave', () => {
      const boatInDrag = document.querySelector('.dragging').id;
      const allSelectedCells = document.querySelectorAll('.additional-boat-drop-selected');
      const badDropCells = document.querySelectorAll('.error');
      cell.classList.remove(`${boatInDrag}`);
      cell.classList.remove('boat-drop-selected');
      cell.parentElement.classList.remove('row-ready-for-placement');
      allSelectedCells.forEach(selectedCell => {
        selectedCell.classList.remove('additional-boat-drop-selected', `${boatInDrag}`);
      })
      badDropCells.forEach(cell => {
        cell.classList.remove('error');
      })
      cell.removeEventListener('click', e => removeBoatPlacement(e));
    })
  })
  gameBoardCells.forEach(cell => {
    cell.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (cell.classList.contains('additional-boat-drop-active') || cell.classList.contains('boat-drop-active')) {
        return;
      }
      const boatInDrag = document.querySelector('.dragging').id;
      cell.classList.add(`${boatInDrag}`);
      cell.classList.add('boat-drop-selected');
      cell.parentElement.classList.add('row-ready-for-placement');
      displayFullBoatLength(cell, boatInDrag);
    })
  })
  gameBoardCells.forEach(cell => {
    cell.addEventListener('drop', (e) => {
      e.preventDefault();
      cell.parentElement.classList.remove('row-ready-for-placement');
      const allSelectedCells = document.querySelectorAll('.additional-boat-drop-selected');
      const badBoatDrop = document.querySelectorAll('.error');
      const movedBoat = e.dataTransfer.getData('boat');
      if (cell.classList.contains('boat-drop-active') || cell.classList.contains('additional-boat-drop-active')) {
        return;
      }
      cell.classList.remove('boat-drop-selected');
      cell.classList.add('boat-drop-active');
      cell.addEventListener('click', removeBoatPlacement);
      allSelectedCells.forEach(selectedCell => {
        selectedCell.classList.remove('additional-boat-drop-selected');
        selectedCell.classList.add('additional-boat-drop-active');
        selectedCell.addEventListener('click', removeBoatPlacement);
      })
      if (badBoatDrop.length > 0) {
        removeBoatOnBadDrop(movedBoat);
      }
      if (document.querySelectorAll(`.${movedBoat}`).length > 0) {
        preventDuplicateDrop(movedBoat);
      }
      checkIfAllBoatsArePlaced();
    })
  })
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

  // adds axis-status for placing additional cells
  boatInDOM.addEventListener('click', e => removeBoatPlacement(e));
}

function removeBoatPlacement(e) {
  e.preventDefault();
  const targetBoat = e.composedPath()[0].classList[1];
  const getAllTargetBoats = document.querySelectorAll(`.${targetBoat}`);
  getAllTargetBoats.forEach(boat => {
    const selectedBoat = document.querySelector(`#${targetBoat}`);
    selectedBoat.setAttribute('draggable', 'true');
    if (boat.classList.contains(`${targetBoat}`)) {
      boat.classList.remove(`${targetBoat}`);
      boat.classList.remove('additional-boat-drop-active');
      boat.removeEventListener('click', removeBoatPlacement);
    }
    if (boat.classList.contains('boat-drop-active')) {
      boat.classList.remove('boat-drop-active');
    }
    if (boat.classList.contains('boat-has-been-placed')) {
      boat.classList.remove('boat-has-been-placed');
    }
  })
}

function displayFullBoatLength(cell, boatId) {
  const cellNumber = parseInt(cell.id.split('-')[1]);
  const boatLength = getBoatLength(boatId);
  const axisStatus = getAxisStatus();
  calculateMissingCells(axisStatus, cellNumber, boatId, boatLength);
}

function getBoatLength(boat) {
  let boatLength;
  if (boat === 'carrier-player') {
    boatLength = 5;
  } else if (boat === 'battleship-player') {
    boatLength = 4;
  } else if (boat === 'cruiser-player') {
    boatLength = 3;
  } else if (boat === 'submarine-player') {
    boatLength = 3;
  } else if (boat === 'destroyer-player') {
    boatLength = 2;
  }
  return boatLength;
}

function getAxisStatus() {
  const axisSwitch = document.querySelector('#axis-switch');
  let axisStatus;
  if (axisSwitch.classList.contains('y-axis')) {
    axisStatus = 'y';
  }
  if (axisSwitch.classList.contains('x-axis')) {
    axisStatus = 'x';
  }
  return axisStatus;
}

function calculateMissingCells(axisStatus, targetCell, boatId, boatSize) {
  const gameBoardCells = document.querySelectorAll('.player-game-board-cell');
  const targetBoatCells = document.querySelectorAll(`.${boatId}`);

  // variables for filling missing cells on x/y-axis
  const cellOneAbove = targetCell - 10;
  const cellTwoAbove = targetCell - 20;
  const cellOneBelow = targetCell + 10;
  const cellTwoBelow = targetCell + 20;
  const cellOneToTheRight = targetCell + 1;
  const cellTwoToTheRight = targetCell + 2;
  const cellOneToTheLeft = targetCell - 1;
  const cellTwoToTheLeft = targetCell - 2;

  // variables for storing whether or not a bad drop has been done
  let cellOneAboveStatus = null;
  let cellTwoAboveStatus = null;
  let cellOneBelowStatus = null;
  let cellTwoBelowStatus = null;
  let cellOneToTheRightStatus = null;
  let cellTwoToTheRightStatus = null;
  let cellOneToTheLeftStatus = null;
  let cellTwoToTheLeftStatus = null;
  
  if (axisStatus === 'y') {

    // extra cells cannot be less than 0 or more than 100 for y-axis
    if (boatSize === 2) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneAbove && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneAboveStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
      })
      if (cellOneAboveStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
    if (boatSize === 3) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneAbove && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneAboveStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellOneBelow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneBelowStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        } 
      })
      if (cellOneAboveStatus === null || cellOneBelowStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
    if (boatSize === 4) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneAbove && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneAboveStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellTwoAbove && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellTwoAboveStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellOneBelow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneBelowStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
      })
      if (cellOneAboveStatus === null || cellTwoAboveStatus === null || cellOneBelowStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
    if (boatSize === 5) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneAbove && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneAboveStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellTwoAbove && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellTwoAboveStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellOneBelow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneBelowStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellTwoBelow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellTwoBelowStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
      });
      if (cellOneAboveStatus === null || cellTwoAboveStatus === null || cellOneBelowStatus === null || cellTwoBelowStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
    
  } else if (axisStatus === 'x') {

    // extra cells cannot go under multiples of 11 or surpass multiples of 10, activeRow variable validates that cells fall under selected row
    if (boatSize === 2) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const activeRow = cell.parentElement.classList.contains('row-ready-for-placement');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneToTheRight && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneToTheRightStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
      })
      if (cellOneToTheRightStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
    if (boatSize === 3) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const activeRow = cell.parentElement.classList.contains('row-ready-for-placement');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneToTheRight && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneToTheRightStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellOneToTheLeft && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneToTheLeftStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
      })
      if (cellOneToTheRightStatus === null || cellOneToTheLeftStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
    if (boatSize === 4) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const activeRow = cell.parentElement.classList.contains('row-ready-for-placement');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneToTheRight && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneToTheRightStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellTwoToTheRight && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellTwoToTheRightStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellOneToTheLeft && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneToTheLeftStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
      })
      if (cellOneToTheRightStatus === null || cellTwoToTheRightStatus === null || cellOneToTheLeftStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
    if (boatSize === 5) {
      gameBoardCells.forEach(cell => {
        const cellIsAlreadyActive = cell.classList.contains('boat-drop-active');
        const extraCellIsAlreadyActive = cell.classList.contains('additional-boat-drop-active');
        const activeRow = cell.parentElement.classList.contains('row-ready-for-placement');
        const cellId = Number(cell.id.split('-')[1]);
        if (cellId === cellOneToTheRight && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneToTheRightStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellTwoToTheRight && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellTwoToTheRightStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellOneToTheLeft && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellOneToTheLeftStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
        if (cellId === cellTwoToTheLeft && activeRow && !cellIsAlreadyActive && !extraCellIsAlreadyActive) {
          cellTwoToTheRightStatus = true;
          cell.classList.add('additional-boat-drop-selected', `${boatId}`);
        }
      })
      if (cellOneToTheRightStatus === null || cellTwoToTheRightStatus === null || cellOneToTheLeftStatus === null || cellTwoToTheLeftStatus === null) {
        targetBoatCells.forEach(cell => {
          cell.classList.add('error');
        });
      }
    }
  }
}

function removeBoatOnBadDrop(boatId) {
  const badDropCells = document.querySelectorAll('.error');
  if (badDropCells.length > 0) {
    badDropCells.forEach(cell => {
      cell.classList.remove('boat-drop-active', 'additional-boat-drop-active', `${boatId}`, 'error');
    })
  }
}

function checkIfAllBoatsArePlaced() {
  const amountOfBoatsDropped = document.querySelectorAll('.boat-has-been-placed').length;
  if (amountOfBoatsDropped === 5) {
    buildComputerBoard();
  }
}

function buildComputerBoard() {
  const playerOneBoatContainer = document.querySelector('#boat-container');
    playerOneBoatContainer.classList.add('player-one-boat-container-hidden');
  const computerContainer = document.querySelector('#computer-container');
    computerContainer.classList.remove('computer-container-hidden');
  const computerBoard = document.querySelector('#computer-board');
  const createComputerBoard = createGameBoardCells('computer', computerBoard);
  const axisSwitch = document.querySelector('#axis-switch');
    axisSwitch.remove();
  
  generateComputerBoatStartingPoint();
}

function generateComputerBoatStartingPoint() {
  let computerCarrierStart = Math.floor(Math.random() * 100);
  let computerBattleshipStart = Math.floor(Math.random() * 100);
  let computerCruiserStart = Math.floor(Math.random() * 100);
  let computerSubmarineStart = Math.floor(Math.random() * 100);
  let computerDestroyerStart = Math.floor(Math.random() * 100);

  // validates that starting points are 5 away to prevent bad placement
  while (
    Math.abs(computerCarrierStart - computerBattleshipStart) < 5
    || Math.abs(computerCarrierStart - computerCruiserStart) < 5
    || Math.abs(computerCarrierStart - computerSubmarineStart) < 5
    || Math.abs(computerCarrierStart - computerDestroyerStart) < 5
  
    || Math.abs(computerBattleshipStart - computerCarrierStart) < 5
    || Math.abs(computerBattleshipStart - computerCruiserStart) < 5
    || Math.abs(computerBattleshipStart - computerSubmarineStart) < 5
    || Math.abs(computerBattleshipStart - computerDestroyerStart) < 5

    || Math.abs(computerCruiserStart - computerCarrierStart) < 5
    || Math.abs(computerCruiserStart - computerBattleshipStart) < 5
    || Math.abs(computerCruiserStart - computerSubmarineStart) < 5
    || Math.abs(computerCruiserStart - computerDestroyerStart) < 5

    || Math.abs(computerSubmarineStart - computerCarrierStart) < 5
    || Math.abs(computerSubmarineStart - computerBattleshipStart) < 5
    || Math.abs(computerSubmarineStart - computerCruiserStart) < 5
    || Math.abs(computerSubmarineStart - computerDestroyerStart) < 5

    || Math.abs(computerDestroyerStart - computerCarrierStart) < 5
    || Math.abs(computerDestroyerStart - computerBattleshipStart) < 5
    || Math.abs(computerDestroyerStart - computerCruiserStart) < 5
    || Math.abs(computerDestroyerStart - computerSubmarineStart) < 5
    ) {
      computerCarrierStart = Math.floor(Math.random() * 100);
      computerBattleshipStart = Math.floor(Math.random() * 100);
      computerCruiserStart = Math.floor(Math.random() * 100);
      computerSubmarineStart = Math.floor(Math.random() * 100);
      computerDestroyerStart = Math.floor(Math.random() * 100);
  }

  buildComputerBoats(computerCarrierStart, computerBattleshipStart, computerCruiserStart, computerSubmarineStart, computerDestroyerStart);
}

function buildComputerBoats(computerCarrierStart, computerBattleshipStart, computerCruiserStart, computerSubmarineStart, computerDestroyerStart) {
  const carrierCoordinates = calculateBoatPlacement('carrier', computerCarrierStart);
  const battleshipCoordinates = calculateBoatPlacement('battleship', computerBattleshipStart);
  const cruiserCoordinates = calculateBoatPlacement('cruiser', computerCruiserStart);
  const submarineCoordinates = calculateBoatPlacement('submarine', computerSubmarineStart);
  const destroyerCoordinates = calculateBoatPlacement('destroyer', computerDestroyerStart);

  // validates that calculated cells are not duplicates
  const fixedBoats = verifyNoDuplicateCoordinates(carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates);

  if (fixedBoats === 'no bad match') {
    placeComputerBoats(carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates);
  } else if (fixedBoats !== 'no bad match') {
    placeComputerBoats(fixedBoats[0], fixedBoats[1], fixedBoats[2], fixedBoats[3], fixedBoats[4]);
  }
}

function calculateBoatPlacement(boatType, boatStart) {

  // random number to pick whether to place boat on x/y-axis
  const randomNumber = Math.floor(Math.random() * 10);

  let firstAdditionalCell;
  let secondAdditionalCell;
  let thirdAdditionalCell;
  let fourthAdditionalCell;

  // place on y-axis
  if (randomNumber % 2 === 0) {
    if (boatStart > 50) {
      firstAdditionalCell = boatStart - 10;
      secondAdditionalCell = boatStart - 20;
      thirdAdditionalCell = boatStart - 30;
      fourthAdditionalCell = boatStart - 40;
    }

    if (boatStart < 50) {
      firstAdditionalCell = boatStart + 10;
      secondAdditionalCell = boatStart + 20;
      thirdAdditionalCell = boatStart + 30;
      fourthAdditionalCell = boatStart + 40;
    }
  }

  // place on x-axis
  if (randomNumber % 2 !== 0) {
    if (getLastDigit(boatStart) <= 5) {
      firstAdditionalCell = boatStart + 1;
      secondAdditionalCell = boatStart + 2;
      thirdAdditionalCell = boatStart + 3;
      fourthAdditionalCell = boatStart + 4;
    }
  
    if (getLastDigit(boatStart) > 5) {
      firstAdditionalCell = boatStart - 1;
      secondAdditionalCell = boatStart - 2;
      thirdAdditionalCell = boatStart - 3;
      fourthAdditionalCell = boatStart - 4;
    }

    if (boatStart % 10 === 0) {
      firstAdditionalCell = boatStart - 1;
      secondAdditionalCell = boatStart - 2;
      thirdAdditionalCell = boatStart - 3;
      fourthAdditionalCell = boatStart - 4;
    }
  }

  if (boatType === 'carrier') {
    return [
      boatStart,
      firstAdditionalCell,
      secondAdditionalCell,
      thirdAdditionalCell,
      fourthAdditionalCell
    ]
  } else if (boatType === 'battleship') {
    return [
      boatStart,
      firstAdditionalCell,
      secondAdditionalCell,
      thirdAdditionalCell
    ]
  } else if (boatType === 'cruiser' || boatType === 'submarine') {
    return [
      boatStart,
      firstAdditionalCell,
      secondAdditionalCell
    ]
  } else if (boatType === 'destroyer') {
    return [
      boatStart,
      firstAdditionalCell
    ]
  }
}

function verifyNoDuplicateCoordinates(
  carrierCoordinates,
  battleshipCoordinates,
  cruiserCoordinates,
  submarineCoordinates,
  destroyerCoordinates
  ) {
    let fixedCarrier;
    let fixedBattleship;
    let fixedCruiser;
    let fixedSubmarine;
    let fixedDestroyer;
    let badMatch = false;

    while (checkIfArraysShareValue(carrierCoordinates, battleshipCoordinates) === 'duplicate coordinate found' 
    || checkIfArraysShareValue(carrierCoordinates, cruiserCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(carrierCoordinates, submarineCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(carrierCoordinates, destroyerCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(battleshipCoordinates, carrierCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(battleshipCoordinates, cruiserCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(battleshipCoordinates, submarineCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(battleshipCoordinates, destroyerCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(cruiserCoordinates, carrierCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(cruiserCoordinates, battleshipCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(cruiserCoordinates, submarineCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(cruiserCoordinates, destroyerCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(submarineCoordinates, carrierCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(submarineCoordinates, battleshipCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(submarineCoordinates, cruiserCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(submarineCoordinates, destroyerCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(destroyerCoordinates, carrierCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(destroyerCoordinates, battleshipCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(destroyerCoordinates, cruiserCoordinates) === 'duplicate coordinate found'
    || checkIfArraysShareValue(destroyerCoordinates, submarineCoordinates) === 'duplicate coordinate found') {
      badMatch = true;
      fixedCarrier = calculateBoatPlacement('carrier', carrierCoordinates[0]);
      fixedBattleship = calculateBoatPlacement('battleship', battleshipCoordinates[0]);
      fixedCruiser = calculateBoatPlacement('cruiser', cruiserCoordinates[0]);
      fixedSubmarine = calculateBoatPlacement('submarine', submarineCoordinates[0]);
      fixedDestroyer = calculateBoatPlacement('destroyer', destroyerCoordinates[0]);
    }

    if (badMatch === false) {
      return 'no bad match';
    } else if (badMatch === true) {
      return [
        fixedCarrier,
        fixedBattleship,
        fixedCruiser,
        fixedSubmarine,
        fixedDestroyer
      ]
    }
}

function checkIfArraysShareValue(array1, array2) {
  const filteredArray = array1.filter(value => array2.includes(value));
  if (filteredArray.length > 0) {
    return 'duplicate coordinate found';
  } else if (filteredArray.length === 0) {
    return 'no duplicate coordinates found';
  }
}

function placeComputerBoats(carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates) {
  console.log(carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates);
}

function getLastDigit(number) {
  const convertedNumber = Number(number.toString().slice(-1));
  return convertedNumber;
}

function resetGameButton() {
  console.log('reseting game');
  location.reload();
}