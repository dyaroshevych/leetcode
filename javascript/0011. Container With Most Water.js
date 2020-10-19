// INPUT: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// OUTPUT: 49

const maxArea = heights => {
  let result = 0;

  let start = 0,
    end = heights.length - 1;
  while (start <= end) {
    result = Math.max(
      result,
      Math.min(heights[start], heights[end]) * (end - start)
    );
    if (heights[start] > heights[end]) {
      end--;
    } else {
      start++;
    }
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
