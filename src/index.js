import {
  createGrid, loadModal, renderShip, changeOrientation, displayShip,
} from './display';
import { newGame, playTurn, testing } from './game';
import './assets/style.css';
import './assets/modal.css';

const humanSquare = document.getElementById('first-block');

// Create Grid inside the squares and render the game logic
createGrid();
const humanBoard = newGame(humanSquare);
const shipLenghts = [5, 4, 3, 2, 1];

// Attack the computer's board
document.getElementById('second-block').addEventListener('click', (e) => {
  playTurn(e);
});

// Reset game
document.getElementById('new-game').addEventListener('click', () => {
  createGrid();
  newGame(humanSquare);
});

// Initial load
window.addEventListener('load', () => {
  loadModal();
  renderShip(5);
});

// Change orientation of piece
document.getElementById('piece-container').addEventListener('click', () => {
  changeOrientation();
});

// Set piece to board
const selectingCells = Array.from(document.getElementById('pick-block').childNodes);
selectingCells.forEach((cell) => cell.addEventListener('drop', (e) => {
  const piece = document.getElementById('piece');
  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);
  const { orientation } = piece.dataset;
  const length = Number(piece.dataset.length);

  if (humanBoard.isEmpty(x, y, orientation, length)) {
    console.log(humanBoard.getCellsOfShip(x, y, orientation, length));
    const cells = humanBoard.getCellsOfShip(x, y, orientation, length);
    cells.forEach((cell) => displayShip(cell, selectingCells));
    shipLenghts.shift();
    renderShip(shipLenghts[0]);
    // console.log(humanBoard.isEmpty());
  }
}));

humanSquare.addEventListener('click', () => {
  testing();
});
