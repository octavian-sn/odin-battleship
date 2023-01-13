import GameBoard from './factories/gameboard';
import Player from './factories/player';
import { markMiss, markHit } from './display';

let humanSquareCells;

// Create boards for both players, and create AI player
let humanBoard;
let robotBoard;
let enemy;
let gameOngoing = true;

export function newGame() {
// Create boards for both players, and create AI player
  humanBoard = GameBoard();
  robotBoard = GameBoard();
  enemy = Player(humanBoard);

  // Populate boards with random ships and create the cell grid inside squares
  humanBoard.randomShips();
  robotBoard.randomShips();

  // Select the DOM squares after creating the grid to display feedback from attacks
  humanSquareCells = Array.from(document.getElementById('first-block').childNodes);
  gameOngoing = true;
}

function checkForWinner(person, result, cell, board) {
  if (result === 1) markHit(cell);
  if (result === 0) markMiss(cell);
  if (board.allSunk() === true) {
    gameOngoing = false;
    alert(`All ships have been sunk. ${person} the game!`);
    return;
  }
  return false;
}

function playRobot() {
  // Attack on human board by robot and mark cell according to result
  const result = enemy.attack();
  const index = Number(result[0].toString() + result[1].toString());
  const cell = humanSquareCells[index];
  checkForWinner('Computer has won', result[2], cell, humanBoard);
}

export function playTurn(e) {
  // If cell hasn't been attacked yet
  if (e.target.classList.contains('cell') && gameOngoing === true) {
    // Attack robot board and mark cell  according to result
    const result = robotBoard.receiveAttack(e.target.dataset.x, e.target.dataset.y);
    if (!checkForWinner('You have won', result, e.target, robotBoard)) playRobot();
  }
}
