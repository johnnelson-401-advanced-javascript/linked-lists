const { Tree } = require('../binarySearchTree/binary-search-tree');

describe('Binary Search Tree', () => {

  it('Instantiates a new Tree', () => {
    let tree = new Tree();
    expect(tree.root).toBe(null);
   
  });

  it('Adds a Value to the Root', () => {
    let tree = new Tree();
    tree.addValue(3);
    expect(tree.root.value).toBe(3);
  });

  it('Adds to the Left or Right accordingly', () => {
    let tree = new Tree();
    tree.addValue(2);
    tree.addValue(1);
    tree.addValue(3);
    expect(tree.root.value).toBe(2);
    expect(tree.root.left.value).toBe(1);
    expect(tree.root.right.value).toBe(3);
  });

  it('Should find a value in the Tree', () => {
    let tree = new Tree();
    tree.addValue(1);
    tree.addValue(2);
    tree.addValue(3);
    let found = tree.find(3);
    expect(found).toBe(3);
  });

  it('Should return an array inOrder', () => {
    let tree = new Tree();
    tree.addValue(2);
    tree.addValue(1);
    tree.addValue(3);
    tree.addValue(6);
    tree.addValue(5);
    tree.addValue(4);
    let result = tree.inOrder();
    expect(result).toBe('1, 2, 3, 4, 5, 6, ');
  });
  it('Should return an array preOrder', () => {
    let tree = new Tree();
    tree.addValue(2);
    tree.addValue(1);
    tree.addValue(3);
    tree.addValue(6);
    tree.addValue(5);
    tree.addValue(4);
    let result = tree.preOrder();
    expect(result).toBe('2, 1, 3, 6, 5, 4, ');
  });
  it('Should return an array postOrder', () => {
    let tree = new Tree();
    tree.addValue(2);
    tree.addValue(1);
    tree.addValue(3);
    tree.addValue(6);
    tree.addValue(5);
    tree.addValue(4);
    let result = tree.postOrder();
    expect(result).toBe('1, 4, 5, 6, 3, 2, ');
  });
});