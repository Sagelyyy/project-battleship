import "./modules/style.css";

const MAIN = (function () {
  function boardSetup() {
    let v = 8;
    while (v > 0) {
      for (let i = 0; i < 8; i += 1) {
        const gb = document.querySelector(".gb");
        const tile = document.createElement("div");
        tile.style.width = "50px";
        tile.style.height = "50px";
        tile.style.backgroundColor = "red";
        tile.style.border = "3px solid black";
        gb.appendChild(tile);
      }
      v -= 1
    }
  }

  return {
    boardSetup,
  };
})();

MAIN.boardSetup();
