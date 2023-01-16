import {
  createGrid, loadModal, renderShip, changeOrientation, displayShip, clearDisplayShips,
} from './display';
import {
  newGame, playTurn, retrieveHumanDomBoard,
} from './game';
import './assets/style.css';
import './assets/modal.css';

// Initial game load
createGrid();
let humanBoard = newGame();
let shipLengths = [5, 4, 3, 2, 1];
loadModal();
renderShip(5);
addListenersToNewCells();

// Attacking by clicking the computer's board
document.getElementById('second-block').addEventListener('click', (e) => {
  playTurn(e);
});

// New game button
document.getElementById('new-game').addEventListener('click', () => {
  for (let i = 5; i > 0; i--) shipLengths.push(i);
  createGrid();
  humanBoard = newGame();
  loadModal();
  renderShip(5);
  addListenersToNewCells();
});

// Change orientation of ship
document.getElementById('piece-container').addEventListener('click', () => {
  changeOrientation();
});

// Drag & drop the selected ship(piece) to pick-board
function addListenersToNewCells() {
  const selectingCells = Array.from(document.getElementById('pick-block').childNodes);
  selectingCells.forEach((cell) => cell.addEventListener('drop', (e) => {
    // Get length and orientation from piece and x/y from cell dropped onto
    const piece = document.getElementById('piece');
    const x = Number(e.target.dataset.x);
    const y = Number(e.target.dataset.y);
    const { orientation } = piece.dataset;
    const length = Number(piece.dataset.length);

    if (humanBoard.isEmpty(x, y, orientation, length)) {
      humanBoard.placeShip(x, y, orientation, length);
      const cells = humanBoard.getCellsOfShip(x, y, orientation, length);
      cells.forEach((cell) => displayShip(cell, selectingCells));
      shipLengths.shift();
      renderShip(shipLengths[0]);
    }
  }));
}

// Start game button
document.getElementById('start').addEventListener('click', () => {
  // Check if all ships have been placed
  const firstBoard = document.getElementById('first-block');
  const pickBoard = document.getElementById('pick-block');
  if (shipLengths.length < 1) {
    firstBoard.innerHTML = pickBoard.innerHTML;
    pickBoard.innerHTML = '';
    retrieveHumanDomBoard(firstBoard);
    loadModal();
  }
});

// Random ships button
document.getElementById('random').addEventListener('click', () => {
  const selectingCells = Array.from(document.getElementById('pick-block').childNodes);
  clearDisplayShips(selectingCells);
  humanBoard.newBoard();
  const cells = humanBoard.randomShips();
  cells.forEach((cell) => displayShip(cell, selectingCells));
  shipLengths = [];
  document.getElementById('piece').innerHTML = '';
});
