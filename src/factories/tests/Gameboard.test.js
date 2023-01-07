import GameBoard from '../Gameboard';
import Ship from '../ship';

test('empty position on x-axis', () => {
  expect(GameBoard().isEmpty(1, 3, 'h', 4)).toEqual(true);
});

test('passed invalid position by x-axis', () => {
  expect(GameBoard().isEmpty(10, 3, 'h', 4)).toEqual('Invalid area');
});

test('passed invalid position by length on x-axis', () => {
  expect(GameBoard().isEmpty(1, 9, 'h', 4)).toEqual('Invalid area');
});

test('empty position on y-axis', () => {
  expect(GameBoard().isEmpty(8, 1, 'v', 2)).toEqual(true);
});
