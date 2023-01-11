import GameBoard from './factories/gameboard';
import Player from './factories/player';
import createGrid from './gridCreation';
import './assets/style.css';

const myBoard = GameBoard();
const enemyBoard = GameBoard();
const enemy = Player(myBoard);
const firstBlock = document.getElementById('first-block');
const secondBlock = document.getElementById('second-block');

myBoard.randomShips();
enemyBoard.randomShips();
createGrid();

const currentTarget = enemyBoard;

secondBlock.addEventListener('click', (e) => {
  const { x } = e.target.dataset;
  const { y } = e.target.dataset;
  const result = currentTarget.receiveAttack(x, y);

  console.log(result);
});
// console.log(

//   myBoard.getBoard(),
// );
