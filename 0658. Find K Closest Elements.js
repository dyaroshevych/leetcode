const findClosestElements = (arr, k, x) => {
  let low = 0,
    high = arr.length - 1;

  if (x < arr[0]) return arr.slice(0, k);
  if (x > arr[arr.length - 1]) return arr.slice(arr.length - 1 - k);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (x < arr[mid]) high = mid;
    else if (x > arr[mid]) low = mid + 1;
    else {
      low = mid;
      break;
    }
  }

  if (low > 0 && Math.abs(arr[low - 1] - x) <= Math.abs(arr[low] - x)) low--;
  if (
    low < arr.length - 1 &&
    Math.abs(arr[low + 1] - x) < Math.abs(arr[low] - x)
  )
    low += 1;

  if (k-- === 1) return [arr[low]];

  let pointer1 = low - 1,
    pointer2 = low + 1;

  while (k > 0 && pointer1 >= 0 && pointer2 < arr.length) {
    if (Math.abs(arr[pointer1] - x) <= Math.abs(arr[pointer2] - x)) pointer1--;
    else pointer2++;
    k--;
  }

  if (k > 0) {
    if (pointer1 === -1) pointer2 += k;
    else if (pointer2 === arr.length) pointer1 -= k;
  }

  return arr.slice(pointer1 + 1, pointer2);
};

console.log(findClosestElements([0, 0, 0, 1, 3, 5, 6, 7, 8, 8], 2, 2));
