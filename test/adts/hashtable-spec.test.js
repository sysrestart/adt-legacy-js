const {describe, it} = require('mocha');
const {expect} = require('chai');
const HashTableClass = require('../../adts/hashtable');

const myHashTable = new HashTableClass(137);
describe('Checking Hash Table Methods', async () => {
    it('Put Data in Hash table', async () => {
        await myHashTable.put('12','Sonu');
        await myHashTable.put('13','Sugandh');
        await myHashTable.put('14','Rocky');
        await myHashTable.put(32, 'Bandhu');
        const distro = await myHashTable.showDistro();
        expect(distro.hasOwnProperty('Sonu')).equals(true);
       expect(distro.hasOwnProperty('Bandhu')).equals(true);
       expect(Object.keys(distro).length).equals(4);
    }).timeout(-1);
    it('Remove Data from  Hash table', async () => {
        await myHashTable.remove('12');
        const distro = await myHashTable.showDistro();
        expect(distro.hasOwnProperty('Sonu')).equals(false);
       expect(distro.hasOwnProperty('Bandhu')).equals(true);
       expect(Object.keys(distro).length).equals(3);
    }).timeout(-1);
    it('Check Hash Value Present', async () => {
       const hashValue = await myHashTable.hashValue('Ramu');
       const value = await myHashTable.get('14');
       console.log('Value',value);
       const distro = await myHashTable.showDistro();
       if(distro.hasOwnProperty('Ramu')) {
        expect(hashValue).equals(distro['Ramu']);
       }
    }).timeout(-1);
})