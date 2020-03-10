const climbStairs = n => {
  if (n <= 1) {
    return 1;
  }
  let stair1 = 1,
    stair2 = 2;
  for (let i = 1; i < n - 1; i++) {
    [stair1, stair2] = [stair2, stair1 + stair2];
  }
  return stair2;
};

console.log(climbStairs(5));
