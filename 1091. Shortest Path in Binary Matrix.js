const shortestPathBinaryMatrix = (matrix) => {
  const N = matrix.length;

  if (matrix[0][0] || matrix[N - 1][N - 1]) {
    return -1;
  }

  const cells = new MyQueue();
  cells.enqueue([0, 0]);
  let distance = 1;

  while (cells.length) {
    const size = cells.length;

    for (let _ = 0; _ < size; _++) {
      const [i, j] = cells.dequeue();

      if (i === N - 1 && j === N - 1) {
        return distance;
      }

      for (let [nextI, nextJ] of getNeighbours(i, j)) {
        if (
          0 <= nextI &&
          nextI < N &&
          0 <= nextJ &&
          nextJ < N &&
          !matrix[nextI][nextJ]
        ) {
          cells.enqueue([nextI, nextJ]);
          matrix[nextI][nextJ] = 1;
        }
      }
    }

    distance++;
  }

  return -1;
};

const getNeighbours = (i, j) => [
  [i, j + 1],
  [i + 1, j + 1],
  [i + 1, j],
  [i + 1, j - 1],
  [i, j - 1],
  [i - 1, j - 1],
  [i - 1, j],
  [i - 1, j + 1],
];

class QueueNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const val = this.head.val;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return val;
  }
}

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
