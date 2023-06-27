class LLnode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LListClass {
    constructor() {
        this.head = new LLnode('head');
    }
    // Find an item in the LL node if it exists
    async find(item) {
        var currNode = this.head;
        while(currNode.element !== item) {
            if(!currNode.next) {
                return currNode;
            }
            currNode = currNode.next;
        }
        return currNode;
    }
    // Insert an item into the LLnode after a specific item
    // If the item not exists it adds it to the last end of the node
    async insert(newEl, item) {
        var newNode = new LLnode(newEl);
        var current = await this.find(item);
        newNode.next = current.next; 
        current.next = newNode;
    }
    // Display all the linkedlist node element and return an array of numbers
    /**
     * 
     * @returns {Promise<Array>} []
     */
    async display() {
        var currNode = this.head;
        var llArray = [];
        while(!(currNode.next === null)) {
            llArray.push(currNode.next.element);
            currNode = currNode.next;
        }
        return llArray;
    }
    // Find Previous Item in a linked list.
    async findPrevious(item) {
        var currNode = this.head;
        while(!(currNode.next === null) && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // Remove an item from LinkedList
    async remove(item) {
        var currNode = this.head;
        var previousEl = await this.findPrevious(item);
        if(!(previousEl.next === null)) {
            previousEl.next = previousEl.next.next;
        }
        
    }


}

module.exports = LListClass;