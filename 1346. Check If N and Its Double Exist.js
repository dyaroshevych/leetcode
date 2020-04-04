const checkIfExist = (arr) => {
  const nums = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (nums.has(arr[i] / 2) || nums.has(arr[i] * 2)) return true;
    nums.add(arr[i]);
  }

  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
