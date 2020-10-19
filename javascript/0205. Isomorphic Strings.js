// INPUT: "paper", "title"
// OUTPUT: true

const isIsomorphic = (str1, str2) => {
  const map1 = {},
    map2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!map1[str1[i]]) {
      map1[str1[i]] = str2[i];
    }
    if (!map2[str2[i]]) {
      map2[str2[i]] = str1[i];
    }
    if (map1[str1[i]] !== str2[i] || map2[str2[i]] !== str1[i]) return false;
  }

  return true;
};

console.log(isIsomorphic("paper", "title"));
