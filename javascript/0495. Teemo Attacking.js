// INPUT: [ 1, 2 ], 2
// OUTPUT: 3

const findPoisonedDuration = (timeSeries, duration) => {
  if (timeSeries.length === 0) {
    return 0;
  }

  let poisonedDuration = duration;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    poisonedDuration += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }

  return poisonedDuration;
};

console.log(findPoisonedDuration([1, 2], 2));
