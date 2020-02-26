// O(n)
const searchInsertLinear = (arr, val) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] >= val) {
      return i;
    }
    i++;
  }

  return i;
};

// O(log n)
const searchInsert = (arr, val) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    console.log(start, mid, end);
    // if (start === mid) {
    //   return end;
    // }
    if (val > arr[mid]) {
      start = mid + 1;
    } else if (val === arr[mid] && val !== arr[mid - 1]) {
      return mid;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

console.log(searchInsert([5, 5, 5, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
