// INPUT: "23"
// OUTPUT: [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]

const letterCombinations = num => {
  if (!num.length) {
    return [];
  }
  const arr = [];
  const addCombination = (num, str) => {
    const keyboard = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz"
    };

    if (num.length === 0) {
      arr.push(str);
      return;
    }

    const currentLetters = keyboard[num[0]];
    for (let i = 0; i < currentLetters.length; i++) {
      addCombination(num.slice(1), str + currentLetters[i]);
    }
  };
  addCombination(num, "");

  return arr;
};

console.log(letterCombinations("23"));
