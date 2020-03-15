const duplicateZeros = arr => {
  let zeroCount = 0,
    _length = arr.length - 1;

  for (let left = 0; left <= _length; left++) {
    if (left > _length - zeroCount) break;
    if (arr[left] === 0) {
      if (left === _length - zeroCount) {
        arr[_length] = 0;
        _length--;
        break;
      }
      zeroCount++;
    }
  }

  let pointer = _length - zeroCount,
    i = _length;
  while (i >= 0) {
    arr[i] = arr[pointer];
    i--;
    if (arr[pointer] === 0) {
      arr[i] = 0;
      i--;
    }
    pointer--;
  }

  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
