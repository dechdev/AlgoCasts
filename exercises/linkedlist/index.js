// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Either a Node or null
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let currPtr = this.head;
    let counter = 0;

    while (currPtr !== null) {
      counter++;
      currPtr = currPtr.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currPtr = this.head;

    while (currPtr.next !== null) {
      currPtr = currPtr.next;
    }

    return currPtr;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }
  //       c f
  //   1>2>3>4
  removeLast() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let slowPtr = this.head;
    let fastPtr = this.head.next;

    while (fastPtr.next !== null) {
      slowPtr = fastPtr;
      fastPtr = fastPtr.next;
    }

    slowPtr.next = null;
  }

  insertLast(data) {
    let currNode = this.head;
    // ENSURE EDGE CASES
    if (currNode === null) {
      this.head = new Node(data);
      return;
    }

    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = new Node(data);
  }

  getAt(num) {
    let counter = 0;
    let currNode = this.head;

    while (counter < num && currNode !== null) {
      currNode = currNode.next;
      counter++;
    }

    if (currNode === null) {
      return null;
    }

    return currNode;
  }

  removeAt(num) {
    if (this.size() === 0) {
      return;
    }
    if (num === 0) {
      this.head = this.head.next;
    }

    const prevNode = this.getAt(num - 1);
    const nextNode = this.getAt(num + 1);

    prevNode.next = nextNode;
  }

  insertAt(data, num) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (num === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    if (num >= this.size() - 1) {
      this.getLast().next = new Node(data);
      return;
    }

    let prevNode = this.getAt(num - 1);
    let node = new Node(data, prevNode.next);
    prevNode.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
