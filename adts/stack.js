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
    }
    // Pop Item from stack
    async pop() {
        this.items.pop();
        --this.top;
    }
    // peek into stack
    async peek() {
        return this.items[this.top-1]
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