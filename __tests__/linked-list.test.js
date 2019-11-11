const { LinkedList } = require('../linked-lists/linkedLists');

describe('LinkedList methods', () => {
  it('Appends, adds to the Head', () => {
    const linkedList = new LinkedList;
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    console.log(linkedList.head);

    expect(linkedList.head.value).toEqual(1);
  });


});