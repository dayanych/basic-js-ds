const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

function convertToNestedObject(arr) {
  // Base case: if the array is empty, return null
  if (arr.length === 0) {
    return null;
  }
  // Create an object for the first item in the array
  const obj = {
    value: arr[0].value,
    next: null
  };
  // Recursively build the "next" property by calling the function with the rest of the array
  obj.next = convertToNestedObject(arr.slice(1));

  return obj;
}

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }

  getUnderlyingList() {
    return convertToNestedObject(this.queue) 
  }

  enqueue(value) {
    if (this.queue.length != 0) {
      this.queue[this.end - 1].next = value;
    }
    this.queue.push({ value: value, next: null });
    this.end++
  }

  dequeue() {
    let firstItem = this.queue.shift()
    return firstItem.value
  }
}

module.exports = {
  Queue
};
