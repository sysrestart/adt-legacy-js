const { describe, it } = require('mocha');
const { expect } = require('chai');
const QueueClass = require('../../adts/queue');

const myQueue = new QueueClass();

describe('Check all queue methods', async () => {
    // Add item to queue
    it('check for add to queue', async () => {
        await myQueue.add('item');
        await myQueue.add('item2');
        await myQueue.add('item3');
        expect(await myQueue.fetch()).deep.equals(['item', 'item2', 'item3']);
        expect(await myQueue.peek()).equals('item');
        expect(await myQueue.element()).equals('item');
    }).timeout(-1);
     // Remove item to queue
     it('check for remove from queue', async () => {
        await myQueue.remove();
        expect(await myQueue.fetch()).deep.equals(['item2', 'item3']);
        expect(await myQueue.peek()).equals('item2');
        await myQueue.remove();
        expect(await myQueue.peek()).equals('item3');
    }).timeout(-1);
    // Poll test cases
    it('check for polling of data', async () => {
        expect(await myQueue.poll()).deep.equals([]);
        await myQueue.add('item4');
        await myQueue.add('item5');
        expect(await myQueue.poll()).deep.equals(['item4','item5']);
    })

})