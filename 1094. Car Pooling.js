const carPooling = (trips, capacity) => {
  const passengerChanges = {};

  let minStart = Infinity;
  let maxEnd = 0;

  for (let [numPassengers, start, end] of trips) {
    if (passengerChanges[start]) {
      passengerChanges[start] += numPassengers;
    } else {
      passengerChanges[start] = numPassengers;
    }

    if (passengerChanges[end]) {
      passengerChanges[end] -= numPassengers;
    } else {
      passengerChanges[end] = -numPassengers;
    }

    minStart = Math.min(minStart, start);
    maxEnd = Math.max(maxEnd, end);
  }

  let currNumPassengers = 0;

  for (let i = minStart; i <= maxEnd; i++) {
    currNumPassengers += passengerChanges[i] || 0;

    if (currNumPassengers > capacity) {
      return false;
    }
  }

  return true;
};

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    5
  )
);
