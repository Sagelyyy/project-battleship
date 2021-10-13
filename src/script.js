import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
  const game = gameboard();
  let player1;
  let player2;

  function boardSetup() {
    let v = 11;
    let leftCol = 1
    let shotCol = 1
    const topRow = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    while (v > 0) {
      for (let i = 0; i < 11; i += 1) {
        const sb = document.querySelector(".sb");
        const tile = document.createElement("div");
        if(v === 11 && i > 0){
          tile.textContent = topRow[i]
        }
        if(i === 0 && v < 11){
          tile.textContent = leftCol
          leftCol += 1
        }
        tile.classList.add(`myTile${i}`);
        tile.id = `tile${i}`;
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightblue";
        tile.style.border = "2px solid black";
        sb.appendChild(tile);
      }
      for (let j = 0; j < 11; j += 1) {
        const gb = document.querySelector(".gb");
        const tile = document.createElement("div");
        if(v === 11 && j > 0){
          tile.textContent = topRow[j]
        }
        if(j === 0 && v < 11){
          tile.textContent = shotCol
          shotCol += 1
        }
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

  function gameSetup(currPlacement) {
    document.querySelector(".shipSelect").hidden = false;
    document.querySelector(".gameMessage").textContent = `Place your ${currPlacement}`
  }

  function shipPlaceMenu(ship){
    switch(ship){
      default: 
        console.log('something went wrong')
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
