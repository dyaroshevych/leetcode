const getPermutation = (n, k) => {
  const factorial = [1];

  for (let i = 1; i < n; i++) factorial.push(factorial[i - 1] * i);

  const nums = Array.from({ length: n }, (v, i) => i + 1);

  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    const idx = Math.ceil(k / factorial[i]) - 1;
    result += nums[idx];
    nums.splice(idx, 1);
    k -= factorial[i] * idx;
  }

  return result;
};

console.log(getPermutation(3, 3));
