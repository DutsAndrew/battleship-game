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
  generateComputerAttack() {
    const newAttack = Math.floor(Math.random() * 100);
    const validatedAttack = validateAttack(this.gameBoard, newAttack);

    function validateAttack(gameBoard, attack) {
      let attackUnderReview = attack;

      const attackStatus = gameBoard.receiveAttack(attackUnderReview);
      while (attackStatus === 'move has already been made') {
        const tryNewAttack = Math.floor(Math.random() * 100);
        const newAttackStatus = this.gameBoard.receiveAttack(tryNewAttack);
        if (newAttackStatus !== 'move has already been made') {
          attackUnderReview = tryNewAttack;
          break;
        }
      }
      return attackUnderReview;
    }

    return validatedAttack;
  }
}