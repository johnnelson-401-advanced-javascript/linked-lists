const { mergeList } = require('../linked-lists/mergeLists');
const { LinkedList } = require('../linked-lists/linkedLists');

describe('Merges two linked lists.', () => {
  it('combines two linked lists alternating indexes from each', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(3);
    let secondList = new LinkedList;
    secondList.append(4);
    secondList.append(5);
    secondList.append(6);

    let result = mergeList(list, secondList);
    expect(result.toString()).toBe('1, 4, 2, 5, 3, 6');
  });
  
});