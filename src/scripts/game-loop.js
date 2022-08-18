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

  const computerCells = document.querySelectorAll('.computer-game-board-cell');
    computerCells.forEach(computerCell => {
      computerCell.addEventListener('click', (e) => {
        computerCell.removeEventListener('click', (e));
        const clickedCell = Number(e.composedPath()[0].id.split('-')[1]);
        const playerAttackReport = computer.gameBoard.receiveAttack([clickedCell]);
        computer.gameBoard.displayAttack(clickedCell, playerAttackReport, computer.gameBoard.shipYard, 'computer');

        // computer generated attack that plays on the player
        const computerAttack = playerOne.generateComputerAttack(playerOne.gameBoard);
        playerOne.gameBoard.displayAttack(computerAttack.newAttack, computerAttack.attackStatus, playerOne.gameBoard.shipYard, 'player');
        console.log(playerAttackReport, playerOne, computer);
      })
    })
}