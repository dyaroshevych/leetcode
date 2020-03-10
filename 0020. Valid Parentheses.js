class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    this.head = new Node(value, this.head);
  }

  pop() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
    return null;
  }
}

const isValid = str => {
  const brackets = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      brackets.push(str[i]);
    } else if (str[i] === ")") {
      if (brackets.pop() !== "(") {
        return false;
      }
    } else if (str[i] === "}") {
      if (brackets.pop() !== "{") {
        return false;
      }
    } else if (str[i] === "]") {
      if (brackets.pop() !== "[") {
        return false;
      }
    }
  }

  return !brackets.pop();
};

console.log(isValid("([)]"));
