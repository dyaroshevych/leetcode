// INPUT: "hello", "ll"
// OUTPUT: 2

const strStr = (str, val) => {
  if (val === "") {
    return 0;
  }

  for (let i = 0; i < str.length; i++) {
    const currentStr = str.substring(i, i + val.length);
    if (currentStr === val) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("hello", "ll"));
