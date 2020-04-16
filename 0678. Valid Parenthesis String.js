const checkValidString = (str) => {
  const brackets = [],
    stars = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      brackets.push(i);
    } else if (str[i] === ")") {
      if (brackets.length > 0) {
        brackets.pop();
      } else if (stars.length > 0) {
        stars.pop();
      } else {
        return false;
      }
    } else {
      stars.push(i);
    }
  }

  for (let i = brackets.length - 1; i >= 0; i--) {
    if (stars.length === 0 || brackets[i] > stars[stars.length - 1])
      return false;
    stars.pop();
  }

  return true;
};

console.log(checkValidString("(*))"));
