// INPUT: "abcde", [ "aa", "ab", "ace", "abd", "acb" ]
// OUTPUT: 3

const numMatchingSubseq = (str, words) => {
  let count = 0;

  words.forEach((word) => {
    let pointer1 = 0,
      pointer2 = 0;

    while (pointer1 < str.length && pointer2 < word.length) {
      if (str[pointer1] === word[pointer2]) pointer2++;
      pointer1++;
    }

    if (pointer2 === word.length) count++;
  });

  return count;
};

console.log(numMatchingSubseq("abcde", ["aa", "ab", "ace", "abd", "acb"]));
