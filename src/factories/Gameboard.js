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

  // Return board area or 'invalid area' message
  const getBoardArea = (x, y, orientation = 'h', length = 1) => {
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

    // Check if area is empty, return true or false, or 'invalid area'
    isEmpty(x, y, orientation, length) {
      const area = getBoardArea(x, y, orientation, length);
      // Check if entire board is empty, every row should return true
      if (x === 'board') {
        if (board.every((row) => (row.every((cell) => cell[0] === '')) === true)) return true;
        return false;
      }
      // Check if area is empty or return invalid area input
      if (Array.isArray(area) && area.every((cell) => cell[0] === '')) {
        return true;
      } if ((Array.isArray(area) && area.every((cell) => cell[0] !== ''))) {
        return false;
      } return area;
    },

    // Place ship at coordinates if condition var is true or array type
    placeShip(x, y, orientation, length) {
      const condition = this.isEmpty(x, y, orientation, length);
      if (Array.isArray(condition) || condition === true) {
        const ship = Ship(length);
        const area = getBoardArea(x, y, orientation, length);
        // Place the ship in each cell from selected area
        area.forEach((cell) => cell[0] = ship);
        // Add ship to board's ships array
        ships.push(ship);
      }
      return this;
    },

    // Attack a position
    receiveAttack(x, y) {
      let cell = getBoardArea(x, y)[0][0];
      if (cell === 0 || cell === 1) return;
      if (typeof cell === 'object') cell = 1;
      else cell = 0;
      return cell;
    },

  };
};

export default GameBoard;
