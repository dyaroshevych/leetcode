const canMakeBouquetesWithinDays = (
  bloomDays,
  numBouquetes,
  bouquetSize,
  maxDays
) => {
  let currNumBouquetes = 0;

  let currIndex = 0;

  while (currIndex < bloomDays.length) {
    const prevIndex = currIndex;

    while (currIndex < bloomDays.length && bloomDays[currIndex] <= maxDays) {
      currIndex++;
    }

    currNumBouquetes += Math.floor((currIndex - prevIndex) / bouquetSize);
    currIndex++;
  }

  return currNumBouquetes >= numBouquetes;
};

const minDays = (bloomDays, numBouquetes, bouquetSize) => {
  if (numBouquetes * bouquetSize > bloomDays.length) {
    return -1;
  }

  let min = 0;
  let sum = 0;

  for (let i = 0; i < bloomDays.length; i++) {
    min = Math.min(min, bloomDays[i]);
    sum += bloomDays[i];
  }

  let left = min;
  let right = sum;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canMakeBouquetesWithinDays(bloomDays, numBouquetes, bouquetSize, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
