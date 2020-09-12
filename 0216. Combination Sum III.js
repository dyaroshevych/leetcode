// INPUT: K = 3, N = 9
// OUTPUT: [ [ 1, 2, 6 ], [ 1, 3, 5 ], [ 2, 3, 4 ] ]

const combinationSum3 = (K, target) => {
  const combinations = [];

  fillCombinations(combinations, K, target, 1, 0, []);

  return combinations;
};

const fillCombinations = (
  combinations,
  K,
  target,
  currStart,
  currSum,
  currCombination
) => {
  if (currSum > target || currCombination.length > K) {
    return;
  }

  if (currSum === target) {
    if (currCombination.length === K) {
      combinations.push([...currCombination]);
    }
    return;
  }

  for (let num = currStart; num <= 9; num++) {
    currCombination.push(num);

    fillCombinations(
      combinations,
      K,
      target,
      num + 1,
      currSum + num,
      currCombination
    );

    currCombination.pop();
  }
};

console.log(combinationSum3(3, 9));
