const backspaceCompare = (s1, s2) => {
  let pointer1 = s1.length - 1,
    pointer2 = s2.length - 1,
    backspaceCount1 = (backspaceCount2 = 0);

  while (pointer1 >= 0 && pointer2 >= 0) {
    while (backspaceCount1 > 0 || s1[pointer1] === "#") {
      if (s1[pointer1] === "#") {
        backspaceCount1++;
      } else {
        backspaceCount1--;
      }
      pointer1--;
    }

    while (backspaceCount2 > 0 || s2[pointer2] === "#") {
      if (s2[pointer2] === "#") {
        backspaceCount2++;
      } else {
        backspaceCount2--;
      }
      pointer2--;
    }

    if (s1[pointer1] !== s2[pointer2]) return false;
    pointer1--;
    pointer2--;
  }

  let charsCount = 0;
  while (pointer1 >= 0) {
    if (s1[pointer1] === "#") {
      charsCount--;
    } else {
      charsCount++;
    }
    pointer1--;
  }

  if (charsCount > 0) return false;

  charsCount = 0;
  while (pointer2 >= 0) {
    if (s2[pointer2] === "#") {
      charsCount--;
    } else {
      charsCount++;
    }
    pointer2--;
  }

  return charsCount <= 0;
};

console.log(backspaceCompare("bbbextm", "bbb#extm"));
console.log(backspaceCompare("nzp#o#g", "b#nzp#o#g"));
console.log(backspaceCompare("rheyggodcclgstf", "#rheyggodcclgstf"));
