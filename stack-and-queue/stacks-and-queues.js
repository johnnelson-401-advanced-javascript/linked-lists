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

module.exports = {
  Stack
};