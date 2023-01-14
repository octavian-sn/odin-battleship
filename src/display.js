export const createGrid = function () {
  const firstBoard = document.getElementById('first-block');
  const secondBoard = document.getElementById('second-block');
  const pickBlock = document.getElementById('pick-block');
  firstBoard.innerHTML = '';
  secondBoard.innerHTML = '';
  const arr = [firstBoard, secondBoard, pickBlock];

  arr.forEach((board) => {
    const container = board;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        square.dataset.x = i;
        square.dataset.y = j;
        container.appendChild(square);
        // If elements are from pickBlock allow Dropping events
        if (board === arr[2]) {
          square.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
        }
      }
    }
  });
};

export const markMiss = function (cell) {
  cell.classList.add('miss');
  cell.classList.remove('cell');
};

export const markHit = function (cell) {
  cell.classList.add('hit');
  cell.classList.remove('cell');
};

export const loadModal = function () {
  document.getElementById('modal').classList.add('active');
  document.getElementById('overlay').classList.add('active');
};

export const renderShip = function (a) {
  const container = document.getElementById('piece-container');
  container.innerHTML = '';
  const piece = document.createElement('div');
  piece.dataset.length = a;
  piece.dataset.orientation = 'h';
  piece.id = 'piece';
  piece.classList.add('horizontal');
  piece.draggable = true;
  for (let i = 0; i < a; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    piece.appendChild(cell);
  }
  container.appendChild(piece);
};

export const changeOrientation = function () {
  const piece = document.getElementById('piece');
  if (piece.style.flexDirection === 'row') {
    piece.style.flexDirection = 'column';
    piece.dataset.orientation = 'v';
  } else {
    piece.style.flexDirection = 'row';
    piece.dataset.orientation = 'h';
  }
};

export const displayShip = function (arr, cells) {
  const index = arr[0].toString() + arr[1].toString();
  const cell = cells[Number(index)];
  cell.style.backgroundColor = 'rgb(59, 59, 59)';
};
