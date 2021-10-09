import gameboard from "./gameboard";

const playerFactory = (name, type) => {
  const turn = (board, x, y) => {
    if (type === "player") {
      board.receiveAttack(board.boards.p1Shots, board.boards.p2Board, null, x, y)
    } else if (type === "cpu") {
      // ai stuff
    }
  };

  return { name, type, turn };
};

export default playerFactory;
