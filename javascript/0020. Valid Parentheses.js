// INPUT: "([)]"
// OUTPUT: false

const isValid = (str) => {
  const brackets = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      brackets.push(str[i]);
    } else if (str[i] === ")") {
      if (brackets.pop() !== "(") {
        return false;
      }
    } else if (str[i] === "}") {
      if (brackets.pop() !== "{") {
        return false;
      }
    } else if (str[i] === "]") {
      if (brackets.pop() !== "[") {
        return false;
      }
    }
  }

  return !brackets.pop();
};

console.log(isValid("([)]"));
