// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const titleCase = (str) => {
    if (str.length === 0) {
      return str;
    }

    return `${str.charAt(0).toUpperCase()}${
      str.length > 1 ? str.slice(1) : ""
    }`;
  };

  return str
    .split(" ")
    .map((w) => {
      return titleCase(w);
    })
    .join(" ");
}

// function capitalize(str) {
//     const charWords = [];
//     str.split("").map((w, idx) => {
//       if (idx === 0) {
//         charWords.push(w.toUpperCase());
//         return;
//       }

//       if (str.charAt(idx - 1) === " ") {
//         charWords.push(w.toUpperCase());
//       } else {
//         charWords.push(w);
//       }
//     });

//     return charWords.join("");
//   }

module.exports = capitalize;
