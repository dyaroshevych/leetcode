const smallestString = str => {
  let idx = 0;

  while (idx < str.length && str[idx] < str[idx + 1]) idx++;

  return str.slice(0, idx) + str.slice(idx + 1);
};

console.log(smallestString("abczd"));
