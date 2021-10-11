import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
  const game = gameboard();
  let player1;
  let player2;

  function boardSetup() {
    let v = 2;
    while (v > 0) {
      for (let i = 0; i < 32; i += 1) {
        const sb = document.querySelector(".sb");
        const tile = document.createElement("div");
        tile.classList.add('myTile')
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightblue";
        tile.style.border = "2px solid black";
        sb.appendChild(tile);
      }
      for (let j = 0; j < 32; j += 1) {
        const gb = document.querySelector(".gb");
        const tile = document.createElement("div");
        tile.classList.add('shotsTile')
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

  function renderShipPlacement(ship){
    let len
    switch(ship){
      default:
        console.log('something went wrong')
        break;
      case 'carrier':
        len = 5
        // hover over tile and display green for length of ship
    }
  }

  function gameSetup() {
    document.querySelector(".shipSelect").hidden = false;
    document.querySelector(".carrierBtn").onclick = renderShipPlacement('carrier')
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

  return {
    boardSetup,
    player1,
    player2,
    getPlayers,
  };
})();

MAIN.boardSetup();
