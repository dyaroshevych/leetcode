// INPUT: 5 (101)
// OUTPUT: 2 (010)

const bitwiseComplement = (num) => {
  const MASK = (1 << getBinarySize(num)) - 1;

  return num ^ MASK;
};

const getBinarySize = (num) => {
  if (num === 0) {
    return 1;
  }

  let size = 0;

  while (num) {
    size++;
    num >>= 1;
  }

  return size;
};
