const shipFactory = (owner, cpu, type) => {
  const shipArr = [];
  let len;
  let name;
  switch (type) {
    default:
      name = "?";
      len = 1;
      break;
    case "carrier":
      name = "carrier";
      len = 5;
      break;
    case "battleship":
      name = "battleship";
      len = 4;
      break;
    case "cruiser":
      name = "cruiser";
      len = 3;
      break;
    case "submarine":
      name = "submarine";
      len = 3;
      break;
    case "destroyer":
      name = "destroyer";
      len = 2;
      break;
  }
  const hit = () => {
    if (shipArr.length < len) {
      shipArr.push("x");
    }
  };
  const isSunk = () => {
    let hitCount = 0;
    for (let i = 0; i < shipArr.length; i += 1) {
      if (shipArr[i] === "x") {
        hitCount += 1;
        if (hitCount === len) {
          return true;
        }
      }
    }
    return false;
  };
  return { owner, cpu, name, len, shipArr, hit, isSunk };
};

export default shipFactory;
