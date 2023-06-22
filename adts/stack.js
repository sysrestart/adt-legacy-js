class StackClass {
    constructor() {
        this.items = [];
        this.top = 0;
    }

    // Add item to stack
     /**
     * @param {any} item
     */
    async add(item) {
        this.items.push(item);
        this.top++;
    }
    // Pop Item from stack
    async remove() {
        this.items.pop();
        --this.top;
    }
    // peek into stack
    async peek() {
        return this.items[this.top-1]
    }
    // clear stack
    async clearStack() {
        this.items = [];
        this.top = 0;
        return true;
    }
    // Length of stack
    async lengthStack() {
        return this.top;
    }
}

module.exports = StackClass;