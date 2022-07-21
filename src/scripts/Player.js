export {
  Player
}

import { Gameboard } from '../scripts/Gameboard';

class Player {
  constructor() {
    this.playersTurn = false;
    this.turnCounter = 0;
    this.plays = [];
    this.gameBoard = new Gameboard();
    this.winStatus = false;
    this.enemyBoatsSunk = [];
  }
  makeAMove() {
    this.turnCounter++;
    this.playersTurn = true;
  }
  checkForWin() {
    if (this.enemyBoatsSunk.length === 5) {
      return 'we have a winner, chicken dinner';
    }
    return 'no winner yet';
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