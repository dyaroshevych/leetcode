const majorityElement = (nums) => {
  let counter1 = 0;
  let candidate1 = null;
  let counter2 = 0;
  let candidate2 = null;

  for (let num of nums) {
    if (num === candidate1) {
      counter1++;
    } else if (num === candidate2) {
      counter2++;
    } else if (counter1 === 0) {
      counter1 = 1;
      candidate1 = num;
    } else if (counter2 === 0) {
      counter2 = 1;
      candidate2 = num;
    } else {
      counter1--;
      counter2--;
    }
  }

  const result = [];

  counter1 = counter2 = 0;

  for (let num of nums) {
    if (num === candidate1) {
      counter1++;
    } else if (num === candidate2) {
      counter2++;
    }
  }

  if (counter1 > nums.length / 3) {
    result.push(candidate1);
  }

  if (counter2 > nums.length / 3) {
    result.push(candidate2);
  }

  return result;
};

console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
