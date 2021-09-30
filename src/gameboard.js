/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import shipFactory from "./ship.js";

const gameboard = () => {
  const boards = {
    p1Board: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    p1Shots: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    p2Board: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    p2Shots: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  };

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
    for (let i = 0; i < boards.p1Board.length; i += 1) {
      boards.p1Board[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    for (let i = 0; i < boards.p1Shots.length; i += 1) {
      boards.p1Shots[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    for (let i = 0; i < boards.p2Board.length; i += 1) {
      boards.p2Board[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    for (let i = 0; i < boards.p2Shots.length; i += 1) {
      boards.p2Shots[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
  };

  const receiveAttack = (attacker, receiver, receiverShip, x, y) => {
    const currAttacker = attacker
    if (receiver[x][y] === 0) {
      currAttacker[x][y] = "m";
    } else {
      switch (receiver[x][y]) {
        default:
          console.log("something went wrong");
          break;
        case "c":
          receiverShip.carrier.hit();
          currAttacker[x][y] = "x";
          break;
        case "b":
          receiverShip.battleship.hit();
          currAttacker[x][y] = "x";
          break;
        case "cr":
          receiverShip.cruiser.hit();
          currAttacker[x][y] = "x";
          break;
        case "s":
          receiverShip.submarine.hit();
          currAttacker[x][y] = "x";
          break;
        case "d":
          receiverShip.destroyer.hit();
          currAttacker[x][y] = "x";
          break;
      }
    }
  };

  const placeShip = (player, type, x, y) => {
    const currPlayer = player
    let shipLen = type.len;
    while (shipLen > 0) {
      switch (type.name) {
        default:
          currPlayer[x + shipLen - 1][y] = "?";
          break;
        case "carrier":
          currPlayer[x + shipLen - 1][y] = "c";
          break;
        case "battleship":
          currPlayer[x + shipLen - 1][y] = "b";
          break;
        case "cruiser":
          currPlayer[x + shipLen - 1][y] = "cr";
          break;
        case "submarine":
          currPlayer[x + shipLen - 1][y] = "s";
          break;
        case "destroyer":
          currPlayer[x + shipLen - 1][y] = "d";
          break;
      }
      shipLen -= 1;
    }
  };
  return {
    boards,
    placeShip,
    clearBoard,
    p1Ships,
    p2Ships,
    receiveAttack,
    shipStatus,
    createShips,
  };
};

const testGame = gameboard();
testGame.placeShip(testGame.p1Ships.battleship, 0, 5);

export default gameboard;
