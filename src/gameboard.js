/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import shipFactory from "./ship.js";

const gameboard = () => {
  // need to keep track of sunken ships
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

  const createShips = () => {
    const ships = {
      carrier: shipFactory("carrier"),
      battleShip: shipFactory("battleShip"),
      cruiser: shipFactory("cruiser"),
      submarine: shipFactory("submarine"),
      destroyer: shipFactory("destroyer"),
    };
    return ships;
  };

  const ships = createShips();

  const shipStatus = () => {
    const statusArr = []
    Object.values(ships).forEach(ship => {
      statusArr.push(`${ship.name} ${ship.isSunk()}`)
    })
    return statusArr
  };

  const clearBoard = () => {
    for (let i = 0; i < playArea.length; i += 1) {
      playArea[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
  };

  const receiveAttack = (x, y) => {
    if (playArea[x][y] === 0) {
      shots[x][y] = "m";
    } else {
      switch (playArea[x][y]) {
        default:
          console.log("something went wrong");
          break;
        case "c":
          ships.carrier.hit();
          shots[x][y] = "x";
          break;
        case "b":
          ships.battleShip.hit();
          shots[x][y] = "x";
          break;
        case "cr":
          ships.cruiser.hit();
          shots[x][y] = "x";
          break;
        case "s":
          ships.submarine.hit();
          shots[x][y] = "x";
          break;
        case "d":
          ships.destroyer.hit();
          shots[x][y] = "x";
          break;
      }
    }
  };

  const placeShip = (type, x, y) => {
    let shipLen = type.len;
    while (shipLen > 0) {
      switch (type.name) {
        default:
          playArea[x + shipLen - 1][y] = "?";
          break;
        case "carrier":
          playArea[x + shipLen - 1][y] = "c";
          break;
        case "battleShip":
          playArea[x + shipLen - 1][y] = "b";
          break;
        case "cruiser":
          playArea[x + shipLen - 1][y] = "cr";
          break;
        case "submarine":
          playArea[x + shipLen - 1][y] = "s";
          break;
        case "destroyer":
          playArea[x + shipLen - 1][y] = "d";
          break;
      }
      shipLen -= 1;
    }
  };
  return {
    playArea,
    placeShip,
    clearBoard,
    ships,
    receiveAttack,
    shots,
    shipStatus,
  };
};

// const testGame = gameboard()
// testGame.placeShip(testGame.ships.battleShip, 0, 5);
// testGame.receiveAttack(0, 5);
// testGame.receiveAttack(1, 5);
// testGame.receiveAttack(2, 5);
// testGame.receiveAttack(3, 5);
// console.log(testGame.shipStatus())

export default gameboard;
