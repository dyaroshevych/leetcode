const increasingTriplet = nums => {
  let small = (medium = Infinity);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) small = nums[i];
    else if (nums[i] <= medium) medium = nums[i];
    else return true;
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
