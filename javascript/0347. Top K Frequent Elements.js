class Node {
  constructor(val, frequency) {
    this.val = val;
    this.frequency = frequency;
  }
}

class MaxHeap {
  constructor() {
    this.nums = [Infinity];
  }

  insert(node) {
    this.nums.push(node);

    let currIdx = this.nums.length - 1;
    while (
      this.nums[currIdx].frequency >
      this.nums[Math.floor(currIdx / 2)].frequency
    ) {
      [this.nums[currIdx], this.nums[Math.floor(currIdx / 2)]] = [
        this.nums[Math.floor(currIdx / 2)],
        this.nums[currIdx],
      ];
      currIdx = Math.floor(currIdx / 2);
    }
  }

  popMax() {
    const val = this.nums[1].val;
    this.nums[1] = this.nums[this.nums.length - 1];
    this.nums.pop();

    let currIdx = 1;
    while (currIdx * 2 < this.nums.length) {
      let maxIdx = currIdx * 2;
      if (currIdx * 2 + 1 < this.nums.length)
        maxIdx =
          this.nums[currIdx * 2].frequency >
          this.nums[currIdx * 2 + 1].frequency
            ? currIdx * 2
            : currIdx * 2 + 1;

      if (this.nums[maxIdx].frequency > this.nums[currIdx].frequency)
        [this.nums[currIdx], this.nums[maxIdx]] = [
          this.nums[maxIdx],
          this.nums[currIdx],
        ];
      else break;

      currIdx = maxIdx;
    }

    return val;
  }
}

const topKFrequent = (nums, k) => {
  const numsFrequency = {},
    numsHeap = new MaxHeap(),
    topFrequentNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (numsFrequency[nums[i]]) numsFrequency[nums[i]]++;
    else numsFrequency[nums[i]] = 1;
  }

  for (let num of Object.keys(numsFrequency)) {
    numsHeap.insert(new Node(num, numsFrequency[num]));
  }

  for (let _ = 0; _ < k; _++) {
    topFrequentNums.push(Number(numsHeap.popMax()));
  }

  return topFrequentNums;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
