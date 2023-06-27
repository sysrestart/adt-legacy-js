class HashTableAdvancedClass {
    /**
     * 
     * @param {number} hashParam 
     * @param {*} algo
     */
    constructor(hashParam, algo = null) {
        this.hashParam = hashParam;
        this.algo = algo;
        this.table = new Array(this.hashParam);
        this.values = new Array(this.hashParam);
    }
    // Private Functions Start here
    // Better Hash Function to be used by parent algo
    /**
     * @param {string} data
     * @returns {Promise<Number>}
     */
    async #betterHash(data) {
        const H = 37;
        let total = 0;
        for(let i=0; i<data.length; i++) {
            total += H*total + data.charCodeAt(i);
        }
        return total % this.hashParam
    }
    // Hash Table Method for Linear Probing
    /**
     * @param {string} data
     * @returns {Promise<Number>}
     */
    async #linearProbing(data) {
        let pos = await this.#betterHash(data);
        while(this.table[pos] != undefined) {
            pos++;
        }
        return pos;
    }
    // Put data into the hash table
    /**
     * @param {string} key
     * * @param {any} value
     */
    async put(key,value) {
        const pos = await this.#linearProbing(key);
        this.table[pos] = key;
        this.values[pos] = value;
    }
    // Put data into the hash table
    /**
     * @param {string} key
     * @return {Promise<any>}
     */
    async get(key) {
        var hash = -1;
        hash = await this.#betterHash(key);
        if (hash > -1) {
            for (let i= hash; this.table[hash] !== undefined; i++) {
                if(this.table[hash] === key) {
                    return this.values[hash];
                }
            }
        }
        
    }
    // Remove data from the hash table
    /**
     * @param {string} key
     */
    async remove(key) {
        let hash = -1;
        hash = await this.#betterHash(key);
        if (hash > -1) {
            for (let i= hash; this.table[hash] !== undefined; i++) {
                if(this.table[hash] === key) {
                    this.values[hash] = undefined;
                    this.table[hash] = undefined;
                }
            }
        }
       
    }
}

module.exports = HashTableAdvancedClass;