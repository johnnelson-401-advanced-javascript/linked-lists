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
  
});