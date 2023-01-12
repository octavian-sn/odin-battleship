const Player = (board) => {
  // Array containing all 100 available attacks
  const attacks = (() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arr.push([i, j]);
      }
    }
    return arr;
  })();

  // Array containing attacks recommended after hitting a ship
  const recommendedAttacks = [];

  // Return random number to select a random attack
  const random = () => Math.floor(Math.random() * ((attacks.length - 1) - 0 + 1) + 0);

  // Return index of attack to remove recommended attack from the 'attacks' array
  const indxOfAtk = (a, b) => attacks.findIndex((element) => element[0] === a && element[1] === b);

  // Add attacks to recommended list
  const addRecommended = (x, y) => {
    if (x - 1 >= 0) recommendedAttacks.push([x - 1, y]);
    if (x + 1 <= 9) recommendedAttacks.push([x + 1, y]);
    if (y - 1 >= 0) recommendedAttacks.push([x, y - 1]);
    if (y + 1 <= 9) recommendedAttacks.push([x, y + 1]);
  };

  return {
    // How many attacks are left
    attacksAvailable() {
      return attacks.length;
    },

    // Execute an attack
    attack() {
      let coordinates;

      // Check if we have recommended attacks or use a random attack
      if (recommendedAttacks.length > 0) {
        coordinates = recommendedAttacks[0];
        recommendedAttacks.shift();
      } else {
        coordinates = attacks[random()];
      }

      // Set coordinates
      const result = board.receiveAttack(...coordinates);
      const x = coordinates[0];
      const y = coordinates[1];

      // If the hit was a success, add the adjacent coordinates to recommended attacks
      if (result === 1) addRecommended(x, y);

      // Remove the attack from the main attacks array
      attacks.splice(indxOfAtk(x, y), 1);

      return [x, y, result];
    },
  };
};

export default Player;
