const isAlienSorted = (words, order) => {
  for (let i = 1; i < words.length; i++) {
    const str1 = words[i - 1],
      str2 = words[i];

    let equalCount = 0;

    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
      const diff = order.indexOf(str1[i]) - order.indexOf([str2[i]]);
      if (diff > 0) return false;
      if (diff < 0) break;
      if (diff === 0) equalCount++;
    }

    if (equalCount === str2.length && equalCount < str1.length) return false;
  }

  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
