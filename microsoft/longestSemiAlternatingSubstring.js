const longestSubstr = str => {
  let slow = (fast = max = 0);

  while (fast < str.length) {
    const pointer = fast;
    while (str[fast] === str[pointer]) fast++;
    if (fast - pointer > 2) {
      max = Math.max(max, pointer - slow + 2);
      slow = fast - 2;
    }
    if (fast === str.length) {
      max = Math.max(max, fast - slow);
    }
  }

  return max;
};

console.log(longestSubstr("baaabbabbb"));
