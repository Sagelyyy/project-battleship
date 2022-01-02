/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import shipFactory from "./ship.js";

const gameboard = () => {
  let gameOver = false;
  const boards = {
    p1Board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    p1Shots: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    p2Board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    p2Shots: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

  const receiveAttack = (attackerShots, receiverBoard, x, y) => {
    const currAttacker = attackerShots;
    if (receiverBoard[x][y] === 0) {
      currAttacker[x][y] = "m";
    } else {
      if (attackerShots === boards.p1Shots) {
        switch (receiverBoard[x][y]) {
          default:
            console.log("something went wrong");
            break;
          case "c":
            p2Ships.carrier.hit();
            currAttacker[x][y] = "x";
            break;
          case "b":
            p2Ships.battleship.hit();
            currAttacker[x][y] = "x";
            break;
          case "cr":
            p2Ships.cruiser.hit();
            currAttacker[x][y] = "x";
            break;
          case "s":
            p2Ships.submarine.hit();
            currAttacker[x][y] = "x";
            break;
          case "d":
            p2Ships.destroyer.hit();
            currAttacker[x][y] = "x";
            break;
        }
      }
      if (attackerShots === boards.p2Shots) {
        switch (receiverBoard[x][y]) {
          default:
            console.log("something went wrong");
            break;
          case "c":
            p1Ships.carrier.hit();
            currAttacker[x][y] = "x";
            break;
          case "b":
            p1Ships.battleship.hit();
            currAttacker[x][y] = "x";
            break;
          case "cr":
            p1Ships.cruiser.hit();
            currAttacker[x][y] = "x";
            break;
          case "s":
            p1Ships.submarine.hit();
            currAttacker[x][y] = "x";
            break;
          case "d":
            p1Ships.destroyer.hit();
            currAttacker[x][y] = "x";
            break;
        }
      }
    }
  };

  const placeShip = (playerBoard, type, x, y) => {
    const currPlayer = playerBoard;
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
    gameOver
  };
};

export default gameboard;
