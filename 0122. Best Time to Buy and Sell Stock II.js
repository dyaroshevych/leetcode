// INPUT: [ 7, 1, 5, 3, 6, 4 ]
// OUTPUT: 7

const maxProfit = (prices) => {
  let i = (profit = 0);
  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++;
    profit -= prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++;
    profit += prices[i];
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
