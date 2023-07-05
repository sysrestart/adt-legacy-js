
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



## Methods
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


## License

  **Apache-2.0**
