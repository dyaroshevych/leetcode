const permute = nums => {
  const permutations = [];
  const go = (currentArr = [], visited = new Set()) => {
    if (currentArr.length === nums.length) {
      return permutations.push([...currentArr]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited.has(nums[i])) {
        visited.add(nums[i]);
        currentArr.push(nums[i]);

        go(currentArr, visited);

        currentArr.pop();
        visited.delete(nums[i]);
      }
    }
  };

  go();

  return permutations;
};

console.log(permute([1, 2, 3]));
