// INPUT: "11", "1"
// OUTPUT: "100"

const addBinary = (str1, str2) => {
  let pointer = 0,
    ans = "",
    temp = 0;

  while (
    str1[str1.length - pointer - 1] ||
    str2[str2.length - pointer - 1] ||
    temp
  ) {
    let currentDigit =
      (str1[str1.length - pointer - 1] === "1" ? 1 : 0) +
      (str2[str2.length - pointer - 1] === "1" ? 1 : 0);

    if (currentDigit + temp >= 2) {
      let i = currentDigit + temp;
      currentDigit = i % 2;
      temp = Math.floor((i - currentDigit) / 2);
    } else {
      currentDigit += temp;
      temp = 0;
    }

    ans = String(currentDigit) + ans;
    pointer++;
  }

  return ans;
};

console.log(addBinary("11", "1"));
