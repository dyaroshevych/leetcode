const subsets = (nums) => {
  const result = [];

  const getSubsets = (arr, idx) => {
    if (idx === nums.length) {
      result.push(arr);
      return;
    }
    getSubsets(arr, idx + 1);
    getSubsets([...arr, nums[idx]], idx + 1);
  };

  getSubsets([], 0);

  return result;
};

console.log(subsets([1, 2, 3]));
