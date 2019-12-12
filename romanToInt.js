// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

/*
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

// FIRST ATTEMPT

var romanToInt = function(str) {
  let lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let prev = str[i - 1];
    let next = str[i + 1];

    if (
      (curr === "I" && (next === "V" || next === "X") && next !== undefined) ||
      (curr === "X" && (next === "L" || next === "C") && next !== undefined) ||
      (curr === "C" && (next === "D" || next === "M") && next !== undefined)
    ) {
      continue;
    } else if (
      ((curr === "V" || curr === "X") && prev === "I") ||
      ((curr === "L" || curr === "C") && prev === "X") ||
      ((curr === "D" || curr === "M") && prev === "C")
    ) {
      let specialChar = str.slice(i - 1, i + 1);
      sum += lookup[specialChar];
    } else sum += lookup[curr];
  }
  return sum;
};

// SIMPLIFIED ATTEMPT

var romanToInt = function(str) {
  let lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let prev = str[i - 1];
    let next = str[i + 1];

    if (lookup[curr] < lookup[next]) {
      continue;
    } else if (lookup[curr] > lookup[prev]) {
      sum = sum + lookup[curr] - lookup[prev];
    } else sum += lookup[curr];
  }
  return sum;
};

// romanToInt('III') => 3
// romanToInt('IV') => 4
// romanToInt('IX') => 9
// romanToInt('LVIII') => 58
// romanToInt('MCMXCIV') => 1994
