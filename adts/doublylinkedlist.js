class DLLNode {
    constructor (element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DLListClass {
    constructor () {
        this.head = new DLLNode('head');
    }
    // Finding an Item in Doubly linked list Similar to in Linked List
    async find(item) {
        let currNode = this.head;
        while(currNode.element !== item) {
            if(!currNode.next) {
                return currNode;
            }
            currNode = currNode.next;
        }
        return currNode;
    }
    // Inserting a new Item after a certain item in Doubly linked list
    async insert(newEl, item) {
        var newNode = new DLLNode(newEl);
        var currNode = await this.find(item);
        newNode.next = currNode.next;
        newNode.previous = currNode;
        currNode.next = newNode;
    }
    // Removing an element from a doubly linked list
    async remove(item) {
        var currNode = await this.find(item);
        currNode.previous.next = currNode.next;
        if(!(currNode.next === null)) {
            currNode.next.previous = currNode.previous;
        }
        currNode.next = null;
        currNode.previous = null;
    }
    // FInd last in a doubly linked list
    async findLast() {
        var currNode = this.head;
        while(!(currNode.next === null)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    // Display function is similar to that of in linked lis
    /**
     * 
     * @returns {Promise<Array>} []
     */
    async display() {
        var currNode = this.head;
        var dllArray = [];
        while(!(currNode.next === null)) {
            dllArray.push(currNode.next.element);
            currNode = currNode.next;
        }
        return dllArray;
    }
    // Display the doubly linked list in revers order
    /**
     * 
     * @returns {Promise<Array>} []
     */
    async dispReverse() {
       var currNode = await this.findLast();
       let dllArr = [];
       while(!(currNode.previous === null)) {
        dllArr.push(currNode.element);
        currNode = currNode.previous;
       }
       return dllArr;
    }
}

module.exports = DLListClass;