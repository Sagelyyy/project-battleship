import shipFactory from "./ship.js";

const gameboard = () => {
  const playArea = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const placeShip = (x, y) => {
    const newShip = shipFactory(3);
    for (let i = 0; i < playArea.length; i += 1) {
      playArea[x][y] = 1
    }
  };
  return {playArea, placeShip };
};

const testGame = gameboard();
console.log(testGame.playArea);
testGame.placeShip(0,5)
console.log(testGame.playArea);


export default gameboard;
