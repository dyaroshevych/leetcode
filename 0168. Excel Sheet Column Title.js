const convertToTitle = n => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ans = "";
  while (n) {
    let digit = n % 26 ? n % 26 : 26;
    n = Math.floor((n - digit) / 26);

    ans = alphabet[digit - 1] + ans;
  }

  return ans;
};

console.log(convertToTitle(26));
