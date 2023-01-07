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
  const validateInterval = (a, b, c) => {
    if (a < 10 && a >= 0 && b < 10 && b >= 0 && c + b < 9) return true;
  };

  // Return board area
  const getBoardArea = (x, y, orientation, length) => {
    let field = 'Invalid area';
    if (orientation === 'h' && validateInterval(x, y, length)) {
      const row = board[x];
      field = row.slice(y, length + 1);
    }
    if (orientation === 'v' && validateInterval(x, y, length)) {
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
      if (Array.isArray(area) && area.every((cell) => cell[0] === '')) {
        result = true;
      } else if ((Array.isArray(area) && area.every((cell) => cell[0] !== ''))) {
        result = false;
      } else result = area;
      return result;
    },

  };
};

export default GameBoard;
