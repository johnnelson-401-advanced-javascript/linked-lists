const Stack = require('../stack-and-queue/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  enqueue(element) {
    if(this.stack2.length > 0) {
      let len = this.stack2.length;
      for(let i = 0; i < len; i++) {
        let p = this.stack2.pop();
        this.stack1.push(p);
      }
    }
    this.stack1.push(element);
  }

  dequeue(){
    if(this.stack2.length > 0){
      this.stack2.pop();
    } else if(this.stack2.length === 0 && this.stack1.length === 0) {
      return console.error('Queue is Empty');
    } else if(this.stack1.length > 0) {
      let len = this.stack1.length;
      for(let i = 0; i < len; i++){
        let p = this.stack1.pop();
        this.stack2.push(p);
      }
      return this.stack2.pop();
    }
  }

}

module.exports = PseudoQueue;