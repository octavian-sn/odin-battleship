import Ship from './ship';

const GameBoard = () => {
  // Ship container
  const ships = [];

  // Create the Board array
  const board = (() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      arr.push(row);
      for (let j = 0; j < 10; j++) {
        const cell = [''];
        row.push(cell);
      }
    }
    return arr;
  })();

  // Check coordinates for validity
  const validateInterval = (a, b, c, d) => {
    if (a < 10 && a >= 0 && b < 10 && b >= 0) {
      if (c === 'h' && b + d <= 10) return true;
      if (c === 'v' && a + d <= 10) return true;
    }
    return false;
  };

  // Return board area
  const getBoardArea = (x, y, orientation, length) => {
    let field = 'Invalid area';
    if (orientation === 'h' && validateInterval(x, y, orientation, length)) {
      const row = board[x];
      field = row.slice(y, y + length);
    }
    if (orientation === 'v' && validateInterval(x, y, orientation, length)) {
      field = [];
      for (let i = x; i < (x + length); i++) {
        field.push(board[i][y]);
      }
    }
    return field;
  };

  return {
    // Return board
    getBoard() {
      return board;
    },

    // Check if a area is empty
    isEmpty(x, y, orientation, length) {
      let result;
      const area = getBoardArea(x, y, orientation, length);
      // Check if entire board is empty, every row should return true
      if (x === 'board') {
        if (board.every((row) => (row.every((cell) => cell[0] === '')) === true)) return true;
        return false;
      }
      // Check if area is empty or return invalid area input
      if (Array.isArray(area) && area.every((cell) => cell[0] === '')) {
        result = true;
      } else if ((Array.isArray(area) && area.every((cell) => cell[0] !== ''))) {
        result = false;
      } else result = area;
      return result;
    },

    placeShip(x, y, orientation, length) {
      const ship = Ship(length);
      let area;
      if (this.isEmpty(x, y, orientation, length)) {
        area = getBoardArea(x, y, orientation, length);
        area.forEach((cell) => cell[0] = ship);
      }
      return this;
    },
  };
};

export default GameBoard;
