// INPUT: [ 1, 1, 1, 0 ]
// OUTPUT: false

const isOneBitCharacter = (bits) => {
  if (bits.length === 1) {
    return true;
  }

  let idx = 0;

  while (idx < bits.length - 2) {
    if (bits[idx] === 1) {
      idx += 2;
    } else {
      idx++;
    }
  }

  return bits[idx] === 0;
};

console.log(isOneBitCharacter([1, 1, 1, 0]));
