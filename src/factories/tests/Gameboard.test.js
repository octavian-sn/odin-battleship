import GameBoard from '../Gameboard';
import Ship from '../ship';

test('if board is empty', () => {
  expect(GameBoard().isEmpty('board')).toEqual(true);
});

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

test('passed invalid position by y-axis', () => {
  expect(GameBoard().isEmpty(4, 11, 'v', 2)).toEqual('Invalid area');
});

test('passed invalid position by length on y-axis', () => {
  expect(GameBoard().isEmpty(9, 4, 'v', 3)).toEqual('Invalid area');
});

test('board is NOT empty', () => {
  expect(GameBoard().placeShip(0, 0, 'v', 4).isEmpty('board')).toEqual(false);
});
