const canShipWithCapacity = (weights, D, capacity) => {
  let currWeight = 0;
  let daysNeeded = 1;

  for (let i = 0; i < weights.length; i++) {
    if (currWeight + weights[i] > capacity) {
      daysNeeded++;
      currWeight = 0;
    }

    currWeight += weights[i];
  }

  return daysNeeded <= D;
};

const shipWithinDays = (weights, D) => {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    max = Math.max(max, weights[i]);
    sum += weights[i];
  }

  let left = max;
  let right = sum;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canShipWithCapacity(weights, D, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
