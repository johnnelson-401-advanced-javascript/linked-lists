const { LinkedList } = require('../linked-lists/linkedLists');

describe('Kth element from End test', () => {
  it('Returns the value of K with valid inputs', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.valueAtEndMinusK(1)).toBe(2);
    expect(list.valueAtEndMinusK(0)).toBe(3);

  });

  it('Returns Errors when value of K is an invalid input', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(3);
    function error() {
      list.valueAtEndMinusK(5);
    }
    expect(error).toThrowError();

    function negativeError() {
      list.valueAtEndMinusK(-1);
    }
    expect(negativeError).toThrowError();
  });
  
});