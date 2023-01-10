const Player = (board) => {
  const attacks = (() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arr.push([i, j]);
      }
    }
    return arr;
  })();
  const recommendedAttacks = [];

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  return {
    attacksAvailable() {
      return attacks.length;
    },

  };
};

export default Player;
