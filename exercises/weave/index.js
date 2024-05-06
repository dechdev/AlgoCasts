// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  if (sourceOne.peek() === undefined) {
    return sourceOne;
  }
  if (sourceTwo.peek() === undefined) {
    return sourceTwo;
  }

  const thirdQueue = new Queue();
  let counter = 0;

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      thirdQueue.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      thirdQueue.add(sourceTwo.remove());
    }
    // if (
    //   counter % 2 === 0 ||
    //   (sourceOne.peek() !== undefined && sourceTwo.peek() === undefined)
    // ) {
    //   thirdQueue.add(sourceOne.remove());
    // }
    // if (
    //   counter % 2 === 1 ||
    //   (sourceTwo.peek() !== undefined && sourceOne.peek() === undefined)
    // ) {
    //   thirdQueue.add(sourceTwo.remove());
    // }

    counter++;
  }

  return thirdQueue;
}

module.exports = weave;
