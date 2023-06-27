const {describe, it } = require('mocha');
const {expect} = require('chai');
const LListClass = require('../../adts/linkedlist');

const myLList = new LListClass();
describe('Checking LinkeList Methods', async () => {
    // Add items to Linkelist and display
    it('Add items and Display', async () => {
        await myLList.insert("Virat", "head");
        await myLList.insert("Dhoni", "Virat");
        await myLList.insert("Rohit", "Dhoni");
        await myLList.insert("Pant", "Rohit");
        const llArray = await myLList.display();
        expect(llArray.length).equals(4);
        // Case element insert in middle of LL
        await myLList.insert("Bumrah", "Dhoni");
        const llArray2 = await myLList.display();
        expect(llArray2[2]).equals("Bumrah");
        // Case element inserted if element does not exist to end of LL
        await myLList.insert("Shardul", "Nehra");
        const llArray3 = await myLList.display();
        expect(llArray3[llArray3.length -1]).equals("Shardul");
    }).timeout(-1);
    // Remove Element from a linkedlist and display
    it('Remove Items and Display', async () => {
        await myLList.remove("Dhoni");
        const llArray = await myLList.display();
        expect(llArray.length).equals(5);
        // @ts-ignore
        expect(llArray.includes("Dhoni")).equals(false);
        await myLList.remove("Nehra");
        expect(llArray.length).equals(5);
        // @ts-ignore
        expect(llArray.includes("Nehra")).equals(false);
    }).timeout(-1);

})