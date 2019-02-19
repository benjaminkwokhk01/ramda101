import * as R from "ramda";
/**
 * Curry - a function that takes multiple arguments one at a time.
 */

const addTwoNumbers = (x, y) => x + y;

console.log("addTwoNumbers(1, 2) = ", addTwoNumbers(1, 2));

const addTwoNumbersCurry = x => y => x + y;

const add5 = addTwoNumbersCurry(5);

console.log("add5(10) = ", add5(10));

// 3 concepts in Curry: Closure, HOF, Unary Function

/**
 * Partial Function - a function which has been applied to some, but not yet all of its arguments
 */

const addThreeNumbers = (x, y, z) => x + y + z;

// This is a partial function
const add12 = addThreeNumbers.bind(null, 5, 7);

console.log("add12(12) = ", add12(12));

/**
 * Curry vs Partial Function
 * Curry function always returns an unary function, whereas partial function does not
 */

/**
 * Why do we curry???
 */

const multiplyBy2 = arr => arr.map(x => x * 2);

console.log("multiplyBy2([1, 2, 3, 4]): ", multiplyBy2([1, 2, 3, 4]));

const map = f => arr => arr.map(f);

const times2 = x => x * 2;

/**
 * Point-free style of functional programming - a function definition does not include information regarding its arguments,
 * using combinators and function composition instead of variables.
 * The biggest advantages are reducing syntactic noise and not introducing unnecessary names.
 */
const multiplyBy2Curry = map(times2);

const multiplyBy2Ramda = R.map(R.multiply(2));

console.log("multiplyBy2Curry([1, 2, 3, 4]): ", multiplyBy2Curry([1, 2, 3, 4]));
console.log("multiplyBy2Ramda([1, 2, 3, 4]): ", multiplyBy2Ramda([1, 2, 3, 4]));

// Example
const object = { a: null, b: null, c: 1, d: 2, e: 3, f: undefined };

const removeNull = object => {
  let newObject = {};
  for (const key in object) {
    const currValue = object[key];
    if (currValue === null || currValue === undefined) continue;
    newObject[key] = currValue;
  }
  return newObject;
};

const removeNullRamda = R.reject(R.isNil);

console.log("removeNull(object): ", removeNull(object));
console.log("removeNullRamda(object): ", removeNullRamda(object));
