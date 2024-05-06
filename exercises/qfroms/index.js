// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

// 4 = top
// _
// 3
// _
// 2
// _
// 1 = bottom

// 1 = top
// _
// 2
// _
// 3
// _
// 4 = bottom

// 1|2|3|4

// s1
// s2
// add =

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(n) {
    this.s1.push(n);
  }

  remove(n) {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }
    const returnVal = this.s2.pop();

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return returnVal;
  }

  peek(n) {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }
    const returnVal = this.s2.peek();

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return returnVal;
  }
}

module.exports = Queue;
