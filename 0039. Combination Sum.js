const combinationSum = (candidates, target) =>
  getSums([], [], candidates, 0, target);

const getSums = (sums, currSumSet, candidates, start, target) => {
  if (target < 0) {
    return;
  }

  if (target === 0) {
    sums.push([...currSumSet]);
  }

  for (let i = start; i < candidates.length; i++) {
    currSumSet.push(candidates[i]);

    getSums(sums, currSumSet, candidates, i, target - candidates[i]);

    currSumSet.pop();
  }

  return sums;
};

console.log(combinationSum([2, 3, 6, 7], 7));
