// O(nlog(n)) time, O(n) space
// const countBits = (num) => {
//   const bits = new Array(num + 1).fill(1);
//   bits[0] = 0;

//   for (let i = 1; i <= num; i++) {
//     let currNum = i;
//     while (currNum > 1) {
//       if (currNum % 2) bits[i]++;
//       currNum = Math.floor(currNum / 2);
//     }
//   }

//   return bits;
// };

// O(n) time, O(n) space
const countBits = (num) => {
  const bits = [0];

  for (let i = 1; i <= num; i++) bits.push(bits[i & (i - 1)] + 1);

  return bits;
};

console.log(countBits(5));
