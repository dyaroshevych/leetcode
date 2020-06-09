const isSubsequence = (str1, str2) => {
  let pointer1 = 0,
    pointer2 = 0;

  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) pointer1++;
    pointer2++;
  }

  return pointer1 === str1.length;
};

console.log(isSubsequence("ace", "abcde"));
