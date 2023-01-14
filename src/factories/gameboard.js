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

  // Random coordinates generator
  const randomCoord = (length) => {
    const coord = [];
    const orientation = ['h', 'v'];
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    for (let i = 0; i < 4; i++) {
      if (i === 2) coord.push(orientation[random(0, 1)]);
      else if (i === 3) coord.push(length);
      else coord.push(random(0, 9));
    }
    return coord;
  };

  // Return board area or 'invalid area' message
  const getBoardArea = (x, y, orientation = 'h', length = 1) => {
    let field = false;
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

  // For testing purposes~~
  const areas = [];

  return {
    // Return board
    getBoard() {
      return board;
    },

    // For testing purposes~~
    getCellsOfShip(x, y, orientation, length) {
      const cells = [];
      for (let i = 0; i < length; i++) {
        if (orientation === 'h') cells.push([x, y + i]);
        if (orientation === 'v') cells.push([x + i, y]);
      }
      return cells;
      // const arr = [];
      // board.forEach((row) => {
      //   row.forEach((cell) => {
      //     if (typeof cell[0] === 'object') arr.push(cell[0].getHealth());
      //   });
      // });
      // return {
      //   areas,
      //   arr,
      // };
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
      }
      return false;
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
        // For testing purposes~~
        areas.push([x, y, orientation, length]);
      }
      return this;
    },

    // Attack a position and return that position
    receiveAttack(x, y) {
      const cell = board[x][y][0];
      if (cell === 0 || cell === 1) return;
      if (typeof cell === 'object') {
        cell.hit();
        board[x][y][0] = 1;
      } else board[x][y][0] = 0;
      return board[x][y][0];
    },

    // Check if all ships have been sunk
    allSunk() {
      return ships.every((ship) => ship.isSunk() === true);
    },

    // Populate the board with random ships
    randomShips() {
      const shipLengths = [5, 4, 3, 2, 1];
      let coordinates = randomCoord(shipLengths[0]);

      while (ships.length < 5) {
        const condition = this.isEmpty(...coordinates);
        if (Array.isArray(condition) || condition === true) {
          this.placeShip(...coordinates);
          shipLengths.shift();
        } else coordinates = randomCoord(shipLengths[0]);
      }
      return this;
    },

  };
};

export default GameBoard;
