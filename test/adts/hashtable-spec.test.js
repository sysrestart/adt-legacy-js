const {describe, it} = require('mocha');
const {expect} = require('chai');
const HashTableClass = require('../../adts/hashtable');

const myHashTable = new HashTableClass(137);
describe('Checking Hash Table Methods', async () => {
    it('Put Data in Hash table', async () => {
        await myHashTable.put('Sonu');
        await myHashTable.put('Sugandh');
        await myHashTable.put('Rocky');
        await myHashTable.put(32);
        const distro = await myHashTable.showDistro();
        expect(distro.hasOwnProperty('Sonu')).equals(true);
       expect(distro.hasOwnProperty(32)).equals(true);
       expect(Object.keys(distro).length).equals(4);
    }).timeout(-1);
    it('Remove Data from  Hash table', async () => {
        await myHashTable.remove('Sonu');
        const distro = await myHashTable.showDistro();
        expect(distro.hasOwnProperty('Sonu')).equals(false);
       expect(distro.hasOwnProperty(32)).equals(true);
       expect(Object.keys(distro).length).equals(3);
    }).timeout(-1);
    it('Check Hash Value Present', async () => {
       const hashValue = await myHashTable.hashValue('Ramu');
       const distro = await myHashTable.showDistro();
       if(distro.hasOwnProperty('Ramu')) {
        expect(hashValue).equals(distro['Ramu']);
       }
    }).timeout(-1);
})