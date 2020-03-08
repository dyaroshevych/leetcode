// baaab -> babab
// baaaab -> baabab
// baaaaab -> baabaab
// baaaaaab -> baabaaab -> baababab

const minMoves = str => {
  let currentCount = (min = i = 0);
  do {
    if (i === 0 || str[i] === str[i - 1]) currentCount++;
    else {
      if (currentCount > 2) {
        min += Math.floor(currentCount / 3);
      }
      currentCount = 1;
    }
    i++;
  } while (i <= str.length);

  return min;
};

console.log(minMoves("baabbbaabbabbbbbbbbb"));
