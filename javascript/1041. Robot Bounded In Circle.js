const isRobotBounded = (instructions) => {
  // directions: 0 - bottom, 1 - left, 2 - top, 3 - right
  let direction = 2;
  let xShift = 0;
  let yShift = 0;

  // if direction is {0, 2}, we change y-shift by "direction - 1" [-1 for bottom, +1 for top]
  // if direction is {1, 3}, we change x-shift by "direction - 2" [-1 for left, +1 for right]
  for (let instruction of instructions) {
    switch (instruction) {
      case "G":
        // direction is {0, 2}
        if (direction % 2 === 0) {
          yShift += direction - 1;
        }
        // direction is {1, 3}
        else {
          xShift += direction - 2;
        }
        break;
      case "L":
        direction = (direction + 3) % 4;
        break;
      case "R":
        direction = (direction + 1) % 4;
    }
  }

  return direction !== 2 || (xShift === 0 && yShift === 0);
};

console.log(isRobotBounded("GGLLGG"));
