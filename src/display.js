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
