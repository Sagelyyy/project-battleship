import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
  const game = gameboard();
  let player1;
  let player2;

  function boardSetup() {
    // separate out setting the tile class names. maybe?
    let leftCol = 1;
    let shotCol = 1;
    let tileCount = -1;
    let xCount = -1;
    let v = 0;
    const topRow = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    while (v < 11) {
      for (let i = 0; i < 11; i += 1) {
        const sb = document.querySelector(".sb");
        const tile = document.createElement("div");
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightblue";
        tile.style.border = "2px solid black";
        if (v === 0) {
          tile.textContent = topRow[i];
        }
        if (i === 0 && v !== 0) {
          tile.textContent = leftCol;
          leftCol += 1;
        }
        if (i > 0 && v !== 0) {
          tile.classList.add(`x${xCount}`);
          tile.classList.add(`y${tileCount}`);
          // tile.textContent = `${xCount}, ${tileCount}`;
        }

        if (tileCount < 10) {
          tileCount += 1;
        } else {
          tileCount = 0;
        }
        sb.appendChild(tile);
      }
      for (let j = 0; j < 11; j += 1) {
        const gb = document.querySelector(".gb");
        const tile = document.createElement("div");
        tile.classList.add("shotsTile");
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightgrey";
        tile.style.border = "2px solid black";
        gb.appendChild(tile);
      }
      v += 1;
      xCount += 1;
    }
  }

  function playerSetup() {
    const input = document.querySelector(".nameInput");
    const desc = document.querySelector(".inputDesc");
    const player = playerFactory(input.value, "player");
    input.value = "";
    desc.textContent = "Enter player 2 name:";
    return player;
  }

  function getPlayers() {
    console.log(player1);
    console.log(player2);
  }

  function getShips() {
    console.log(game.p1Ships);
    console.log(game.p2Ships);
  }

  function getBoards() {
    console.log(game.boards.p1Board);
    console.log(game.boards.p2Board);
  }

  function boardRender(board) {
    for (let row = 0; row < board.length; row += 1) {
      for (let col = 0; col < board[row].length; col += 1) {
        if (board[row][col] !== 0) {
          const tile = document.querySelector(`.x${[row]}.y${[col]}`);
          tile.style.backgroundColor = "red";
        }
      }
    }
  }

  function gameSetup(currPlacement) {
    document.querySelector(".shipSelect").hidden = false;
    document.querySelector(
      ".gameMessage"
    ).textContent = `Place your ${currPlacement}`;
  }

  function shipPlaceMenu(ship) {
    switch (ship) {
      default:
        console.log("something went wrong");
        break;
      case "carrier":
        break;
      case "battleship":
        break;
      case "cruiser":
        break;
      case "submarine":
        break;
      case "destroyer":
        break;
    }
  }

  const nameSubmit = document.querySelector(".nameSubmit");
  nameSubmit.onclick = function () {
    if (player1 === undefined) {
      player1 = playerSetup();
    } else {
      player2 = playerSetup();
      gameSetup();
    }
  };

  const btn = document.querySelector(".getPlayers");
  btn.onclick = getPlayers;
  const shipsDev = document.querySelector(".getShips");
  shipsDev.onclick = getShips;
  const boardsDev = document.querySelector(".getBoards");
  boardsDev.onclick = getBoards;
  const shipTest = document.querySelector('.shipTest')
  shipTest.addEventListener("click", () => {
    game.placeShip(game.boards.p1Board, game.p1Ships.carrier, 0, 2);
  });
  const placeDev = document.querySelector(".placement");
  placeDev.addEventListener("click", () => {
    boardRender(game.boards.p1Board);
  });


  return {
    boardSetup,
    player1,
    player2,
    getPlayers,
  };
})();

MAIN.boardSetup();
