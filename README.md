
# ADT Legacy JS

Faster way to implement Auxiliary Data Types (like : Stack, Queue, LinkedList, HashTable, BST etc.) for [Node.js](http://nodejs.org).

```js
const {Stack, Queue, LList} = require('adt-legacy-js')
const myStack = new Stack();
const myQueue = new Queue();
await myStack.push('item);
await myQueue.enqueue('item);
```





 


## Installation

Install adt-legacy-js with npm.
Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 16.0 or higher is required.

```console
$ npm install adt-legacy-js
```

    
## Features

- Helps you in implementation of Robust Data Structures.
- Easy to import and comes with some pre-built methods.
- Utilise the class to extend the properties and do modification as per use-case.
- Comes with all testing examples in test folder.



## Classes and Usage
### List Class
In the list class we have different methods which can be used to replicate the list data structure. This is quite similar to the array but here we keep a position pointer of where we are currently.
**Usage**:
```js
const {List} = require('adt-legacy-js);
const myList = new List();
await myList.add('item');
await myList.add('item1');
await myList.remove();
await myList.size(); 
```
**Constructor:** 
```js
constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.listItems = [];
    }
```
**Methods:**
- `add(item)` - Adds an element to the list.
- `remove()` - Remove an item from the list.
- `size()` - Provides the size of the list.
- `fetch()` - Returns an `array` of all the list items.
- `clear()` - Clears the entire list.
- `front()` - Moves the list pointer to first element.
- `end()` - Moves the list pointer to end of list.
- `prev()` - Moves to the previous position pointer from current.Does nothing if the pointer at start of list.
- `next()` - Moves to the next position pointer from current.Does nothing if the pointer at end of list.
- `currPos()` - Returns the current position of the pointer.
- `moveTo(position)` - Here position should be a `number` and it only works if position >= 0 or less than the listSize.
- `getCurrent()` - Provides the current element where the position pointer is pointing to.

By default the position of list pointer is at `0` even if we add items.

### Stack Class
In Stack Class we replicate the Stack data structure.

**Usage:**
```js
const {Stack} = require('adt-legacy-js');
const myStack = new Stack();
await myStack.push('item');
await myStack.push('item1');
await myStack.pop();
await myStack.peek(); 
```
**Constructor:** 
```js
    constructor() {
        this.items = [];
        this.top = 0;
    }
```
**Methods:**
- `push(item)` - Add an item to the stack.
- `pop()` - Remove the top item from the stack.
- `peek()` - Look into the top item in the stack.
- `fetch()` - Fetch all items from stack. Returns an `array`.
- `empty()` - Remove all items from stack.
- `length()` - Gives the length of the stack.
- `search(searchItem)` - Returns `true` if found else `false`.

### Queue Class
In Queue Class we replicate the Queue data structure.

**Usage:**
```js
const {Queue} = require('adt-legacy-js');
const myQueue = new Queue();
await myQueue.enqueue('data');
await myQueue.enqueue('data2');
await myQueue.dequeue();
await myQueue.fetch();
```
**Methods:**
- `enqueue(item)` - Add an item to the queue.
- `dequeue()` - Remove the top item from the queue.
- `peek()` - Look into the top item in the queue.
- `fetch()` - Fetch all items from stack. Returns an `array`.
- `empty()` - Remove all items from stack.
- `length()` - Gives the length of the stack.
- `search(searchItem)` - Returns `true` if found else `false`.

### LList (LinkedList) Class
LinkedList class replicates the LinkedList Data structure.
It consists of two parts one is the Node class and the other actual LList class. Here we have made node non-exportable.

**Usage:**
```js
const {LList} = require('adt-legacy-js');
const myLList = new LList();
await myLList.insert('item', 'head');
await myLList.insert('item1', 'item');
await myLList.display();
await myLList.find('item1');
```

**Constructor:**
```js
class LLnode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
// LList constructor
constructor() {
    this.head = new LLnode('head');
}
```

**Methods:**

- `find(item)` - This method returns the `Node` class if the item exists. And by default it returns the `head` node.
- `insert(newEl, item)` - Inserts a new element into the LinkedList. Takes two parameters first is the element we want to insert and other is the `item` after which the node should be inserted. If item does not exists it puts it behind the head node shortening the LinkedList.
- `display()` - Returns an `array` of all the items present in LinkedList. Returns and empty `[]` if only head node exists.
- `findPrevious(item)` - Returns the previous neighbouring `Node` class from the item we want to see. By default returns the `head` node.
- `remove(item)` - Removes the `Node` item from the LinkedList. Does nothing if the item doesnot exists or it is the `head` node.

### DLList (Doubly LinkedList) Class
The doubly linkedlist class has all the methods similar to LinkedList and some additional methods mentioned below. The constructor `Node` here is : 

**Constructor:**
```js
class DLLNode {
    constructor (element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}
```

**Additional Methods:**

- `findLast()` - Returns the last element added to the DLList and returns the `DLLNode` class.
- `dispReverse()` - Returns all element `array` in reverse order i.e. the one inserted last will be the first element of returned `array`.

### CLList (Circular LinkedList) Class
The circular linkedlist class is all similar to the LinkedList class with all the methods present in it. Only change we do is in the constructor of our LList class. Constructor extended from the LList class : 

```js
constructor() {
    super();
    this.head.next = this.head;
}
```

### HashTable Class
The HashTable class replicates the Hash Table Data structure. We have two algorithms enum here `better,simple` and for numbers key we have one simple hashing technique. And takes argument as `(key,value)` pair. The constructor takes a parameter `hashParam` which is a `number` and please make sure this number is a `prime` number for better hashing.

**Usage:**
```js
const {HashTable} = require('adt-legacy-js');
const myHashTable = new HashTable();
await myHashTable.put('1', 'jsr');
await myHashTable.put('2', 'sonu');
await myHashTable.remove('1');
await myHashTable.showDistro();
```

**Constructor:**
```js
constructor(hashParam, algo = null) {
    this.hashParam = hashParam;
    this.algo = algo;
    this.table = new Array(this.hashParam);
}
```

**Methods:**

- `put(key,value)` - Inserts an item into the HashTable Array.
- `get(key)` - Fetch the item from hash table.
- `showDistro()` - Retuns an `object` of the positioning of the values in the HashTable.
- `hashValue(key)` - Returns the position at which the key should lie.
- `remove(key)` - Removes the element for that key from the Hashtable array.

### HashTableAdvanced Class
This is entirely similar to HashTable above but the only differnce being it uses an advanced algo to avoid collisions based on the above algo. The algo used here is [Linear Probing](https://www.log2base2.com/algorithms/searching/linear-probing-hash-table.html).

There is slight difference in the constructor as we store values array as well: 

```js
 constructor(hashParam, algo = null) {
    this.hashParam = hashParam;
    this.algo = algo;
    this.table = new Array(this.hashParam);
    this.values = new Array(this.hashParam);
}
```

**Usage:**
```js
const {HashTableAdvanced} = require('adt-legacy-js');
```

### BST (Binary Search Tree) Class
The BST class implements the Binary Search tree datastrucutre. 
This comes with its own approach of inserting data into BST and doing inorder, postOrder, preOrder and linearOrder traversal on that. *Note: Still WIP.*

The Node Class constructor here is : 

```js
class BSTNode {
    constructor (data,left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    async show() {
        return this.data;
    }
}
```

**Usage:**
```js
const {BST} = require('adt-legacy-js');
const myBST = new BST();
await myBST.insert(20);
await myBST.insert(32);
await myBST.insert(14);
await myBST.preOrder(myBST.root);
await myBST.flush();
```

**Methods:**
- `insert(item)` - Inserts the item in the appropriate location in BST if root is null makes the item the root of tree.
- `flush()` - Makes the root node as null and changes all state to default.
- `inorder(rootNode)` - Returns `array` of items.
- `preOrder(rootNode)` - Returns `array` of items.
- `postOrder(rootNode)` - Returns `array` of items.
- `linearOrder(rootNode)` - Returns `map` of levels and `array` of items in it.


## Running Tests

To run tests on this repo first clone from the above link.
Then do the following :

```console
$ npm install
$ npm run test
```



## TODO

- Improve BST class.
- Add SimpleChaning to Hashtable Advanced.
- Add Graphs Data Structure.
## People
The original author of adt-legacy-js is [Sonu Kumar](https://github.com/skra7)
## License
This project is licensed under the **Apache2.0** license. See the [LICENSE](https://github.com/sysrestart/adt-legacy-js/blob/main/LICENSE) file for more info.