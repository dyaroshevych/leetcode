// INPUT: "1123", "0111"
// OUTPUT: 1A1B

const getHint = (secret, guess) => {
  const digits = new Array(10).fill(0);

  let bulls = (cows = 0);
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) bulls++;
    else {
      if (digits[secret[i]]++ < 0) cows++;
      if (digits[guess[i]]-- > 0) cows++;
    }
  }

  return `${bulls}A${cows}B`;
};

console.log(getHint("1123", "0111"));
