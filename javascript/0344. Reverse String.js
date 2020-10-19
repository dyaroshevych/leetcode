const reverseString = str => {
  const strLength = str.length;
  for (let i = 0; i < strLength / 2; i++) {
    const temp = str[i];
    str[i] = str[strLength - i - 1];
    str[strLength - i - 1] = temp;
  }

  return str;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
