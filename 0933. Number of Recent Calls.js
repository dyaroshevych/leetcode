// INPUT: create -> ping(2) -> ping(100) -> ping(3000) -> ping(3002) -> ping(3101)
// OUTPUT: 1, 2, 3, 4, 3

class RecentCounter {
  constructor() {
    this.requests = [];
    this.timeFrameStartIndex = 0;
  }

  ping(timestamp) {
    this.requests.push(timestamp);

    while (this.requests[this.timeFrameStartIndex] < timestamp - 3000) {
      this.timeFrameStartIndex++;
    }

    if (this.timeFrameStartIndex * 2 > this.requests.length) {
      this.requests.splice(0, this.timeFrameStartIndex);
      this.timeFrameStartIndex = 0;
    }

    return this.requests.length - this.timeFrameStartIndex;
  }
}

const counter = new RecentCounter();
console.log(counter.ping(2)); // 1
console.log(counter.ping(100)); // 2
console.log(counter.ping(3000)); // 3
console.log(counter.ping(3002)); // 4
console.log(counter.ping(3101)); // 3
