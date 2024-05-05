// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 1
  //   return str.split("").reverse().join("");
  //   2
  //   let newStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     newStr += str[i];
  //   }
  //   return newStr;
  //   3
  return str.split("").reduce((tmpStr, character) => {
    return character + tmpStr;
  }, "");
}

module.exports = reverse;
