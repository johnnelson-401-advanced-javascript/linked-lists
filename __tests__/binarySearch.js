const binarySearch = require('../binarySearch/BinarySearch');

describe('Binary Search method', () => {

  it('Returns the Index of an element if it exists, else returns -1', () => {
    const arr = [4, 8, 15, 16, 23, 42];
    expect(binarySearch(arr, 15)).toEqual(2);
    let arr2 = [11, 22, 33, 44, 55, 66, 77];
    expect(binarySearch(arr2, 90)).toEqual(-1);



    
  });
  
});