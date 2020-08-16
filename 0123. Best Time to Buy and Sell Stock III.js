// O(N) time | O(1) space
const maxProfit = (prices) => {
  let boughtFirst = -Infinity;
  let soldFirst = 0;
  let boughtSecond = -Infinity;
  let soldSecond = 0;

  for (let i = 0; i < prices.length; i++) {
    soldSecond = Math.max(soldSecond, boughtSecond + prices[i]);
    boughtSecond = Math.max(boughtSecond, soldFirst - prices[i]);
    soldFirst = Math.max(soldFirst, boughtFirst + prices[i]);
    boughtFirst = Math.max(boughtFirst, -prices[i]);
  }

  return soldSecond;
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));

// 3 10

// O(N) time | O(N) space
// const maxProfit = (prices) => {
//   if (prices.length === 0) {
//     return 0;
//   }

//   const startProfits = new Array(prices.length);
//   startProfits[0] = 0;

//   const endProfits = new Array(prices.length);
//   endProfits[prices.length - 1] = 0;

//   let startMin = prices[0];
//   let endMax = prices[prices.length - 1];

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < startMin) {
//       startMin = prices[i];
//     }

//     startProfits[i] = Math.max(startProfits[i - 1], prices[i] - startMin);

//     if (prices[prices.length - i - 1] > endMax) {
//       endMax = prices[prices.length - i - 1];
//     }

//     endProfits[prices.length - i - 1] = Math.max(
//       endProfits[prices.length - i],
//       endMax - prices[prices.length - i - 1]
//     );
//   }

//   let max = Math.max(0, endProfits[0]);

//   for (let i = 1; i < prices.length; i++) {
//     max = Math.max(max, startProfits[i - 1] + endProfits[i]);
//   }

//   return max;
// };
