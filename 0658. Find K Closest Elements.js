const findClosestElements = (arr, k, x) => {
  let low = 0,
    high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (x < arr[mid]) high = mid;
    else if (x > arr[mid]) low = mid + 1;
    else break;
  }

  if (low > 0 && Math.abs(arr[low - 1] - x) <= Math.abs(arr[low] - x)) low--;
  if (
    low < arr.length - 2 &&
    Math.abs(arr[low + 2] - x) < Math.abs(arr[low] - x)
  )
    low += 2;

  if (k-- === 1) return [arr[low]];

  let pointer1 = low - 1;
  pointer2 = low + 1;

  while (k > 0 && pointer1 >= 0 && pointer2 < arr.length) {
    if (Math.abs(arr[pointer1] - x) <= Math.abs(arr[pointer2] - x)) pointer1--;
    else pointer2++;
    k--;
  }

  if (k > 0) {
    if (pointer1 >= 0) pointer1 -= k;
    else pointer2 += k;
  }

  return arr.slice(pointer1 + 1, pointer2);
};

console.log(findClosestElements([0, 0, 0, 1, 3, 5, 6, 7, 8, 8], 2, 2));
