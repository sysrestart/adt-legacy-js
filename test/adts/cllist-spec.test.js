const {describe, it } = require('mocha');
const {expect} = require('chai');
const CLListClass = require('../../adts/circularlinkedlist');

const myCLList = new CLListClass();
describe('Checking Circular LinkeList Methods', async () => {
    // Add items to Linkelist and display
    it('Add items to CLL and Display', async () => {
        await myCLList.insert("Virat", "head");
        await myCLList.insert("Dhoni", "Virat");
        await myCLList.insert("Rohit", "Dhoni");
        await myCLList.insert("Pant", "Rohit");
        const llArray = await myCLList.display();
        expect(llArray.length).equals(4);
        // Case element insert in middle of LL
        await myCLList.insert("Bumrah", "Dhoni");
        const llArray2 = await myCLList.display();
        expect(llArray2[2]).equals("Bumrah");
        // Case element inserted if element does not exist to end of LL
        await myCLList.insert("Shardul", "Nehra");
        const llArray3 = await myCLList.display();
        expect(llArray3[llArray3.length -1]).equals("Shardul");
    }).timeout(-1);
    // Remove Element from a linkedlist and display
    it('Remove Items from CLL and Display', async () => {
        await myCLList.remove("Dhoni");
        const llArray = await myCLList.display();
        expect(llArray.length).equals(5);
        // @ts-ignore
        expect(llArray.includes("Dhoni")).equals(false);
        await myCLList.remove("Nehra");
        expect(llArray.length).equals(5);
        // @ts-ignore
        expect(llArray.includes("Nehra")).equals(false);
    }).timeout(-1);

})