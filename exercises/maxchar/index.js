// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Disguised questions:
// What is the most commong character in a string?
// Anagram: Does string A have the same characters as string B
// Does the given string have any repeated characters in it?

function maxChar(str) {
  const strArr = str.split("");
  const strMap = {};

  strArr.map((str) => {
    // Ehh
    // const mapValue = strMap[str];
    // if (!mapValue) {
    //   strMap[str] = 1;
    // } else {
    //   strMap[str] = mapValue + 1;
    // }
    strMap[str] = (strMap[str] ?? 0) + 1;
  });

  let mostCharNum = 0;
  let mostChar = "";
  Object.entries(strMap).map(([k, v]) => {
    if (v > mostCharNum) {
      mostChar = k;
      mostCharNum = v;
    }
  });

  return mostChar;
}

module.exports = maxChar;
