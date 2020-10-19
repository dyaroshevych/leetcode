const removeElement = (arr, val) => {
  let l = (r = 0);

  if (!arr.length) {
    return 0;
  }

  while (r < arr.length) {
    while (arr[r] === val) {
      r++;
    }
    arr[l] = arr[r];
    l++;
    r++;
  }
  return l - (r === arr.length ? 0 : 1);
};

console.log(removeElement([], 2));
