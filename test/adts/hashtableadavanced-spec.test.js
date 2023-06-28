const {describe, it} = require('mocha');
const {expect} = require('chai');
const HashTableAdvancedClass = require('../../adts/hashtableadvanced');
const myHashTableAdvanced = new HashTableAdvancedClass(137);
describe('Hash Table Advanced Methods', async () => {
    it('Check addition into the Hash table', async () => {
        await myHashTableAdvanced.put('home', 'jsr');
        await myHashTableAdvanced.put('home', 'bengaluru');
        await myHashTableAdvanced.put('office', 'bellandur');
        const datafetcher = await myHashTableAdvanced.get('home'); // Returns the first occurence
        expect(datafetcher).equals('jsr');
        console.log(datafetcher);
    }).timeout(-1);
    it('Check Removal from the Hash table', async () => {
        await myHashTableAdvanced.remove('home');
        const datafetcher = await myHashTableAdvanced.get('home'); // Returns the first occurence
        expect(datafetcher).equals(undefined);
    }).timeout(-1);
})