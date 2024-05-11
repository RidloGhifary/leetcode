// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

// 2635. Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// solution

var map = function (arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
};
