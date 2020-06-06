const reconstructQueue = (people) => {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

  const queue = [];

  people.forEach((person) => queue.splice(person[1], 0, person));

  return queue;
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);
