const { Stack, Queue } = require('../stack-and-queue/stacks-and-queues');

const stack = new Stack;
stack.push('1');
stack.push('2');
stack.push('3');


describe('Stack class tests', () => {

  it('adds elements to a stack in the order they are placed', () => {

    expect(stack).toEqual({ size: 3, storage: { 1: '1', 2: '2', 3: '3' } });
  });
  it('Peeks at the last element in the stack.', () => {
    let peekReturn = stack.peek();
    expect(peekReturn).toEqual('3');
  });
  it('Pops the last element off the stack and returns it.', () => {
    let popReturn = stack.pop();
    expect(popReturn).toEqual('3');
    expect(stack).toEqual({ size: 2, storage: { 1: '1', 2: '2' } });
  });
  it('Checks the isEmpty method', () => {
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    function err() {
      stack.pop();
    }
    expect(err).toThrowError();
  });
});

let queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

describe('Queue Class Testing', () => {
  
  it('adds to the the Queue', () => {
    expect(queue).toEqual({
      head: 0,
      storage: {
        0: 1,
        1: 2,
        2: 3,
      },
      tail: 3,
    });
  });

  it('Peeks at the first item', () => {
    expect(queue.peek()).toBe(1);
  });

  it('Dequeues in the correct order', () => {
    let returned = queue.dequeue();
    expect(returned).toEqual(1);
    expect(queue).toEqual({
      head: 1,
      storage: {
        1: 2,
        2: 3,
      },
      tail: 3,
    });
  });

  it('isEmpty returns valid boolean', () => {
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
    function err() {
      queue.dequeue();
    }
    expect(err).toThrowError();
  });

});