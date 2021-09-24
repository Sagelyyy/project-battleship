const shipFactory = (len) => {
  const shipArr = [];
  const hit = () => {
    if(shipArr.length < len){
      shipArr.push('x')
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
