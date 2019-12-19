/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

// first attempt stores each letter in a hashmap, if the letter appears more than once it's value is null otherwise the value is the index
// it then loops through the hash map to find the lowest index number, if they're all null min will stay at inifinity, if min is infinity we return -1
// I think the space complexity is N for the number of key/val pairs in the lookup obj/hash table
// I think the time complexity is N since you're looping through the string then looping through the object. I initially though this would be N * M since the object will be smaller assuming there are duplicate values. However, in a worse case scenario each letter is unique so the object and str will be the same N

var firstUniqChar = function(s) {
  let lookup = {};
  let min = Infinity;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (typeof lookup[curr] === "number" || lookup[curr] === null) {
      lookup[curr] = null;
    } else {
      lookup[curr] = i;
    }
  }
  for (let key in lookup) {
    if (lookup[key] < min && lookup[key] !== null) {
      min = lookup[key];
    }
  }
  return min === Infinity ? -1 : min;
};

// Alternative solution still utilizes the hash map but instead the value is the number of time that value occurs. We need to loop through the string twice
// so it will still be N time.

var firstUniqChar = function(s) {
  let lookup = {};
  for (let i = 0; i < s.length; i++) {
    if (lookup[s[i]]) {
      lookup[s[i]]++;
    } else lookup[s[i]] = 1;
  }
  for (let j = 0; j < s.length; j++) {
    if (lookup[s[j]] === 1) return j;
  }
  return -1;
};
