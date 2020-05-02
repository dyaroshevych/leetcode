const minRemoveToMakeValid = (str) => {
  const stack = [];
  let removeCount = (i = 0);

  while (i < str.length) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (str[i] === ")") {
        if (stack.length > 0) {
          stack.pop();
        } else {
          removeCount++;
          str = str.slice(0, i) + str.slice(i + 1);
          i--;
        }
      }
    }
    i++;
  }

  while (stack.length > 0) {
    if (str[i] === "(") {
      stack.pop();
      str = str.slice(0, i) + str.slice(i + 1);
    }
    i--;
  }

  return str;
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
