class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  append(value) {
    if(!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  prepend(value) {
    if(!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }
  includes(value) {
    let current = this.head;
    while(current) {
      if(current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = [];
    while(current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(', ');
  }

  insertBefore(value, newVal) {
    if(this.includes(value) === false){
      return console.error('Value does not Exist');
    }
    let current = this.head;
    let previous;
    while(current.value !== value) {
      previous = current;
      current = current.next;
    }
    const newNode = new Node(newVal, current);
    previous.next = newNode;
  }
  insertAfter(value, newVal) {
    if(this.includes(value) === false){
      return console.error('Value does not Exist');
    }
    let current = this.head;
    while(current.value !== value) {
      current = current.next;
    }
    let next = current.next;
    const newNode = new Node(newVal, next);
    current.next = newNode;
  }

  valueAtEndMinusK(k) {
    let tail = this.head;
    let length = 1;
    let current = this.head;
    while(tail.next !== null) {
      tail = tail.next;
      length++;
    }
    if(k < 0 || k >= length) {
      throw new Error(' k cannot be less than the length of the list');
    } else {
      for(let i = 0; i < length - k - 1; i++) {
        current = current.next;
      }
    }
    return current.value;
  }
}

module.exports = { Node, LinkedList };