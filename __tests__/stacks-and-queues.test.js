const { Stack } = require('../stack-and-queue/stacks-and-queues');

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