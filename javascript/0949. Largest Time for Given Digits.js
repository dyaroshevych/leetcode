// INPUT: [ 1, 2, 3, 4 ]
// OUTPUT: "23:41"

const largestTimeFromDigits = (digits) => {
  let max = -1;

  const checkValidity = (permutation) => {
    const hour = permutation[0] * 10 + permutation[1];
    const min = permutation[2] * 10 + permutation[3];

    if (hour < 24 && min < 60) {
      max = Math.max(max, hour * 60 + min);
    }
  };

  permute(digits, 0, checkValidity);

  if (max === -1) {
    return "";
  }

  const hour = Math.floor(max / 60);
  const min = max % 60;

  return `${hour >= 10 ? hour : `0${hour}`}:${min >= 10 ? min : `0${min}`}`;
};

const permute = (array, index, check) => {
  if (index === array.length) {
    check(array);
    return;
  }

  for (let i = index; i < array.length; i++) {
    [array[index], array[i]] = [array[i], array[index]];

    permute(array, index + 1, check);

    [array[index], array[i]] = [array[i], array[index]];
  }
};

console.log(largestTimeFromDigits([1, 2, 3, 4]));
