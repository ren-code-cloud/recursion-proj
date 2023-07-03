const mine = {
  gold: 2,
  left: {
    gold: 10
  },
  right: {
    gold: 15
  }
}

const mineGold = (object) => {
  let total = object.gold;
  
  if (object.left) {
    total += mineGold(object.left)
  }
  if (object.right) {
    total += mineGold(object.right)
  }
  return total;
}

console.log(mineGold(mine))