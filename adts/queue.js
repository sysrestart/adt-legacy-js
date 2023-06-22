class QueueClass {
    constructor() {
        this.queueItems = [];
    };

    // enqueue items
    async add(data) {
        this.queueItems.push(data);
        return true;
    }

    // dequeue items
    async remove() {
        this.queueItems.shift();
        return true;
    }

    // fetch queue items
    async fetch() {
        return this.queueItems;
    }

    // peek  element of the queue
    async peek() {
        return this.queueItems[0];
    }
    // poll into the queue remove the head and return items
    async poll() {
        const pollData = [...this.queueItems];
        if(pollData.length > 0) {
            pollData.shift();
            return pollData;
        } else {
            return null;
        }
    }
    // Fetch element throw error if it is null
    async element() {
        if(this.queueItems.length > 0) {
            return this.queueItems[0];
        } else {
            return false;
        }
    }

}

module.exports = QueueClass;