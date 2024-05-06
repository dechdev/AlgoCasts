// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative
function fib(n) {
  if (n === 0 || n === 1) {
    return n === 0 ? 0 : 1;
  }

  //   [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  let counter = 2;
  let prev1 = 0;
  let prev2 = 1;
  let currTotal = 1;
  while (counter < n) {
    prev1 = prev2;
    prev2 = currTotal;
    currTotal = prev1 + prev2;
    counter++;
  }

  return currTotal;
}

// Recursive
// function fib(n) {
//   if (n === 0 || n === 1) {
//     return n === 0 ? 0 : 1;
//   }

//   const makeFib = (prev1, prev2, currNum) => {
//     if (currNum === n) {
//       return prev1 + prev2;
//     }

//     return makeFib(prev2, prev1 + prev2, currNum + 1);
//   };

//   return makeFib(0, 1, 2);
// }

module.exports = fib;
