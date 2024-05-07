// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const countArr = [0];
  const q = [root, "s"];

  while (q.length > 1) {
    const currNode = q.shift();
    if (currNode !== "s") {
      countArr[countArr.length - 1] = countArr[countArr.length - 1] + 1;
      q.push(...currNode.children);
    } else {
      countArr.push(0);
      q.push("s");
    }
  }

  return countArr;
}

module.exports = levelWidth;
