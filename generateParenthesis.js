const generateParenthesis = n => {
  const ans = [];

  const addParenthesis = (str, opened) => {
    if (opened < 0) {
      return;
    }
    if (opened === 0 && str.length === n * 2) {
      ans.push(str);
    }
    if (str.length === n * 2) {
      return;
    }
    addParenthesis(str + ")", opened - 1);
    addParenthesis(str + "(", opened + 1);
  };

  addParenthesis("", 0, n);

  return ans;
};

console.log(generateParenthesis(3));
