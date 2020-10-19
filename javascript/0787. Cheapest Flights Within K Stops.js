class Node {
  constructor(val, priority, count) {
    this.val = val;
    this.priority = priority;
    this.count = count;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [Infinity];
  }

  enqueue(val, priority, count) {
    this.queue.push(new Node(val, priority, count));

    let idx = this.queue.length - 1;

    while (idx > 1) {
      if (this.queue[idx].priority < this.queue[Math.floor(idx / 2)].priority)
        [this.queue[idx], this.queue[Math.floor(idx / 2)]] = [
          this.queue[Math.floor(idx / 2)],
          this.queue[idx],
        ];
      else break;

      idx = Math.floor(idx / 2);
    }
  }

  dequeue() {
    if (this.queue.length === 1) return null;

    const node = this.queue[1];

    this.queue[1] = this.queue[this.queue.length - 1];
    this.queue.pop();

    let idx = 1;

    while (idx * 2 < this.queue.length) {
      let minChildIdx = idx * 2;

      if (
        minChildIdx + 1 < this.queue.length &&
        this.queue[minChildIdx].priority > this.queue[minChildIdx + 1].priority
      )
        minChildIdx++;

      if (this.queue[idx].priority > this.queue[minChildIdx].priority)
        [this.queue[idx], this.queue[minChildIdx]] = [
          this.queue[minChildIdx],
          this.queue[idx],
        ];
      else break;

      idx = minChildIdx;
    }

    return node;
  }

  isEmpty() {
    return this.queue.length === 1;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacentcyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentcyList[vertex]) this.adjacentcyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacentcyList[vertex1].push({ node: vertex2, weight });
  }

  dijkstra(start, finish, max) {
    const queue = new PriorityQueue();

    queue.enqueue(start, 0, -1);

    while (!queue.isEmpty()) {
      const { val, priority, count } = queue.dequeue();

      if (val === finish) return priority;
      if (count === max) continue;

      this.adjacentcyList[val].forEach(({ node, weight }) =>
        queue.enqueue(node, weight + priority, count + 1)
      );
    }

    return -1;
  }
}

const findCheapestPrice = (N, flights, start, finish, max) => {
  const graph = new WeightedGraph();

  flights.forEach(([city1, city2, cost]) => {
    graph.addVertex(city1);
    graph.addVertex(city2);
    graph.addEdge(city1, city2, cost);
  });

  return graph.dijkstra(start, finish, max);
};

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 2],
      [1, 2, 1],
      [2, 0, 10],
    ],
    1,
    2,
    1
  )
);
