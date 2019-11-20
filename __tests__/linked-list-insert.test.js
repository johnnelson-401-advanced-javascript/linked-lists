const { LinkedList } = require('../linked-lists/linkedLists');

describe('insert tests', () => {
  it('insertsBefore, adding a newVal to the prev of value', () => {
    const list = new LinkedList;
    list.append(1);
    list.append(3);
    list.append(2);
    list.append('x');
    list.insertBefore(3, 5);
    expect(list.head.next.value).toBe(5);
  });

  it('insertsBefore, throws an error if Value is not in the list', () => {
    const list = new LinkedList;
    list.append(1);
    list.append(3);
    list.append(2);
    list.append('x');
    expect(list.insertBefore(4, 5)).toBe(console.error('Value does not Exist'));
  });

  it('insertAfter, adds newVal to next of Value', () => {
    const list = new LinkedList;
    list.append(1);
    list.append(3);
    list.append(2);
    list.append('x');
    list.insertAfter(3, 5);
    expect(list.head.next.next.value).toBe(5);
  });

  it('insertsAfter, throws an error if Value is not in the list', () => {
    const list = new LinkedList;
    list.append(1);
    list.append(3);
    list.append(2);
    list.append('x');
    expect(list.insertAfter(4, 5)).toBe(console.error('Value does not Exist'));
  });

  
});