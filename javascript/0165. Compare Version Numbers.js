// INPUT: version1 = "7.5.2.4", version2 = "7.5.3"
// OUTPUT: -1

const compareVersion = (version1, version2) => {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < version1.length || pointer2 < version2.length) {
    let comparison = 0;

    while (pointer1 < version1.length && version1[pointer1] === "0") {
      pointer1++;
    }

    while (pointer2 < version2.length && version2[pointer2] === "0") {
      pointer2++;
    }

    let firstDigitIndex1 = pointer1;
    let firstDigitIndex2 = pointer2;

    while (
      pointer1 < version1.length &&
      version1[pointer1] !== "." &&
      pointer2 < version2.length &&
      version2[pointer2] !== "."
    ) {
      if (version1[pointer1] > version2[pointer2]) {
        comparison = 1;
      } else if (version1[pointer1] < version2[pointer2]) {
        comparison = -1;
      }
      pointer1++;
      pointer2++;
    }

    while (pointer1 < version1.length && version1[pointer1] !== ".") {
      pointer1++;
    }

    while (pointer2 < version2.length && version2[pointer2] !== ".") {
      pointer2++;
    }

    if (pointer1 - firstDigitIndex1 > pointer2 - firstDigitIndex2) {
      return 1;
    } else if (pointer1 - firstDigitIndex1 < pointer2 - firstDigitIndex2) {
      return -1;
    }

    if (comparison) {
      return comparison;
    }

    pointer1++;
    pointer2++;
  }

  return 0;
};

console.log(compareVersion("7.5.2.4", "7.5.3"));
