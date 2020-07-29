// O(n) time | O(1) space
const maxProfit = (prices) => {
  if (prices.length <= 1) {
    return 0;
  }

  // hold stock, can sell
  let stateA = -prices[0];

  // just sold, have to rest
  let stateB = 0;

  // can buy
  let stateC = 0;

  for (let i = 0; i < prices.length; i++) {
    [stateA, stateB, stateC] = [
      Math.max(stateA, stateC - prices[i]),
      stateA + prices[i],
      Math.max(stateB, stateC),
    ];
  }

  return Math.max(stateB, stateC);
};

console.log(maxProfit([1, 2, 3, 4, 0, 5, 7, 10]));
console.log(maxProfit([2, 1, 2, 0, 1]));
