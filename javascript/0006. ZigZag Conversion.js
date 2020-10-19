const convert = (s, rows) => {
  if (rows === 1) return s;
  let slow = (fast = 0),
    result = "";

  while (slow < rows && slow < s.length) {
    result += s[fast];
    let nextStep = fast + 2 * (rows - slow - 1);
    if (rows - slow === 1) {
      nextStep = fast + 2 * slow;
    }

    if (nextStep >= s.length) {
      fast = ++slow;
    } else {
      result += s[nextStep];

      if (slow === 0) {
        fast = nextStep + 2 * (rows - slow - 1);
      } else {
        fast = nextStep + 2 * slow;
      }

      if (fast >= s.length) {
        fast = ++slow;
      }
    }
  }

  return result;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));

// P   A   H   N
// A P L S I I G
// Y   I   R

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
