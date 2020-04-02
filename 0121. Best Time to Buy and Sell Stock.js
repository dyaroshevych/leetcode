// INPUT: [ 7, 1, 5, 3, 6, 4 ]
// OUTPUT: 5

const maxProfit = prices => {
  let minprice = Infinity,
    maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }

  return maxprofit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
