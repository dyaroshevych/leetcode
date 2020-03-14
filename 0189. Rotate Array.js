// INPUT: [ 1, 2, 3, 4, 5, 6, 7 ], 2
// OUTPUT: [ 6, 7, 1, 2, 3, 4, 5 ]

const rotate = (nums, k) => {
  k %= nums.length;

  let count = 0;
  for (let i = 0; count < nums.length; i++) {
    let current = i,
      prev = nums[current];

    do {
      const next = (current + k) % nums.length,
        temp = nums[next];
      nums[next] = prev;

      current = next;
      prev = temp;
      count++;
    } while (i !== current);
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2));
