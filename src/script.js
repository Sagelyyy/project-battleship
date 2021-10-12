import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
  const game = gameboard();
  let player1;
  let player2;

  function boardSetup() {
    let v = 8;
    while (v > 0) {
      for (let i = 0; i < 8; i += 1) {
        const sb = document.querySelector(".sb");
        const tile = document.createElement("div");
        tile.classList.add(`myTile${i}`);
        tile.id = `tile${i}`;
        tile.textContent = i;
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightblue";
        tile.style.border = "2px solid black";
        sb.appendChild(tile);
      }
      for (let j = 0; j < 8; j += 1) {
        const gb = document.querySelector(".gb");
        const tile = document.createElement("div");
        tile.classList.add("shotsTile");
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightgrey";
        tile.style.border = "2px solid black";
        gb.appendChild(tile);
      }
      v -= 1;
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
    board = game.boards.p1Board
    for (let row = 0; row < board.length; row += 1) {
      for (let col = 0; col < board[row].length; col += 1) {
        if (board[row][col] !== 0) {
          const tiles = document.querySelectorAll(`.myTile${col}`);
          for (let i = 0; i < board.length; i += 1) {
            tiles[row].style.backgroundColor = "red";
          }
        }
      }
    }
  }

  function gameSetup() {
    document.querySelector(".shipSelect").hidden = false;
    document.querySelector(".carrierBtn").onclick =
      alert('ph')
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
  const placeDev = document.querySelector('.placement')
  placeDev.addEventListener('click', function(){boardRender(game.boards.p1Board)})

  return {
    boardSetup,
    player1,
    player2,
    getPlayers,
  };
})();

MAIN.boardSetup();
