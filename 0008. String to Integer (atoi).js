const myAtoi = str => {
  if (!str) return 0;
  let startIdx = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      startIdx = i;
      break;
    }
  }

  if (
    (str[startIdx] < "0" || str[startIdx] > "9") &&
    str[startIdx] !== "-" &&
    str[startIdx] !== "+"
  ) {
    return 0;
  }

  let endIdx = str.length - 1;
  for (let i = startIdx + 1; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      endIdx = i - 1;
      break;
    }
  }

  let countTen = 1,
    result = 0;

  for (let i = endIdx; i >= startIdx; i--) {
    if (str[i] === "-") {
      result = -result;
    }
    if (str[i] !== "-" && str[i] !== "+") {
      result += Number(str[i]) * countTen;
      countTen *= 10;
    }
  }

  const BORDER = Math.pow(2, 31);

  if (result >= BORDER) {
    return BORDER - 1;
  }
  if (result < -BORDER) {
    return -BORDER;
  }
  return result;
};

console.log(myAtoi("-42 and some words"));
