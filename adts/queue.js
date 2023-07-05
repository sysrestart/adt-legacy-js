class QueueClass {
    constructor() {
        this.queueItems = [];
    };

    // enqueue items
    async enqueue(data) {
        this.queueItems.push(data);
        return true;
    }

    // dequeue items
    async dequeue() {
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
    // clear stack
    async empty() {
        this.queueItems = [];
        return true;
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
    // Fetch element return false if queue is empty
    async element() {
        if(this.queueItems.length > 0) {
            return this.queueItems[0];
        } else {
            return false;
        }
    }

}

module.exports = QueueClass;