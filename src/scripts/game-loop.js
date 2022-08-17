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

  // make an if statement for if a user click is registered that a computer attack is generated on the player. This will allow the user to keep clicking and a computer attack will be generated.

  const computerCells = document.querySelectorAll('.computer-game-board-cell');
    computerCells.forEach(computerCell => {
      computerCell.addEventListener('click', (e) => {
        computerCell.removeEventListener('click', (e));
        const clickedCell = Number(e.composedPath()[0].id.split('-')[1]);
        const playerAttackReport = computer.gameBoard.receiveAttack([clickedCell]);
        setTimeout(computer.gameBoard.displayPlayerAttack, 0, clickedCell, playerAttackReport, computer.gameBoard.shipYard);


        // computer generated attack that plays on the player
        const computerAttackReport = playerOne.generateComputerAttack();
        console.log(playerAttackReport, computerAttackReport, playerOne, computer);
      })
    })
}