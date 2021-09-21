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
  const isSunk = () => false;
  return { len, hit, isSunk, shipArr };
};
