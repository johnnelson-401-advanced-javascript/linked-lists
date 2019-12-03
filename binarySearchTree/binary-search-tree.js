
function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function(value) {
  let n = new Node(value);
  if(this.root === null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
};

Tree.prototype.find = function(n) {
  if(this.root === n) {
    return this.root;
  } else {
    return this.root.search(n);
  }
};

Node.prototype.addNode = function(n) {
  if(n.value < this.value) {
    if(this.left === null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else {
    if(this.right === null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};

Node.prototype.search = function(value) {
  if(this.value === value) {
    return this.value;
  } else if(value < this.value && this.left !== null) {
    return this.left.search(value);
  } else if(value > this.value && this.right !== null) {
    return this.right.search(value);
  } else {
    return null;
  }
};

Node.prototype.visit = function() {
  if(this.left !== null) {
    this.left.visit();
  }
  if(this.right !== null) {
    this.right.visit();
  }
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

module.exports = {
  Tree,
};
