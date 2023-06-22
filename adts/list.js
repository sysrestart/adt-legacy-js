class ListClass {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.listItems = [];
    }

    // add to list
    /**
     * @param {any} item
     */
    async add(item) {
        this.listItems.push(item);
        this.listSize++;
        return true;
    }
    // remove from list
    async remove() {
        if(this.listSize > 0) {
            this.listItems.pop()
            this.listSize--;
            return false;
        }
    }
    // current position in list
    async size() {
        return this.listSize;
    }
    // fetch all elements in list
    async fetch() {
        return this.listItems;
    }
    // Clear entire list
    async clear() {
        this.listItems = [];
        this.listSize = this.pos = 0;
        return true;
    }

    // move to front of list
    async front() {
        this.pos = 0;
    }
    // move to end of list
    async end() {
        this.pos = this.listSize-1;
    }
    // previous element
    async prev() {
        if(this.pos > 0) {
            --this.pos;
        }
    }
    // next element
    async next() {
        if(this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }
    // Current position of element
    async currPos() {
        return this.pos;
    }
    // move to a particular position
    async moveTo(position) {
        if(position >= 0 && position < this.listSize) {
            this.pos = position;
        }
    }
     // current item in list
     async getCurrElement() {
        return this.listItems[this.pos];
    }

}

module.exports = ListClass;
