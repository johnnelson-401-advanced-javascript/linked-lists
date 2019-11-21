const PseudoQueue = require('../queuesWithStacks/queues-with-stacks');

describe('PseudoQueue class acts like a Queue using stacks', () => {
  
  it('Enqueues an element properly', () => {
    let pseudo = new PseudoQueue;
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.enqueue(3);
    expect(pseudo.stack1.size).toBe(3);
    expect(pseudo.stack1.storage[1]).toBe(1);
  });

  it('Dequeues in proper order', () => {
    let pseudo = new PseudoQueue;
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.enqueue(3);
    let res = pseudo.dequeue();
    expect(res).toBe(1);
    pseudo.enqueue(4);
    pseudo.enqueue(5);
    pseudo.enqueue(6);
    let res2 = pseudo.dequeue();
    expect(res2).toBe(2);
  });

  it('handles Enqueue and Dequeue in varied orders and still returns the proper Queue', () => {
    let pseudo = new PseudoQueue;
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.enqueue(3);
    pseudo.enqueue(4);
    pseudo.enqueue(5);
    let res1 = pseudo.dequeue(); 
    let res2 = pseudo.dequeue();
    pseudo.enqueue(6);
    let res3 = pseudo.dequeue();
    expect(res1).toBe(1);
    expect(res2).toBe(2);
    expect(res3).toBe(3);
  });
  
});