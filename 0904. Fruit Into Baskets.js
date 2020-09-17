const totalFruit = (nums) => {
  let start = 0;
  let maxLength = 0;

  const window = new Window();

  for (let end = 0; end < nums.length; end++) {
    window.add(nums[end], end);

    while (window.size > 2) {
      window.delete(nums[start], start++);
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

class Window {
  constructor() {
    this.size = 0;
    this.lastOccurrences = {};
  }

  add(num, index) {
    if (this.lastOccurrences[num] === undefined) {
      this.size++;
    }

    this.lastOccurrences[num] = index;
  }

  delete(num, index) {
    if (this.lastOccurrences[num] === index) {
      this.size--;
      delete this.lastOccurrences[num];
    }
  }
}

console.log(totalFruit([0, 1, 2, 2, 1, 2, 0, 0, 1, 2, 2, 3]));
