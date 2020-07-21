const maxDistToClosest = (seats) => {
  let lastOccupiedSeatIndex = -1;
  let maxDistance = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      let currDistance = Math.floor((i - lastOccupiedSeatIndex) / 2);

      if (lastOccupiedSeatIndex === -1) {
        currDistance = i;
      }

      maxDistance = Math.max(maxDistance, currDistance);

      lastOccupiedSeatIndex = i;
    }
  }

  maxDistance = Math.max(maxDistance, seats.length - lastOccupiedSeatIndex - 1);

  return maxDistance;
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
