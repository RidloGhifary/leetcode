// https://leetcode.com/problems/return-length-of-arguments-passed/description/

// 2703. Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.

// solution

var argumentsLength = function (...args) {
  return args.length;
};
