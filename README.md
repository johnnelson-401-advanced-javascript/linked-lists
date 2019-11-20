# linked-lists
<!-- Short summary or background information -->

## Challenge
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List.
## Approach & Efficiency
* Create a new Node constructor
* set head and tail values to null;
* conditional if no next or prev, set to null
* if list is empty, set head and tail to value.
* Set Old tail to this tail, set value to this.tail. Point old tail to this tail, and this tail to the old tail. 
* Set Old head to this head, set value to this.head. Point old head to this head, and this head to the old head. 

* includes - loop through the array, if current value = value, return false, else continue. If after looping the entire array the value is not found, return false.

* to String, push all values into a new array. Join the items of the new array with a comma and space between them. 



## API
<!-- Description of each method publicly available to your Linked List -->