// INPUT: [ 1, 2, 3, 4 ]
// OUTPUT: [ 24, 12, 8, 6 ]

const productExceptSelf = nums => {
  const products = new Array(nums.length);

  products[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    products[i] = products[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] = products[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return products;
};

console.log(productExceptSelf([1, 2, 3, 4]));
