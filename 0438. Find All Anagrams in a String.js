const findAnagrams = (str, input) => {
  const letters = new Map();

  for (let i = 0; i < input.length; i++) {
    if (letters.has(input[i])) letters.set(input[i], letters.get(input[i]) + 1);
    else letters.set(input[i], 1);
  }

  const anagrams = [];
  let idx = 0,
    counter = letters.size;

  const changeLetterCountByVal = (index, val) => {
    if (letters.has(str[index])) {
      if (letters.get(str[index]) === 0) counter++;

      letters.set(str[index], letters.get(str[index]) + val);

      if (letters.get(str[index]) === 0) counter--;
    }
  };

  while (idx <= str.length) {
    if (counter === 0) anagrams.push(idx - input.length);

    changeLetterCountByVal(idx, -1);

    if (idx >= input.length) {
      changeLetterCountByVal(idx - input.length, 1);
    }

    idx++;
  }

  if (counter === 0) anagrams.push(idx - input.length);

  return anagrams;
};

console.log(findAnagrams("cbaebabacd", "abc"));
