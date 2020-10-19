const intToRoman = num => {
  let str = "";

  // 1000+
  while (num >= 1000) {
    str += "M";
    num -= 1000;
  }

  // [100, 1000)
  if (num >= 900) {
    str += "CM";
    num -= 900;
  } else if (num >= 500) {
    str += "D";
    num -= 500;
  } else if (num >= 400) {
    str += "CD";
    num -= 400;
  }
  while (num >= 100) {
    str += "C";
    num -= 100;
  }

  // [10, 100)
  if (num >= 90) {
    str += "XC";
    num -= 90;
  } else if (num >= 50) {
    str += "L";
    num -= 50;
  } else if (num >= 40) {
    str += "XL";
    num -= 40;
  }
  while (num >= 10) {
    str += "X";
    num -= 10;
  }

  // [1, 10)
  if (num >= 9) {
    str += "IX";
    num -= 9;
  } else if (num >= 5) {
    str += "V";
    num -= 5;
  } else if (num >= 4) {
    str += "IV";
    num -= 4;
  }
  while (num > 0) {
    str += "I";
    num--;
  }

  return str;
};

console.log(intToRoman(5490));
