// INPUT: " hello! world "
// OUTPUT: "world hello!"

const reverseWords = (str) => {
  str = str.trim();
  const words = [];

  for (let i = 0; i < str.length; i++) {
    let j = i;
    while (j < str.length && str[j] !== " ") j++;
    if (i < j) words.push(str.slice(i, j));
    i = j;
  }

  return words.reverse().join(" ");
};

console.log(reverseWords(" hello! world "));
