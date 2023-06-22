const { describe, it } = require('mocha');
const { expect } = require('chai');
const ListClass = require('../../adts/list');

const myList = new ListClass();

describe('Check all list methods', async () => {
    // Add item test case for list
    it('check for add item', async () => {
        await myList.add('new item');
        expect(await myList.size()).equals(1);
        await myList.add('new item2');
        expect(await myList.size()).equals(2);
        expect(await myList.currPos()).equals(0);
    }).timeout(-1);
    // Remove Item test case for list
    it('check for remove item', async () => {
        await myList.add('new item3');
        await myList.remove();
        expect(await myList.size()).equals(2);
        await myList.remove();
        expect(await myList.size()).equals(1);
        expect(await myList.currPos()).equals(0);
    }).timeout(-1);
    // Fetch Items Test Case for list
    it('check for fetch items', async () => {
        await myList.add('new item4');
        expect(await myList.fetch()).deep.equal(['new item','new item4']);
    }).timeout(-1);
    // Clear Items Test Case for list
    it('check for clear items', async () => {
        await myList.clear();
        expect(await myList.fetch()).deep.equal([]);
        expect(await myList.size()).equals(0);
    }).timeout(-1);
    // Go to front of the list
    it('check for front of the list', async () => {
        await myList.add('new item');
        await myList.add('new Item2');
        await myList.add('new item3');
        await myList.front();
        expect(await myList.currPos()).equals(0);
    }).timeout(-1);
    // Go to end of the list
    it('check for end of the list', async () => {
        await myList.end();
        expect(await myList.currPos()).equals(await myList.size() -1);
    }).timeout(-1);
    // Go to specific position on the list
    it('check for specific position in list', async () => {
        await myList.add('new item4');
        await myList.add('new item5');
        await myList.moveTo(3);
        expect(await myList.currPos()).equals(3);
        await myList.moveTo(7);
        expect(await myList.currPos()).equals(3);
    }).timeout(-1);
    // Go to previous element from current position
    it('check for previous position in list', async () => {
        await myList.prev();
        expect(await myList.currPos()).equals(2);
        await myList.prev();
        await myList.prev();
        await myList.prev();
        await myList.prev();
        expect(await myList.currPos()).equals(0);
    }).timeout(-1);
    // Go to previous element from current position
    it('check for previous position in list', async () => {
        await myList.next();
        expect(await myList.currPos()).equals(1);
        await myList.next();
        await myList.next();
        await myList.next();
        await myList.next();
        await myList.next();
        await myList.next();
        expect(await myList.currPos()).equals(await myList.size() -1);
    }).timeout(-1);

});