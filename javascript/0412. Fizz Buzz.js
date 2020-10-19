const fizzBuzz = (N) => {
  const nums = new Array(N);

  for (let i = 1; i <= N; i++) {
    let str = "";

    if (i % 3 === 0) {
      str += "Fizz";
    }

    if (i % 5 === 0) {
      str += "Buzz";
    }

    nums[i - 1] = str || String(i);
  }

  return nums;
};

console.log(fizzBuzz(16));
