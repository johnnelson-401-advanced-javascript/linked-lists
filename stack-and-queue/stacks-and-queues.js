class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    if(this.isEmpty() === false) {
      let removed = this.storage[this.size];
      delete this.storage[this.size];
      this.size--;
      return removed;
    }
    else throw console.error('Stack is Empty');
  }

  peek() {
    return this.storage[this.size];
  }

  isEmpty() {
    if(this.size === 0) {
      return true;
    } else if(this.size > 0) {
      return false;
    } else throw console.error('Input is not a valid Stack');
  }


}

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    if(this.isEmpty() === false) {
      let removed = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return removed;
    } else throw console.error('Queue is Empty!');
  }

  peek() {
    return this.storage[this.head];
  }

  isEmpty() {
    if(this.tail === this.head) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Stack,
  Queue
};