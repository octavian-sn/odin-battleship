import GameBoard from '../Gameboard';

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

test('position is NOT empty', () => {
  expect(GameBoard().placeShip(7, 2, 'h', 3).isEmpty(7, 2, 'h', 3)).toEqual(false);
});

test('board is empty because position was invalid', () => {
  expect(GameBoard().placeShip(9, 0, 'v', 4).isEmpty('board')).toEqual(true);
});

test('position is marked as a miss after an attack', () => {
  expect(GameBoard().receiveAttack(4, 4)).toEqual(0);
});

test('position is marked as a hit after an attack', () => {
  expect(GameBoard().placeShip(3, 8, 'v', 4).receiveAttack(5, 8)).toEqual(1);
});

test('if ships are sunk', () => {
  expect(GameBoard().placeShip(3, 0, 'h', 2).allSunk()).toEqual(false);
});

test('if ships are sunk with one out of two sunk', () => {
  const board = GameBoard();
  board.placeShip(0, 3, 'v', 3);
  board.placeShip(0, 5, 'h', 2);
  const attacks = [[0, 3], [1, 3], [2, 3], [0, 5]];
  attacks.forEach((attack) => board.receiveAttack(attack));
  expect(board.allSunk()).toEqual(false);
});

test('if ships are sunk with one out of 1 sunk', () => {
  const board = GameBoard();
  board.placeShip(9, 8, 'h', 2);
  board.receiveAttack(9, 8);
  board.receiveAttack(9, 9);
  expect(board.allSunk()).toEqual(true);
});

test('if ships are sunk with three out of three sunk', () => {
  const board = GameBoard();
  board.placeShip(8, 1, 'v', 2);
  board.placeShip(2, 7, 'h', 3);
  board.placeShip(4, 2, 'v', 4);
  const attacks = [[8, 1], [9, 1], [2, 7], [2, 8], [2, 9], [4, 2], [5, 2], [6, 2], [7, 2]];
  attacks.forEach((attack) => board.receiveAttack(attack[0], attack[1]));
  expect(board.allSunk()).toEqual(true);
});
