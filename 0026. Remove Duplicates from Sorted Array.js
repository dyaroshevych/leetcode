const removeDuplicates = arr => {
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

  return l;
};

console.log(removeDuplicates([1, 1]));
