import Ship from '../ship';

test('create new ship', () => {
  expect(Ship(13).getHealth()).toBe(4);
});

test('test if new ship is sunk', () => {
  expect(Ship(4).isSunk()).toBe(false);
});

test('test new ship health', () => {
  expect(Ship(1).getHealth()).toEqual(1);
});

test('test hitting ship', () => {
  expect(Ship(3).hit().getHealth()).toEqual(2);
});

test('test if ship with 1 hp is sunk after 1 hit', () => {
  expect(Ship(1).hit().isSunk()).toEqual(true);
});

test('test if ship with 4 hp is sunk after 1 hit', () => {
  expect(Ship(4).hit().isSunk()).toEqual(false);
});
