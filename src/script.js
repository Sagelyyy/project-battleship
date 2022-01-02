import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
  const game = gameboard();
  let player1;
  let player2;
  let currShip;
  let currPlayer;
  let devMode = false;
  document.querySelector(".roundButton").style.visibility = "hidden";
  let devSection = document.querySelector('.dev')

  if(devMode === true){
    devSection.style.visibility = 'visible'
  }else{
    devSection.style.visibility = 'hidden'
  }

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
        tile.id = "shotsTile";
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightgrey";
        tile.style.border = "2px solid black";
        gb.appendChild(tile);
        if (v === 0) {
          tile.textContent = topRow[j];
        }

        if (j > 0 && v !== 0) {
          tile.classList.add(`sx${xShotCount}`);
          tile.classList.add(`sy${shotCount}`);
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
    console.log("===== P1 =====");
    console.log(game.boards.p1Board);
    console.log(game.boards.p1Shots);
    console.log("===== P2 =====");
    console.log(game.boards.p2Board);
    console.log(game.boards.p2Shots);
  }

  function boardRender(board) {
    if (board === game.boards.p1Board || board === game.boards.p2Board) {
      for (let row = 0; row < board.length; row += 1) {
        for (let col = 0; col < board[row].length; col += 1) {
          if (board[row][col] !== 0) {
            const tile = document.querySelector(`.x${[row]}.y${[col]}`);
            tile.style.backgroundColor = "green";
          } else {
            const tile = document.querySelector(`.x${[row]}.y${[col]}`);
            tile.style.backgroundColor = "lightblue";
          }
        }
      }
    } else if (board === game.boards.p1Shots || board === game.boards.p2Shots) {
      for (let row = 0; row < board.length; row += 1) {
        for (let col = 0; col < board[row].length; col += 1) {
          if (board[row][col] === 0) {
            const tile = document.querySelector(`.sx${[row]}.sy${[col]}`);
            tile.style.backgroundColor = "lightgrey";
          }
          if (board[row][col] === "x") {
            const tile = document.querySelector(`.sx${[row]}.sy${[col]}`);
            tile.style.backgroundColor = "red";
          } else if (board[row][col] === "m") {
            const tile = document.querySelector(`.sx${[row]}.sy${[col]}`);
            tile.style.backgroundColor = "blue";
          }
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
      document.querySelector(".playerForms").style.visibility = "hidden";
      currPlayer = "p1";
      gameRound();
    } else {
      document.querySelector(".playerForms").style.visibility = "hidden";
      let currPlacement;
      if (p1ShipsSelection.length > 0) {
        currPlacement = p1ShipsSelection.pop();
        document.querySelector(
          ".gameMessage"
        ).textContent = `${player1.name} place your ${currPlacement}`;
        boardRender(game.boards.p1Board);
        shipPlaceMenu(game.boards.p1Board, currPlacement);
      } else {
        currPlacement = p2ShipsSelection.pop();
        document.querySelector(
          ".gameMessage"
        ).textContent = `${player2.name} place your ${currPlacement}`;
        boardRender(game.boards.p2Board);
        shipPlaceMenu(game.boards.p2Board, currPlacement);
      }
    }
  }

  function fire(event) {
    const classCoords = event.target.classList.value;
    const coords = classCoords.split(/(\d)/);
    const tiles = document.querySelectorAll("#shotsTile");

    switch (currPlayer) {
      default:
        console.log("something went wrong in fire");
        break;
      case "p1":
        boardRender(game.boards.p1Shots);
        game.receiveAttack(
          game.boards.p1Shots,
          game.boards.p2Board,
          parseInt(coords[1], 10),
          parseInt(coords[3], 10)
        );
        boardRender(game.boards.p1Shots);
        currPlayer = "p2";
        tiles.forEach((tile) => {
          tile.removeEventListener("click", fire);
        });
        preRound();
        break;
      case "p2":
        boardRender(game.boards.p2Shots);
        game.receiveAttack(
          game.boards.p2Shots,
          game.boards.p1Board,
          parseInt(coords[1], 10),
          parseInt(coords[3], 10)
        );
        boardRender(game.boards.p2Shots);
        currPlayer = "p1";
        tiles.forEach((tile) => {
          tile.removeEventListener("click", fire);
        });
        preRound();
        break;
    }
  }

  function gameStatus() {
    if (
      game.p1Ships.battleship.isSunk() === true &&
      game.p1Ships.carrier.isSunk() === true &&
      game.p1Ships.cruiser.isSunk() === true &&
      game.p1Ships.submarine.isSunk() === true &&
      game.p1Ships.destroyer.isSunk() === true
    ) {
      game.gameOver = true;
      player1.loser = true;
    }

    if (
      game.p2Ships.battleship.isSunk() === true &&
      game.p2Ships.carrier.isSunk() === true &&
      game.p2Ships.cruiser.isSunk() === true &&
      game.p2Ships.submarine.isSunk() === true &&
      game.p2Ships.destroyer.isSunk() === true
    ) {
      game.gameOver = true;
      player2.loser = true;
    }
  }

  function gameRound() {
    document.querySelector(".roundButton").style.visibility = "hidden";
    if (currPlayer === "p1") {
      boardRender(game.boards.p1Board);
      boardRender(game.boards.p1Shots);
      const gameMsg = document.querySelector(".shipSelect");
      gameMsg.textContent = `${player1.name} take your shot!`;
    } else {
      boardRender(game.boards.p2Board);
      boardRender(game.boards.p2Shots);
      const gameMsg = document.querySelector(".shipSelect");
      gameMsg.textContent = `${player2.name} take your shot!`;
    }
    const tiles = document.querySelectorAll("#shotsTile");
    tiles.forEach((tile) => {
      tile.addEventListener("click", fire);
    });
  }

  function preRound() {
    gameStatus()
    if (game.gameOver === false) {
      const gameMsg = document.querySelector(".shipSelect");
      if(currPlayer === 'p1')
      {
        gameMsg.textContent = `${player1.name} click next to start your turn!`
      }else{
        gameMsg.textContent = `${player2.name} click next to start your turn!`
      }
      document.querySelector(".roundButton").style.visibility = "visible";
      const next = document.querySelector(".nextTurn");
      next.onclick = function () {
        gameRound();
      };
    } else {
      const gameMsg = document.querySelector(".shipSelect");
      if(player1.loser === true){
        gameMsg.textContent = `Game Over, ${player2.name} wins!`
      }else{
        gameMsg.textContent = `Game Over, ${player1.name} wins!`
      }
      
    }
  }

  function dropShip(event) {
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

  const shotsBoardDev = document.querySelector(".shotsBoard1");
  shotsBoardDev.addEventListener("click", () => {
    boardRender(game.boards.p1Shots);
  });
  const shotsBoardDev2 = document.querySelector(".shotsBoard2");
  shotsBoardDev2.addEventListener("click", () => {
    boardRender(game.boards.p2Shots);
  });
  const gameStatusBtn = document.querySelector('.gameStatus')
  gameStatusBtn.addEventListener("click" , () => {
    gameStatus()
    console.log(game.gameOver)
  })

  return {
    boardSetup,
    player1,
    player2,
    getPlayers,
  };
})();

MAIN.boardSetup();
