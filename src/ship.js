const shipFactory = (len) => {
  const shipArr = [];
  for (let i = 0; i < len; i += 1) {
    shipArr.push(null);
  }
  const hit = (num) => {
    for (let i = 0; i < shipArr.length; i += 1) {
      if (shipArr[num] == null) {
        shipArr[num] = "x";
      }
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
  return { len, hit, isSunk, shipArr };
};

export default shipFactory;
