const removeKdigitsInefficient = (num, k) => {
  if (k >= num.length) return "0";

  for (let _ = 0; _ < k; _++) {
    let idx = 0;

    while (idx < num.length - 1) {
      if (Number(num[idx]) > Number(num[idx + 1])) break;
      idx++;
    }

    num = num.substring(0, idx) + num.substring(idx + 1);
  }

  let leadingZeroIdx = 0;
  while (num[leadingZeroIdx] === "0") leadingZeroIdx++;

  return num.substring(leadingZeroIdx) || "0";
};

const removeKdigits = (num, k) => {
  if (k >= num.length) return "0";

  const digits = [];
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && digits.length && digits[digits.length - 1] > num[i]) {
      digits.pop();
      k--;
    }
    digits.push(num[i]);
  }

  while (k > 0) {
    digits.pop();
    k--;
  }

  let leadingZeroIdx = 0;
  while (digits[leadingZeroIdx] === "0") leadingZeroIdx++;

  return digits.splice(leadingZeroIdx).join("") || "0";
};

console.log(removeKdigits("1432219", 3));
