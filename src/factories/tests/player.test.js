import Player from '../player';
import GameBoard from '../gameboard';

test('how many moves are available', () => {
  expect(Player().attacksAvailable()).toEqual(100);
});

test('check attacks left after executing three attacks', () => {
  const player = Player(GameBoard());
  for (let i = 0; i < 3; i++)player.attack();
  expect(player.attacksAvailable()).toEqual(97);
});

test('receive array with the attack coordinates and result', () => {
  const board = GameBoard();
  board.randomShips();
  const player = Player(board);
  for (let i = 0; i < 15; i++)player.attack();
  expect.arrayContaining(player.attack());
});
