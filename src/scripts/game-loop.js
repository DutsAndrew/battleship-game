import { Ship } from './Ship';
import { Gameboard } from './Gameboard';
import { Player } from './Player';

export {
  gameLoop
}

function gameLoop() {
  const playerOne = new Player();
  const computer = new Player();

  playerOne.gameBoard.addBoatsToBoard('player');
  computer.gameBoard.addBoatsToBoard('computer');
  console.log(playerOne, computer);
}