const canEatWithSpeed = (piles, hours, speed) => {
  let hoursNeeded = 0;

  for (let i = 0; i < piles.length; i++) {
    hoursNeeded += Math.ceil(piles[i] / speed);
  }

  return hoursNeeded <= hours;
};

const minEatingSpeed = (piles, hours) => {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < piles.length; i++) {
    max = Math.max(max, piles[i]);
    sum += piles[i];
  }

  let left = Math.ceil(sum / hours);
  let right = max;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canEatWithSpeed(piles, hours, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
