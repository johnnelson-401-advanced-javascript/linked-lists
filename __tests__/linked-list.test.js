const { LinkedList } = require('../linked-lists/linkedLists');

describe('LinkedList methods', () => {
  it('Appends, adds to the tail', () => {
    const linkedList = new LinkedList;
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.tail.value).toEqual(3);
  });

  it('Prepends, adds to Head', () => {
    const list = new LinkedList;
    list.prepend(3);
    list.prepend(2);
    list.prepend(1);
    expect(list.head.value).toEqual(1);
  });

  it('Includes returns true if the value is in the List, otherwise False', () => {
    const list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.includes(1)).toBe(true);
    expect(list.includes(42)).toBe(false);

  });


});