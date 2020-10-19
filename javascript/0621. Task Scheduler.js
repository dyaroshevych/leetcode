// INPUT: [ "A", "B", "B", "C", "C", "C" ], 2
// OUTPUT: 7

const leastInterval = (tasks, cooldown) => {
  const tasksSet = {};

  let maxVal = 0;
  let maxValCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasksSet[tasks[i]]) {
      tasksSet[tasks[i]]++;
    } else {
      tasksSet[tasks[i]] = 1;
    }

    if (tasksSet[tasks[i]] > maxVal) {
      maxVal = tasksSet[tasks[i]];
      maxValCount = 1;
    } else if (tasksSet[tasks[i]] === maxVal) {
      maxValCount++;
    }
  }

  return Math.max(tasks.length, (maxVal - 1) * (cooldown + 1) + maxValCount);
};

console.log(leastInterval(["A", "B", "B", "C", "C", "C"], 2));
// C B A C B  _ C
