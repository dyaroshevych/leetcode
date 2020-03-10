class MinStack {
  constructor() {
    this.head = null;
  }

  push(val) {
    const prevMin = this.getMin();
    const min = prevMin !== null ? Math.min(val, prevMin) : val;
    this.head = { val: val, min, next: this.head };
  }

  pop() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  top() {
    if (!this.head) {
      return null;
    }
    return this.head.val;
  }

  getMin() {
    if (!this.head) {
      return null;
    }
    return this.head.min;
  }
}

const minStack = new MinStack();

minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
