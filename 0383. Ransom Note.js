const canConstruct = (ransomNote, magazine) => {
  const magazineChars = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magazineChars[magazine[i]]) magazineChars[magazine[i]]++;
    else magazineChars[magazine[i]] = 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineChars[ransomNote[i]]) return false;
    magazineChars[ransomNote[i]]--;
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
