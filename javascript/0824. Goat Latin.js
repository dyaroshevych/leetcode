// INPUT: "I speak Goat Latin"
// OUTPUT: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

const toGoatLatin = (str) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (!vowels.has(words[i][0].toLowerCase())) {
      words[i] = words[i].slice(1) + words[i][0];
    }

    words[i] += "ma" + new Array(i + 1).fill("a").join("");
  }

  return words.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin"));
