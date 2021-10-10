import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
  const game = gameboard()
  let player1;
  let player2;

  function boardSetup() {
    let v = 8;
    while (v > 0) {
      for (let i = 0; i < 8; i += 1) {
        const sb = document.querySelector(".sb");
        const tile = document.createElement("div");
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "lightblue";
        tile.style.border = "2px solid black";
        sb.appendChild(tile);
      }
      for (let j = 0; j < 8; j += 1) {
        const gb = document.querySelector(".gb");
        const tile = document.createElement("div");
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
    desc.textContent = 'Enter player 2 name:'
    return player;
  }

  function getPlayers(){
      console.log(player1)
      console.log(player2)
  }

  function getShips(){
    console.log(game.p1Ships)
    console.log(game.p2Ships)
  }

  function gameSetup(){
    //logic to place ships
  }

  const nameSubmit = document.querySelector(".nameSubmit");
  nameSubmit.onclick = function () {
    if ((player1 === undefined)) {
      player1 = playerSetup();
    } else {
      player2 = playerSetup();
      gameSetup()
    }
  };

  const btn = document.querySelector('.getPlayers')
  btn.onclick = getPlayers
  const shipsDev = document.querySelector('.getShips')
  shipsDev.onclick = getShips

  return {
    boardSetup,
    player1,
    player2,
    getPlayers
  };
})();

MAIN.boardSetup();
