// INPUT: 7, 4
// OUTPUT: [ 1, 2, 3, 1 ]

const distributeCandies = (candies, numPeople) => {
  let given = 0;

  const distribution = new Array(numPeople).fill(0);

  while (given < candies) {
    distribution[given % numPeople] += ++given;

    candies -= given;
  }

  distribution[given % numPeople] += candies;

  return distribution;
};

console.log(distributeCandies(7, 4));
