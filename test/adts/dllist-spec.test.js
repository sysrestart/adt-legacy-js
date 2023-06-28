const {describe, it} = require('mocha');
const {expect} = require('chai');
const DLListClass = require('../../adts/doublylinkedlist');

const mydlList = new DLListClass();
describe('Check all doubly linked list methods', async () => {
    it('Insertion into the doubly linked list', async () => {
        await mydlList.insert('sonu', 'head');
        await mydlList.insert('sugandh', 'sonu');
        await mydlList.insert('rocky', 'sugandh');
        await mydlList.insert('bandhu', 'rocky');
        const dllArray = await mydlList.display();
        expect(dllArray.length).equals(4);
        expect(dllArray[0]).equals('sonu');
        const reversedllArray = await mydlList.dispReverse();
        expect(reversedllArray.length).equals(4);
        expect(reversedllArray[0]).equals('bandhu');
    }).timeout(-1);
    it('Remove from a doubly linked list', async () => {
        await mydlList.remove('sonu');
        const dllArray = await mydlList.display();
        expect(dllArray.length).equals(3);
        expect(dllArray[0]).equals('sugandh');
        await mydlList.remove('bandhu');
        const reversedllArray = await mydlList.dispReverse();
        expect(reversedllArray.length).equals(2);
        expect(reversedllArray[0]).equals('rocky');
    }).timeout(-1);
})