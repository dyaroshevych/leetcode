// INPUT: [ 1, 2, 3, 4 ], [ 1, 4 ]
// OUTPUT: 1

const findRadius = (houses, heaters) => {
  heaters.sort((a, b) => a - b);

  let minRadius = 0;
  for (let i = 0; i < houses.length; i++) {
    let low = 0,
      high = heaters.length - 1,
      currMinRadius = 0;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);

      if (houses[i] < heaters[mid]) high = mid;
      else if (houses[i] > heaters[mid]) low = mid + 1;
      else break;
    }

    if (heaters[low] !== houses[i])
      currMinRadius = Math.min(
        Math.abs(heaters[low] - houses[i]),
        low > 0 ? houses[i] - heaters[low - 1] : Infinity,
        low < heaters.length - 1 ? heaters[low + 1] - houses[i] : Infinity
      );

    minRadius = Math.max(minRadius, currMinRadius);
  }

  return minRadius;
};

console.log(findRadius([1, 2, 3, 4], [1, 4]));
