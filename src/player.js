import gameboard from "./gameboard";

let id = 1;

const playerFactory = (name, type) => {
  const loser = false;
  const setId = () => {
    const playerID = `player${id}`;
    id += 1;
    return playerID;
  };
  const playerID = setId();
  const turn = (game, x, y) => {
    if(playerID === 'player1'){
      game.receiveAttack(
        game.boards.p1Shots,
        game.boards.p2Board,
        x,
        y
      )
    }
  };

  return { name, type, turn, playerID, loser };
};

export default playerFactory;
