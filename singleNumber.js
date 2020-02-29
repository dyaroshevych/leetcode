// INPUT: [9, 5, 4, 3, 4, 1, 5, 3, 9, 8, 8]
// OUTPUT: 1

const singleNumber = arr => {
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

console.log(singleNumber([4, 1, 2, 1, 2]));
