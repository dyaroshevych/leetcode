// INPUT: "HelloWorld   "
// OUTPUT: 10

const lengthOfLastWord = (str) => {
  let len = 0;
  str = str.trim();

  while (len < str.length && str[str.length - len - 1] !== " ") {
    len++;
  }

  return len;
};

console.log(lengthOfLastWord("HelloWorld   "));
