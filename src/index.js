import './stylesheets/style.css';

import { createGameBoards } from './scripts/start-game';
import { startGameButton } from './scripts/start-game';
import { resetGameButton } from './scripts/start-game';

window.onload = () => {
  createGameBoards();
}

(function attachMenuEventListeners() {
  const startGame = document.querySelector('#start-game');
    startGame.addEventListener('click', startGameButton);
  const resetGame = document.querySelector('#reset-game');
    resetGame.addEventListener('click', resetGameButton);
})();