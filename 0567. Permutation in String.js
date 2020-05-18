const checkInclusion = (str1, str2) => {
  const chars = {};
  let uniqueCharsCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (chars[str1[i]]) chars[str1[i]]++;
    else {
      uniqueCharsCount++;
      chars[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (chars[str2[i]] !== undefined) {
      if (chars[str2[i]] === 0) uniqueCharsCount++;
      chars[str2[i]]--;
      if (chars[str2[i]] === 0) uniqueCharsCount--;
    }
  }

  if (uniqueCharsCount === 0) return true;

  for (let i = str1.length; i < str2.length; i++) {
    if (chars[str2[i]] !== undefined) {
      if (chars[str2[i]] === 0) uniqueCharsCount++;
      chars[str2[i]]--;
      if (chars[str2[i]] === 0) uniqueCharsCount--;
    }
    if (chars[str2[i - str1.length]] !== undefined) {
      if (chars[str2[i - str1.length]] === 0) uniqueCharsCount++;
      chars[str2[i - str1.length]]++;
      if (chars[str2[i - str1.length]] === 0) uniqueCharsCount--;
    }

    if (uniqueCharsCount === 0) return true;
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
