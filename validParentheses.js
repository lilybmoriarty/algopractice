/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

let isValid = function(s) {
  let lookup = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let last = stack[stack.length - 1];
    if (lookup.hasOwnProperty(curr)) {
      stack.push(curr);
    } else if (lookup[last] === curr) {
      stack.pop();
    } else return false;
  }
  return stack.length === 0 ? true : false;
};
