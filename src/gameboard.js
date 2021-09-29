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

  const createShips = (owner) => {
    const ships = {
      carrier: shipFactory(owner, "carrier"),
      battleShip: shipFactory(owner, "battleShip"),
      cruiser: shipFactory(owner, "cruiser"),
      submarine: shipFactory(owner, "submarine"),
      destroyer: shipFactory(owner, "destroyer"),
    };
    return ships;
  };

  // set up two variables for ships, two different owners..
  // like const p1Ships = createShips('player1') or something

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
    createShips
  };
};

const testGame = gameboard()
testGame.placeShip(testGame.ships.battleShip, 0, 5);


export default gameboard;
