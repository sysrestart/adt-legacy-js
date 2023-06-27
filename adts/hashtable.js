class HashTableClass {
    /**
     * 
     * @param {number} hashParam 
     * @param {*} algo
     */
    constructor(hashParam, algo = null) {
        this.hashParam = hashParam;
        this.algo = algo;
        this.table = new Array(this.hashParam);
    }
    // Private Methods are defined here
    // Generate a Random Integer with a max and min value
    #randomInteger(min, max) {
        return Math.floor( Math.random() * (max -min +1)) + min;
    }
    // Simple Hashing Method to put data
    /**
     * 
     * @param {string} data 
     * @returns {Promise<number>}
     */
    async #simpleHash(data) {
        var total = 0;
        for (var i=0; i< data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.hashParam;
    }
    // Better Hashing Method to put data and avoid collision
    /**
     * 
     * @param {string} data 
     * @returns {Promise<number>}
     */
    async #betterHash(data) {
        const H = 37;
        var total = 0;
        for (var i=0; i< data.length; i++) {
            total += H*total + data.charCodeAt(i);
        }
        return total % this.hashParam;
    }
    /**
     * @returns {Promise<number>}
     */
    async #numHash() {
        var total = 0;
        for (let i=0; i< 9; i++) {
            total += Math.floor(Math.random() * 10);
        }
        total += this.#randomInteger(30,50);
        return total;
    }
    // Private Methods End here
    // Put data into a hash table
    /**
     * @param {any} data
     */
    async put(data) {
        let pos;
        const dataType = typeof(data);
        if( dataType === 'number' ) {
            pos = await this.#numHash();
        } else {
            if (this.algo === 'better') {
                pos = await this.#betterHash(data);
            } else {
                pos = await this.#simpleHash(data);
            }
        }
        this.table[pos]= data;
    }
    // Fetch Distro of Data
    /**
     * @returns {Promise<Object>}
     */
    async showDistro() {
        const dataObj = new Object();
        for (let i=0; i< this.table.length; i++) {
            if(this.table[i] !== undefined) {
                dataObj[this.table[i]] = i;
            }
        }
        return dataObj;
    }
    // Fetch a single data if exists or not
    /**
     * @param {any} data
     * @returns {Promise<number>}
     */
    async hashValue(data) {
        let pos;
        const dataType = typeof(data);
        if( dataType === 'number' ) {
            pos = await this.#numHash();
        } else {
            if (this.algo === 'better') {
                pos = await this.#betterHash(data);
            } else {
                pos = await this.#simpleHash(data);
            }
        }
        return pos;  
    }
    // Remove Data from the hash table
    /**
     * @param {any} data
     */
    async remove(data) {
        let hashPos = await this.hashValue(data);
        if(!!this.table[hashPos]) {
            this.table[hashPos] = undefined;
        }
    }

}

module.exports = HashTableClass;