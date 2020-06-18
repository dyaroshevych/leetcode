// O(NlogN) time | O(1) space
// const hIndex = (citations) => {
//   citations.sort((a, b) => a - b);

//   let start = 0,
//     end = citations.length - 1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);

//     if (citations[citations.length - mid - 1] >= mid + 1) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return start;
// };

// O(N) time | O(N) space
const hIndex = (citations) => {
  const N = citations.length;
  const count = new Array(N + 1).fill(0);

  for (let i = 0; i < N; i++) {
    if (citations[i] >= N) count[N]++;
    else count[citations[i]]++;
  }

  let total = 0;

  for (let i = N; i >= 0; i--) {
    total += count[i];

    if (i <= total) return i;
  }

  return 0;
};

console.log(hIndex([3, 0, 6, 1, 5]));
