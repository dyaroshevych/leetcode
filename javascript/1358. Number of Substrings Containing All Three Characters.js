// INPUT: "abcabc"
// OUTPUT: 10

const numberOfSubstrings = (str) => {
  const charsCount = new Object({ a: 0, b: 0, c: 0 });

  for (let i = 0; i <= 2; i++) charsCount[str[i]]++;

  let pointer1 = 0,
    pointer2 = 2,
    substringsCount = 0;

  while (true) {
    if (charsCount.a && charsCount.b && charsCount.c) {
      substringsCount += str.length - pointer2;
      charsCount[str[pointer1]]--;
      pointer1++;
    } else {
      pointer2++;
      if (pointer2 > str.length) break;
      charsCount[str[pointer2]]++;
    }
  }

  return substringsCount;
};

console.log(numberOfSubstrings("abcabc"));
