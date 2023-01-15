import GameBoard from './factories/gameboard';
import Player from './factories/player';
import { markMiss, markHit } from './display';

// Player boards, AI player, div's of humanBoard and gameOngoing to be accessed by other functions
let humanBoard;
let robotBoard;
let enemy;
let humanSquareCells;
let gameOngoing = true;

export function newGame() {
// Create boards for both players, and create AI player
  humanBoard = GameBoard();
  robotBoard = GameBoard();
  enemy = Player(humanBoard);

  // Populate robot board with random ships
  robotBoard.randomShips();

  // Set game condition to true and return the human board to be used for ship placing
  gameOngoing = true;
  return humanBoard;
}

// Visually marks the gameboards with hits or misses and check for winner
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

// Play robot's turn
function playRobot() {
  // Attack on human board by robot and mark cell according to result
  const result = enemy.attack();
  const index = Number(result[0].toString() + result[1].toString());
  const cell = humanSquareCells[index];
  checkForWinner('Computer has won', result[2], cell, humanBoard);
}

// Play human's turn
export function playTurn(e) {
  // If cell hasn't been attacked yet
  if (e.target.classList.contains('cell') && gameOngoing === true) {
    // Attack robot board and mark cell according to result
    const result = robotBoard.receiveAttack(e.target.dataset.x, e.target.dataset.y);
    // If human hasn't won, play the robot's move
    if (!checkForWinner('You have won', result, e.target, robotBoard)) playRobot();
  }
}

export function retrieveHumanDomBoard(board) {
  humanSquareCells = Array.from(board.childNodes);
}

export function testing() {
  console.log(
    humanBoard.getShips(),
    robotBoard.getShips(),
  );
}
