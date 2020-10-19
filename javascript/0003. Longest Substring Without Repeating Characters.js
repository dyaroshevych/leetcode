// INPUT: "pwwkew"
// OUTPUT: 3

const lengthOfLongestSubstring = str => {
  let startPointer = (endPointer = maxLength = 0);
  const characters = new Set();

  while (endPointer < str.length) {
    if (characters.has(str[endPointer])) {
      maxLength = Math.max(maxLength, endPointer - startPointer);
      characters.delete(str[startPointer++]);
    } else {
      characters.add(str[endPointer++]);
    }
  }

  maxLength = Math.max(maxLength, endPointer - startPointer);

  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
