const permuteUnique = nums => {
  const permutations = [];

  const go = (cur, rest) => {
    if (!rest.length) {
      permutations.push(cur);
      return;
    }

    for (let i = 0; i < rest.length; i++) {
      if (rest[i] !== rest[i - 1])
        go([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };

  go([], nums.sort());

  return permutations;
};

console.log(permuteUnique([1, 1, 2]));
