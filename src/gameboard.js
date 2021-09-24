/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
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

  const createShips = () => {
    const ships = {
      carrier: shipFactory(5),
      battleShip: shipFactory(4),
      cruiser: shipFactory(3),
      submarine: shipFactory(3),
      destroyer: shipFactory(2),
    };
    return ships;
  };

  const ships = createShips();

  const clearBoard = () => {
    for (let i = 0; i < playArea.length; i += 1) {
      playArea[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
  };

  // Gameboards should have a receiveAttack function
  // that takes a pair of coordinates, determines
  // whether or not the attack hit a ship and then
  // sends the ‘hit’ function to the correct ship, or
  // records the coordinates of the missed shot.

  const receiveAttack = (x, y) => {
    const shots = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    if (playArea[x][y] === 0) {
      shots[x][y] = "m";
    } else {
      switch (playArea[x][y]) {
        default:
          console.log("something went wrong");
          break;
        case "c":
          ships.carrier.hit();
          break;
        case "b":
          ships.battleShip.hit();
          break;
        case "cr":
          ships.cruiser.hit();
          break;
        case "s":
          ships.submarine.hit();
          break;
        case "d":
          console.log('d')
          ships.destroyer.hit();
          break;
      }
    }
  };

  const placeShip = (type, x, y) => {
    let shipLen = type.len;
    while (shipLen > 0) {
      switch (type.len) {
        default:
          playArea[x + shipLen - 1][y] = "?";
          break;
        case 5:
          playArea[x + shipLen - 1][y] = "c";
          break;
        case 4:
          playArea[x + shipLen - 1][y] = "b";
          break;
        case 3:
          playArea[x + shipLen - 1][y] = "cr";
          break;
        case 2:
          playArea[x + shipLen - 1][y] = "d";
          break;
      }
      shipLen -= 1;
    }
  };
  return { playArea, placeShip, clearBoard, ships, receiveAttack };
};

export default gameboard;
