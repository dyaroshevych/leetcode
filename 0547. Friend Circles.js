// INPUT: [ [1, 1, 0], [1, 1, 0], [0, 0, 1] ]
// OUTPUT: 2

const findCircleNum = (M) => {
  const circles = new UnionFind(M.length);

  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M.length; j++) {
      if (M[i][j]) {
        circles.union(i, j);
      }
    }
  }

  return circles.components();
};

class UnionFind {
  constructor(size) {
    this.size = size;
    this.numComponents = size;

    this.id = new Array(size);
    this.sizes = new Array(size);

    for (let i = 0; i < size; i++) {
      this.sizes[i] = 1;
      this.id[i] = i;
    }
  }

  find(id) {
    let root = id;

    // find root of component
    while (this.id[root] !== root) {
      root = this.id[root];
    }

    // compress path
    while (id !== root) {
      const next = this.id[id];
      this.id[id] = root;
      id = next;
    }

    return root;
  }

  union(id1, id2) {
    const root1 = this.find(id1);
    const root2 = this.find(id2);

    if (root1 === root2) return;

    if (this.sizes[root1] < this.sizes[root2]) {
      this.id[root1] = root2;
      this.sizes[root2] += this.sizes[root1];
    } else {
      this.id[root2] = root1;
      this.sizes[root1] += this.sizes[root2];
    }

    this.numComponents--;
  }

  components() {
    return this.numComponents;
  }
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
