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
    }
}