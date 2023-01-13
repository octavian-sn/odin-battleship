import { createGrid } from './display';
import { newGame, playTurn } from './game';
import './assets/style.css';
import './assets/modal.css';

const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const newGameButton = document.getElementById('new-game');
const robotSquare = document.getElementById('second-block');
const humanSquare = document.getElementById('first-block');

createGrid();
newGame(humanSquare);

robotSquare.addEventListener('click', (e) => {
  playTurn(e);
});

newGameButton.addEventListener('click', () => {
  newGame(humanSquare);
});

// window.addEventListener('load', () => {
//   overlay.classList.add('active');
//   modal.classList.add('active');
// });
