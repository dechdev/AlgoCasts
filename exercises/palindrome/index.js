// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //   1 - reverse()
  //   return str == str.split("").reverse().join("");
  //   2 - pointer
  //   let p1 = 0;
  //   let p2 = str.length - 1;
  //   while (p1 < p2) {
  //     if (str.charAt(p1) !== str.charAt(p2)) {
  //       return false;
  //     }
  //     p1++;
  //     p2--;
  //   }

  //   return true;
  // 3 = every
  return str.split("").every((char, idx) => {
    return char === str[str.length - idx - 1];
  });
}

module.exports = palindrome;
