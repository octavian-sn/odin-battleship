import Player from '../player';
import GameBoard from '../gameboard';

test('how many moves are available', () => {
  expect(Player().attacksAvailable()).toEqual(100);
});
