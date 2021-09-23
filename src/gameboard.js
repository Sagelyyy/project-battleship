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

  // Gameboards should have a receiveAttack function 
  // that takes a pair of coordinates, determines 
  // whether or not the attack hit a ship and then 
  // sends the ‘hit’ function to the correct ship, or 
  // records the coordinates of the missed shot.

  const receiveAttack = (x ,y) => {
    // stuff
  }

  const createShips = () => {
    const ships = {
      carrier: shipFactory(5),
      battleShip: shipFactory(4),
      cruiser: shipFactory(3),
      submarine: shipFactory(3),
      destroyer: shipFactory(2)
    }
    return ships
  }

  const ships = createShips()

  const placeShip = (x, y) => {
    // ships.forEach(ship =>{ }) ??  maybe  ??
    for (let i = 0; i < playArea.length; i += 1) {
      let shipLen = ships.carrier.len;
      while (shipLen > 0) {
        playArea[(x + shipLen)-1][y] = 1;
        shipLen -= 1;
      }
    }
  };
  return { playArea, placeShip, clearBoard, ships};
};

const testGame = gameboard()
testGame.placeShip(0, 5)
console.log(testGame.playArea)
console.log(testGame.ships)

export default gameboard;
