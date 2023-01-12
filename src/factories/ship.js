const Ship = (a) => {
  const length = a;
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
