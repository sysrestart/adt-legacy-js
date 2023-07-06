// @ts-nocheck
class StackClass {
    constructor() {
        this.items = [];
        this.top = 0;
    }

    // Add item to stack
     /**
     * @param {any} item
     */
    async push(item) {
        this.items.push(item);
        this.top++;
        return true;
    }
    // Pop Item from stack
    async pop() {
        this.items.pop();
        --this.top;
        return true;
    }
    // peek into stack
    async peek() {
        return this.items[this.top-1]
    }
    // fetch stack items
    async fetch() {
        return this.items;
    }
    // clear stack
    async empty() {
        this.items = [];
        this.top = 0;
        return true;
    }
    // Length of stack
    async length() {
        return this.top;
    }
    async search(searchItem) {
        return this.items.includes(searchItem) || false;
    }
}

module.exports = StackClass;