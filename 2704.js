// https://leetcode.com/problems/to-be-or-not-to-be/description/

// 2704. To Be Or Not To Be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// solution

var expect = function (val) {
  return {
    toBe: (val1) => {
      if (val === val1) return true;
      throw new Error("Not Equal");
    },
    notToBe: (val1) => {
      if (val1 !== val) return true;
      throw new Error("Equal");
    },
  };
};
