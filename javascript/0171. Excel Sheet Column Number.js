// INPUT: "AA"
// OUTPUT: 27

const titleToNumber = (s) => {
  let ans = 0,
    pow = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    ans += (s[i].charCodeAt(0) - 64) * pow;
    pow *= 26;
  }

  return ans;
};

console.log(titleToNumber("AA"));
