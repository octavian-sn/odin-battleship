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

test('check recommended attacks after executing sixteen attacks', () => {
  const board = GameBoard();
  board.randomShips();
  const player = Player(board);
  for (let i = 0; i < 15; i++)player.attack();
  expect(player.attack()).toBeGreaterThan(0);
});
