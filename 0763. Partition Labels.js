// INPUT: "ababcbacadefegdehijhklij"
// OUTPUT: [ 9, 7, 8 ]

// O(N) time | O(1) space
const partitionLabels = (str) => {
  const segmentsObj = {};

  for (let i = 0; i < str.length; i++) {
    if (segmentsObj[str[i]]) {
      segmentsObj[str[i]][1] = i;
    } else {
      segmentsObj[str[i]] = [i, i];
    }
  }

  const segments = Object.values(segmentsObj).sort((a, b) => a[0] - b[0]);
  segments.push([Infinity, Infinity]);

  const lengths = [];
  let [currStart, maxEnd] = segments[0];

  for (let i = 1; i < segments.length; i++) {
    if (segments[i][0] < maxEnd) {
      maxEnd = Math.max(maxEnd, segments[i][1]);
    } else {
      lengths.push(maxEnd - currStart + 1);
      [currStart, maxEnd] = segments[i];
    }
  }

  return lengths;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
