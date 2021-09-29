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

  const createShips = (owner, cpu) => {
    const ships = {
      carrier: shipFactory(owner, cpu, "carrier"),
      battleship: shipFactory(owner, cpu, "battleship"),
      cruiser: shipFactory(owner, cpu, "cruiser"),
      submarine: shipFactory(owner, cpu, "submarine"),
      destroyer: shipFactory(owner, cpu, "destroyer"),
    };
    return ships;
  };

  // const ships = createShips();
  const p1Ships = createShips("player1", false);
  const p2Ships = createShips("player2", true);

  const shipStatus = (player) => {
    const statusArr = [];
    Object.values(player).forEach((ship) => {
      statusArr.push(`${ship.name} ${ship.isSunk()}`);
    });
    return statusArr;
  };

  const clearBoard = () => {
    for (let i = 0; i < playArea.length; i += 1) {
      playArea[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
  };

  const receiveAttack = (receiver, x, y) => {
    if (playArea[x][y] === 0) {
      shots[x][y] = "m";
    } else {
      switch (playArea[x][y]) {
        default:
          console.log("something went wrong");
          break;
        case "c":
          receiver.carrier.hit();
          shots[x][y] = "x";
          break;
        case "b":
          receiver.battleship.hit();
          shots[x][y] = "x";
          break;
        case "cr":
          receiver.cruiser.hit();
          shots[x][y] = "x";
          break;
        case "s":
          receiver.submarine.hit();
          shots[x][y] = "x";
          break;
        case "d":
          receiver.destroyer.hit();
          shots[x][y] = "x";
          break;
      }
    }
  };


  // maybe make a create player function

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
        case "battleship":
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
    p1Ships,
    p2Ships,
    receiveAttack,
    shots,
    shipStatus,
    createShips,
  };
};

const testGame = gameboard();
testGame.placeShip(testGame.p1Ships.battleship, 0, 5);

export default gameboard;
