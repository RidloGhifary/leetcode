// https://leetcode.com/problems/counter-ii/description/

// 2665. Counter II

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// solution

var createCounter = function (init) {
  let currentValue = init;

  const increment = () => {
    currentValue++;
    return currentValue;
  };

  const decrement = () => {
    currentValue--;
    return currentValue;
  };

  const reset = () => {
    currentValue = init || 0;
    return currentValue;
  };

  return { increment, decrement, reset };
};
