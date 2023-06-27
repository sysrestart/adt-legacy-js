const { describe, it } = require('mocha');
const { expect } = require('chai');
const QueueClass = require('../../adts/queue');

const myQueue = new QueueClass();

describe('Check all queue methods', async () => {
    // enqueue item to queue
    it('check for enqueue to queue', async () => {
        await myQueue.enqueue('item');
        await myQueue.enqueue('item2');
        await myQueue.enqueue('item3');
        expect(await myQueue.fetch()).deep.equals(['item', 'item2', 'item3']);
        expect(await myQueue.peek()).equals('item');
        expect(await myQueue.element()).equals('item');
    }).timeout(-1);
     // dequeue item from queue
     it('check for dequeue from queue', async () => {
        await myQueue.dequeue();
        expect(await myQueue.fetch()).deep.equals(['item2', 'item3']);
        expect(await myQueue.peek()).equals('item2');
        await myQueue.dequeue();
        expect(await myQueue.peek()).equals('item3');
    }).timeout(-1);
    // Poll test cases
    it('check for polling of data', async () => {
        expect(await myQueue.poll()).deep.equals([]);
        await myQueue.enqueue('item4');
        await myQueue.enqueue('item5');
        expect(await myQueue.poll()).deep.equals(['item4','item5']);
    })

})