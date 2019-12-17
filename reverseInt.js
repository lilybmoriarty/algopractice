/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

// BRUTE FORCE
// O(N) time/space complexity

var reverse = function(x) {
  let arr = String(x).split("");
  let newArr = [];
  let negative = arr[0] === "-" ? true : false;

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  if (negative) {
    newArr.pop();
    num = -newArr.join("");
  } else num = newArr.join("");

  if (num > 2147483647 || num < -2147483647) return 0;
  else return num;
};
