// INPUT: 00000010100101000001111010011100 (43261596)
// OUTPUT: 00111001011110000010100101000000 (964176192)

const reverseBits = (num) => {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result *= 2;
    result += num & 1;
    num = num >> 1;
  }

  return result;
};

console.log(reverseBits(43261596));
