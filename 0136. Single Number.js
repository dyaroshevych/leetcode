// INPUT: [9, 5, 4, 3, 4, 1, 5, 3, 9, 8, 8]
// OUTPUT: 1

const singleNumberHashSet = arr => {
  const elements = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (elements.has(arr[i])) {
      elements.delete(arr[i]);
    } else {
      elements.add(arr[i]);
    }
  }
  return elements.values().next().value;
};

const singleNumber = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }

  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
