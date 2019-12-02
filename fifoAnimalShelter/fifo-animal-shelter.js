
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.enqueue = function(addAnimal) {
  if(this.head === null) {
    this.head = addAnimal;
  }
  if(this.tail === null) {
    this.tail = addAnimal;
  } else {
    this.tail.next = addAnimal;
    this.tail = addAnimal;
  }
};

LinkedList.prototype.dequeue = function() {
  if(this.head === null) {
    throw new Error('Nothing to dequeue');
  }
  let first = this.head;
  this.head = this.head.next;
  return first;
};

LinkedList.prototype.peek = function() {
  return this.head;
};

function AnimalShelter() {
  this.catList = new LinkedList();
  this.dogList = new LinkedList();
}
function Cat(value) {
  Node.call(this, value);
  this.received = new Date();
}
function Dog(value) {
  Node.call(this, value);
  this.received = new Date();
}

AnimalShelter.prototype.addAnimal = function(animal) {
  if(animal instanceof Cat) {
    this.catList.enqueue(animal);
  } else if(animal instanceof Dog) {
    this.dogList.enqueue(animal);
  }
};

AnimalShelter.prototype.getDog = function() {
  var nextDog = this.dogList.head;
  if(nextDog === null) {
    throw new Error('Sorry all dogs have been adopted');
  }
  this.dogList.head = this.dogList.head.next;
  nextDog.next = null;
  return nextDog;
};

AnimalShelter.prototype.getCat = function() {
  var nextCat = this.catList.head;
  if(nextCat === null) {
    throw new Error('Sorry all cats have been adopted');
  }
  this.catList.head = this.catList.head.next;
  nextCat.next = null;
  return nextCat;
};

AnimalShelter.prototype.getAny = function() {
  var nextDog = this.dogList.peek();
  var nextCat = this.catList.peek();

  if(nextCat && nextDog) {
    if(nextCat.received.getTime() < nextDog.received.getTime()) {
      return this.getCat();
    } else {
      return this.getDog();
    }
  } else {
    if(nextCat) {
      return this.getCat();
    } else if(nextDog) {
      return this.getDog();
    }
  }
  throw new Error('No animals to adopt');
};


module.exports = {
  AnimalShelter,
  Dog,
  Cat
};
