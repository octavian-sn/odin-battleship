const setLength = (a) => {
  if (a > 4) return 4;
  if (a < 1) return 1;
  return a;
};

const Ship = (a) => {
  const length = setLength(a);
  let timesHit = 0;
  return {
    isSunk() {
      if (timesHit === length) return true;
      return false;
    },

    hit() {
      timesHit += 1;
      return this;
    },

    getHealth() {
      return length - timesHit;
    },

  };
};

export default Ship;
