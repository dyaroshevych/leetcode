const groupAnagrams = strs => {
  const getStringCharsId = str => {
    const chars = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0
    };

    for (let i = 0; i < str.length; i++) {
      chars[str[i]]++;
    }

    let strId = "";
    for (let char of Object.keys(chars)) {
      if (chars[char] > 0) {
        strId += `${char}${chars[char]}`;
      }
    }

    return strId;
  };

  const strsIdMap = {};

  for (let i = 0; i < strs.length; i++) {
    const currStrId = getStringCharsId(strs[i]);

    if (strsIdMap[currStrId]) {
      strsIdMap[currStrId].push(strs[i]);
    } else {
      strsIdMap[currStrId] = [strs[i]];
    }
  }

  const result = [];
  for (let strId of Object.keys(strsIdMap)) {
    result.push(strsIdMap[strId]);
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
