// INPUT: [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ]
// OUTPUT: 5
// ARRAY: [ 0, 1, 2, 3, 4, 2, 2, 3, 3, 4 ]

const removeDuplicates = (arr) => {
  let l = 0,
    r = 0;
  while (r < arr.length) {
    arr[l] = arr[r];
    l++;
    r++;
    while (arr[r] === arr[r - 1]) {
      r++;
    }
  }

  console.log(arr);
  return l;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
