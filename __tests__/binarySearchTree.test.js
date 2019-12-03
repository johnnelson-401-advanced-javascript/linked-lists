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



});