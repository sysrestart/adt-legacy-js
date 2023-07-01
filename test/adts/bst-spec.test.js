const {describe, it} = require('mocha');
const {expect} = require('chai');
const BSTClass = require('../../adts/binarysearchtree');

const myBST = new BSTClass();
describe('BST methods check', async () => {
    it.only('Insert and validate data', async () => {
        await myBST.insert(32);
        await myBST.insert(44);
        await myBST.insert(47);
        await myBST.insert(35);
        await myBST.insert(34);
        await myBST.insert(36);
        await myBST.insert(32);
        await myBST.insert(11);
        await myBST.insert(22);
        const preOrder = await myBST.preOrder(myBST.root);
        const postOrder = await myBST.postOrder(myBST.root);
        const inOrder = await myBST.inOrder(myBST.root);
        const linearOrder = await myBST.linearOrder(myBST.root);
        console.log(`All order traversal check`);
    }).timeout(-1);
})