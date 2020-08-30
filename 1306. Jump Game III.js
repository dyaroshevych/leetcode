// DFS O(N) time | O(N) space
const canReach = (nums, start, visited = new Set(), depth = 1) => {
  if (nums[start] === 0) {
    return true;
  }

  if (depth === nums.length) {
    return false;
  }

  visited.add(nums[start]);

  if (
    (start - nums[start] >= 0 &&
      !visited.has(start - nums[start]) &&
      canReach(nums, start - nums[start], visited, depth + 1)) ||
    (start + nums[start] >= 0 &&
      !visited.has(start + nums[start]) &&
      canReach(nums, start + nums[start], visited, depth + 1))
  ) {
    return true;
  }

  return false;
};

// // BFS O(N) time | O(N) space
// const canReach = (nums, start) => {
//     if (nums[start] === 0) {
//         return true;
//     }

//     const visited = new Set();
//     let currIndices = new Set([start]);

//     for (let _ = 0; _ < nums.length; _++) {
//         const nextIndices = new Set();

//         for (let currIndex of currIndices.values()) {
//             visited.add(currIndex);

//             if (nums[currIndex] === 0) {
//                 return true;
//             }

//             if (
//                 currIndex - nums[currIndex] >= 0 &&
//                 !visited.has(currIndex - nums[currIndex])
//             ) {
//                 nextIndices.add(currIndex - nums[currIndex]);
//             }

//             if (
//                 currIndex + nums[currIndex] < nums.length &&
//                 !visited.has(currIndex + nums[currIndex])
//             ) {
//                 nextIndices.add(currIndex + nums[currIndex]);
//             }
//         }

//         currIndices = nextIndices;
//     }

//     return false;
// };

console.log(canReach([4, 2, 3, 0, 1, 3, 1, 2], 5));
