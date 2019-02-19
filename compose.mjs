/**
 * Compose - combines n functions, flowing right-to-left, calling each function with the output of the last one
 * This is the opposite of pipe that we've seen before
 */

const getUsername = user => user.userName;

const toUpperCase = string => string.toUpperCase();

const user = {
  userName: "benjaminkwokhk01"
};

const usernameUpperCase = toUpperCase(getUsername(user));

console.log("usernameUpperCase: ", usernameUpperCase);

const getUppercaseUsername = user => toUpperCase(getUsername(user));

const compose2 = (f, g) => x => f(g(x));

const composeN = (...fns) => x => fns.reverse().reduce((acc, f) => f(acc), x);

const pipeN = (...fns) => x => fns.reduce((acc, f) => f(acc), x);

const getUppercaseUsernameComposed = composeN(toUpperCase, getUsername); // right-to-left
const getUppercaseUsernamePiped = pipeN(getUsername, toUpperCase); // left-to-right

console.log(
  "getUppercaseUsernameComposed(user): ",
  getUppercaseUsernameComposed(user)
);

console.log(
  "getUppercaseUsernamePiped(user): ",
  getUppercaseUsernamePiped(user)
);
