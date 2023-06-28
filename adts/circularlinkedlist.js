const LListClass = require('./linkedlist');

class CLListClass extends LListClass {
    constructor() {
        super();
        this.head.next = this.head;
    }
    // Find an item in the LL node if it exists
    async find(item) {
        var currNode = this.head;
        while(currNode.element !== item) {
            if(currNode.next == null || currNode.next.element == "head") {
                return currNode;
            }
            currNode = currNode.next;
        }
        return currNode;
    }
    // Find Previous Item in a linked list.
    async findPrevious(item) {
        await this.find(item);
        var currNode = this.head;
        while(!(currNode.next === null) && !(currNode.next.element == "head") 
        && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    // Display all the linkedlist node element and return an array of numbers
    /**
     * 
     * @returns {Promise<Array>} []
     */
    async display() {
        var currNode = this.head;
        var llArray = [];
        while(!(currNode.next == null) && !(currNode.next.element == "head")) {
            llArray.push(currNode.next.element);
            currNode = currNode.next;
        }
        return llArray;
    }
}

module.exports = CLListClass;