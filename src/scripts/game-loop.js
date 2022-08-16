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
        const clickedCell = Number(e.composedPath()[0].id.split('-')[1]);
        computer.gameBoard.receiveAttack([clickedCell]);
      })
    })

  
}