import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
  const game = gameboard();
  let player1;
  let player2;
  let currShip;
  let currPlayer;

  function boardSetup() {
    let leftCol = 1;
    let shotCol = 1;
    let tileCount = -1;
    let xCount = -1;
    let shotCount = -1;
    let xShotCount = -1;
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
        tile.id = "playTile";
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
          // Dev
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
        if (v === 0) {
          tile.textContent = topRow[j];
        }

        if (j > 0 && v !== 0) {
          tile.classList.add(`x${xShotCount}`);
          tile.classList.add(`y${shotCount}`);
          // Dev
          // tile.textContent = `${xShotCount}, ${shotCount}`;
        }

        if (shotCount < 10) {
          shotCount += 1;
        } else {
          shotCount = 0;
        }

        if (j === 0 && v !== 0) {
          tile.textContent = shotCol;
          shotCol += 1;
        }
        
      }
      v += 1;
      xCount += 1;
      xShotCount += 1;
    }
  }

  function playerSetup() {
    const input = document.querySelector(".nameInput");
    const playerType = document.querySelector(".playerType");
    const desc = document.querySelector(".inputDesc");
    if (playerType.checked) {
      const player = playerFactory(input.value, playerType.value);
      input.value = "";
      desc.textContent = "Enter player 2 name:";
      return player;
    }
    const player = playerFactory(input.value, "ai");
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
        } else {
          const tile = document.querySelector(`.x${[row]}.y${[col]}`);
          tile.style.backgroundColor = "lightblue";
        }
      }
    }
  }

  const p1ShipsSelection = [
    "carrier",
    "battleship",
    "cruiser",
    "submarine",
    "destroyer",
  ];
  const p2ShipsSelection = [
    "carrier",
    "battleship",
    "cruiser",
    "submarine",
    "destroyer",
  ];

  function gameSetup() {
    if (p1ShipsSelection.length === 0 && p2ShipsSelection.length === 0) {
      document.querySelector(".shipSelect").hidden = true;
      document.querySelector(".playerForms").hidden = true;
      // some new function() to start the game
    } else {
      document.querySelector(".shipSelect").hidden = false;
      let currPlacement;
      if (p1ShipsSelection.length > 0) {
        currPlacement = p1ShipsSelection.pop();
        document.querySelector(
          ".gameMessage"
        ).textContent = `Player 1 place your ${currPlacement}`;
        boardRender(game.boards.p1Board);
        shipPlaceMenu(game.boards.p1Board, currPlacement);
      } else {
        currPlacement = p2ShipsSelection.pop();
        document.querySelector(
          ".gameMessage"
        ).textContent = `Player 2 place your ${currPlacement}`;
        boardRender(game.boards.p2Board);
        shipPlaceMenu(game.boards.p2Board, currPlacement);
      }
    }
  }

  function dropShip(event) {
    // need to be able to seperate out which board it goes to somehow
    const classCoords = event.target.classList.value;
    const coords = classCoords.split(/(\d)/);
    if (currPlayer === "p1") {
      game.placeShip(
        game.boards.p1Board,
        currShip,
        parseInt(coords[1], 10),
        parseInt(coords[3], 10)
      );
      boardRender(game.boards.p1Board);
    } else if (currPlayer === "p2") {
      game.placeShip(
        game.boards.p2Board,
        currShip,
        parseInt(coords[1], 10),
        parseInt(coords[3], 10)
      );
      boardRender(game.boards.p2Board);
    }
    const tiles = document.querySelectorAll("#playTile");
    tiles.forEach((tile) => {
      tile.removeEventListener("click", dropShip);
    });
    gameSetup();
  }

  function placeOnClick(ship) {
    currShip = ship;
    const tiles = document.querySelectorAll("#playTile");
    tiles.forEach((tile) => {
      tile.addEventListener("click", dropShip);
    });
  }

  function shipPlaceMenu(player, ship) {
    // need to differentiate between players like placeOnClick(game.currPlayer.carrier)
    if (player === game.boards.p1Board) {
      currPlayer = "p1";
      switch (ship) {
        default:
          console.log("something went wrong");
          break;
        case "carrier":
          placeOnClick(game.p1Ships.carrier);
          break;
        case "battleship":
          placeOnClick(game.p1Ships.battleship);
          break;
        case "cruiser":
          placeOnClick(game.p1Ships.cruiser);
          break;
        case "submarine":
          placeOnClick(game.p1Ships.submarine);
          break;
        case "destroyer":
          placeOnClick(game.p1Ships.destroyer);
          break;
      }
    } else if (player === game.boards.p2Board) {
      currPlayer = "p2";
      switch (ship) {
        default:
          console.log("something went wrong");
          break;
        case "carrier":
          placeOnClick(game.p2Ships.carrier);
          break;
        case "battleship":
          placeOnClick(game.p2Ships.battleship);
          break;
        case "cruiser":
          placeOnClick(game.p2Ships.cruiser);
          break;
        case "submarine":
          placeOnClick(game.p2Ships.submarine);
          break;
        case "destroyer":
          placeOnClick(game.p2Ships.destroyer);
          break;
      }
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

  // Dev Buttons
  const btn = document.querySelector(".getPlayers");
  btn.onclick = getPlayers;
  const shipsDev = document.querySelector(".getShips");
  shipsDev.onclick = getShips;
  const boardsDev = document.querySelector(".getBoards");
  boardsDev.onclick = getBoards;
  const shipTest = document.querySelector(".shipTest");
  shipTest.addEventListener("click", () => {
    game.placeShip(game.boards.p1Board, game.p1Ships.carrier, 0, 2);
  });
  const placeDev = document.querySelector(".placement");
  placeDev.addEventListener("click", () => {
    boardRender(game.boards.p1Board);
  });
  const clearBoardDev = document.querySelector(".clearBoard1");
  clearBoardDev.addEventListener("click", () => {
    boardRender(game.boards.p1Board);
  });
  const clearBoardDev2 = document.querySelector(".clearBoard2");
  clearBoardDev2.addEventListener("click", () => {
    boardRender(game.boards.p2Board);
  });

  return {
    boardSetup,
    player1,
    player2,
    getPlayers,
  };
})();

MAIN.boardSetup();
