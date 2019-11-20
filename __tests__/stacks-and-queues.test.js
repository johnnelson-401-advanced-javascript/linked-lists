const { Stack } = require('../stack-and-queue/stacks-and-queues');

describe('Stack class tests', () => {

  it('adds elements to a stack in the order they are placed', () => {
    const stack = new Stack;
    stack.push('1');
    stack.push('2');
    stack.push('3');
    expect(stack).toEqual({ size: 3, storage: { 1: '1', 2: '2', 3: '3' } });
  });
  
});