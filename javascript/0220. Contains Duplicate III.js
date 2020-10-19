const containsNearbyAlmostDuplicate = (nums, k, t) => {
  if (k < 0 || t < 0) {
    return false;
  }

  const buckets = {};

  for (let i = 0; i < nums.length; i++) {
    const currBucket = Math.floor(nums[i] / (t + 1));

    if (buckets[currBucket] !== undefined) {
      return true;
    }

    buckets[currBucket] = nums[i];

    if (
      buckets[currBucket - 1] !== undefined &&
      Math.abs(buckets[currBucket - 1] - nums[i]) <= t
    ) {
      return true;
    }

    if (
      buckets[currBucket + 1] !== undefined &&
      Math.abs(buckets[currBucket + 1] - nums[i]) <= t
    ) {
      return true;
    }

    if (i >= k) {
      delete buckets[Math.floor(nums[i - k] / (t + 1))];
    }
  }

  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
