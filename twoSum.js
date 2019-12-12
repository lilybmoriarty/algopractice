/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Unclear from Leetcode if the nums array is ALWAYS going to be a sorted list
*/

// BRUTE FORCE - ON^2 time complexity, constant space

let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) return [i, j];
    }
  }
};

// ON time/space complexity

let twoSum = function(nums, target) {
  let compliments = {};

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (compliments.hasOwnProperty(curr)) return [compliments[curr], i];
    else {
      compliment = target - curr;
      compliments[compliment] = i;
    }
  }
};
