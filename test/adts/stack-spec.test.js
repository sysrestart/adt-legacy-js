const { describe, it } = require('mocha');
const { expect } = require('chai');
const StackClass = require('../../adts/stack');

const myStack = new StackClass();

describe('Check all Stack methods', async () => {
    // Add item to queue
    it('check for add to Stack', async () => {
        await myStack.push('item');
        await myStack.push('item2');
        await myStack.push('item3');
        expect(await myStack.length()).equals(3);
        expect(await myStack.peek()).equals('item3');
    }).timeout(-1);
     // Remove item from queue
     it('check for remove from Stack', async () => {
        await myStack.pop();
        expect(await myStack.length()).equals(2);
        expect(await myStack.peek()).equals('item2');
        await myStack.pop();
        expect(await myStack.peek()).equals('item');
    }).timeout(-1);
    // Search for items in Stack
    it('check for Search Item in Stack', async () => {
        await myStack.push('item4');
        expect(await myStack.search('item4')).equals(true);
        expect(await myStack.search('item2')).equals(false);
    }).timeout(-1);
    // Empty Stack
    it('check for Search Item in Stack', async () => {
        await myStack.empty();
        expect(await myStack.length()).equals(0);
        expect(await myStack.search('item')).equals(false);
    }).timeout(-1);

})