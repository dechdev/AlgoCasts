// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const alphaNumRegex = /^[A-Za-z0-9]+$/;

  const makeMap = (string) => {
    const map = {};
    string.split("").map((c) => {
      if (c === " " || !alphaNumRegex.test(c)) {
        return;
      }
      map[c.toLowerCase()] = (map[c.toLowerCase()] ?? 0) + 1;
    });
    return map;
  };

  const aMap = makeMap(stringA);
  const bMap = makeMap(stringB);

  let isValid = true;
  Object.keys(aMap).map((k) => {
    if (aMap[k] !== bMap[k]) {
      isValid = false;
    }
  });

  return isValid && Object.keys(aMap).length === Object.keys(bMap).length;
}

// sort() -- not performant
// function anagrams(stringA, stringB) {
//   const cleanString = (str) => {
//     return str.replace(/[^\w]/g).toLowerCase().split("").sort().join("");
//   };

//   return cleanString(stringA) === cleanString(stringB);
// }

module.exports = anagrams;
