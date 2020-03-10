const longestCommonPrefix = strs => {
  if (!strs[0]) {
    return "";
  }

  let longestPrefix = "";

  while (strs[0][longestPrefix.length]) {
    const nextSymbol = strs[0][longestPrefix.length];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][longestPrefix.length] !== nextSymbol) {
        return longestPrefix;
      }
    }
    longestPrefix += nextSymbol;
  }

  return longestPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
