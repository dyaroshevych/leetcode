// INPUT: [ 100, 80, 60, 70, 60, 75, 85 ]
// OUTPUT: 1, 1, 1, 2, 1, 4, 6

class StackNode {
  constructor(val, weight) {
    this.val = val;
    this.weight = weight;
  }
}

class StockSpanner {
  constructor() {
    this.stack = [];
  }

  next(val) {
    const newNode = new StackNode(val, 1);

    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1].val <= val
    )
      newNode.weight += this.stack.pop().weight;

    this.stack.push(newNode);
    return newNode.weight;
  }
}

const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(85));
