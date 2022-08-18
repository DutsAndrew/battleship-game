export {
  Player
}

import { Gameboard } from './Gameboard';

class Player {
  constructor() {
    this.gameBoard = new Gameboard();
    this.winStatus = false;
    this.enemyBoatsSunk = [];
  }

  checkForWin() {
    if (this.enemyBoatsSunk.length === 5) {
      this.winStatus = true;
      return this.winStatus;
    }
    return this.winStatus;
  }

  generateComputerAttack(playerGameBoard) {
    let newAttack = Math.floor(Math.random() * 100);
    let attackStatus;
    validateAttack(newAttack, playerGameBoard);

    function validateAttack(attack, playerGameBoard) {
      attackStatus = playerGameBoard.receiveAttack([attack]);
      while (attackStatus === 'move has already been made') {
        let tryNewAttack = Math.floor(Math.random() * 100);
        attackStatus = playerGameBoard.receiveAttack([tryNewAttack]);
        if (attackStatus !== 'move has already been made') {
          newAttack = tryNewAttack;
          break;
        }
      }
      return {
        newAttack,
        attackStatus
      }
    }
    return { 
      newAttack,
      attackStatus
    }
  }

}