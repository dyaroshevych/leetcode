// INPUT: gas: [ 1, 2, 3, 4, 5 ]
//        cost:[ 3, 4, 5, 1, 2 ]
// OUTPUT: 3

const canCompleteCircuit = (gas, cost) => {
  let currTotal = 0;
  let minSum = Infinity;
  let minSumIndex = -1;

  for (let i = 0; i < gas.length; i++) {
    currTotal += gas[i] - cost[i];

    if (currTotal < minSum) {
      minSum = currTotal;
      minSumIndex = i;
    }
  }

  if (currTotal < 0) {
    return -1;
  }

  return (minSumIndex + 1) % gas.length;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
