const productExceptSelf = nums => {
  const leftProduct = new Array(nums.length);

  leftProduct[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    leftProduct[i] = leftProduct[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return leftProduct;
};

console.log(productExceptSelf([1, 2, 3, 4]));
