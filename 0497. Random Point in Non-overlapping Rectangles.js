class Solution {
  constructor(rects) {
    this.rects = rects;
    this.points = new Array(rects.length);

    let numPoints = 0;
    let index = 0;

    for (let [x1, y1, x2, y2] of rects) {
      numPoints += (x2 - x1 + 1) * (y2 - y1 + 1);
      this.points[index++] = numPoints;
    }

    this.totalPoints = this.points[index - 1];
  }

  pickPointFromRect([x1, y1, x2, y2]) {
    return [
      x1 + Math.floor(Math.random() * (x2 - x1 + 1)),
      y1 + Math.floor(Math.random() * (y2 - y1 + 1)),
    ];
  }

  pick() {
    const pointIndex = 1 + Math.floor(Math.random() * this.totalPoints);

    let index = 0;

    while (this.points[index] < pointIndex) {
      index++;
    }

    return this.pickPointFromRect(this.rects[index]);
  }
}

const solution = new Solution([
  [1, 1, 2, 2],
  [10, 10, 15, 15],
]);

console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
console.log(solution.pick());
