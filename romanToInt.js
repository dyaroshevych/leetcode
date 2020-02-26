/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

const romanToInt = str => {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    symbols[str[i]] < symbols[str[i + 1]]
      ? (sum -= symbols[str[i]])
      : (sum += symbols[str[i]]);
  }
  return sum;
};

console.log(romanToInt("IV"));
