import { createGrid, loadModal } from './display';
import { newGame, playTurn, testing } from './game';
import './assets/style.css';
import './assets/modal.css';

const newGameButton = document.getElementById('new-game');
const robotSquare = document.getElementById('second-block');
const humanSquare = document.getElementById('first-block');

// Create Grid inside the squares and render the game logic
createGrid();
newGame(humanSquare);

robotSquare.addEventListener('click', (e) => {
  playTurn(e);
});

newGameButton.addEventListener('click', () => {
  createGrid();
  newGame(humanSquare);
});

window.addEventListener('load', () => {
  // loadModal();
});

humanSquare.addEventListener('click', () => {
  testing();
});
