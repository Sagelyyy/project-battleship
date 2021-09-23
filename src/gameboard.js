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
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const clearBoard = () => {
    for(let i = 0; i < playArea.length; i += 1){
      playArea[i] = [0, 0, 0, 0, 0, 0, 0, 0]
    }
  }
  const placeShip = (x, y) => {
    const newShip = shipFactory(3);
    for (let i = 0; i < playArea.length; i += 1) {
      let shipLen = newShip.len;
      while (shipLen > 0) {
        playArea[(x + shipLen)-1][y] = 1;
        shipLen -= 1;
      }
    }
  };
  return { playArea, placeShip, clearBoard };
};

export default gameboard;
