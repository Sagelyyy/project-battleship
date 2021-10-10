import "./modules/style.css";
import gameboard from "./gameboard";
import playerFactory from "./player";

const MAIN = (function () {
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
      v -= 1
    }
  }

  function playerSetup () {
    
  }

  return {
    boardSetup,
  };
})();

MAIN.boardSetup();
