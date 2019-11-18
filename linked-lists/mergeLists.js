const { LinkedList } = require('./linkedLists');

function mergeList(l1, l2) { 
  let current1 = l1.head;
  let current2 = l2.head;
  let result = new LinkedList;

  while(current1 || current2) {
    if(current1) {
      result.append(current1.value);
      current1 = current1.next;
    }
    if(current2) {
      result.append(current2.value);
      current2 = current2.next;
    }
  }
  return result;
}

module.exports = mergeList;