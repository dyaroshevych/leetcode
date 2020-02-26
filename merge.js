const merge = (nums1, m, nums2, n) => {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[n + m - 1] = nums1[--m];
    } else {
      nums1[n + m - 1] = nums2[--n];
    }
  }

  while (m > 0) {
    nums1[n + m - 1] = nums1[--m];
  }

  while (n > 0) {
    nums1[n + m - 1] = nums2[--n];
  }

  return nums1;
};

console.log(merge([0, 0, 0], 0, [0, 0, 0], 0));
