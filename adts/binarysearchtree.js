class BSTNode {
    constructor (data,left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    async show() {
        return this.data;
    }
}

class BSTClass {
    constructor() {
        this.root = null;
        this.postOrderArr = [];
        this.preOrderArr = [];
        this.inOrderArr = [];
    }
    /**
     * 
     * @param {*} data
     */
    async insert(data) {
        let n = new BSTNode(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if(data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    /**
     * 
     * @param {*} node 
     * @returns {Promise<Array>}
     */
    async inOrder(node) {
        if(!(node == null)) {
            await this.inOrder(node.left);
            this.inOrderArr.push(await node.show());
            await this.inOrder(node.right);
        }
        return this.inOrderArr;
    }
    /**
     * 
     * @param {*} node 
     * @returns {Promise<Array>}
     */
    async preOrder(node) {
        let preOrderArr = [];
        if(!(node == null)) {
            this.preOrderArr.push(await node.show());
            await this.preOrder(node.left);
            await this.preOrder(node.right);
        }
        return this.preOrderArr;
    }
    /**
     * 
     * @param {*} node 
     * @returns {Promise<Array>}
     */

    async postOrder(node) {
        
        if(!(node == null)) {
            await this.postOrder(node.left);
            await this.postOrder(node.right);
            this.postOrderArr.push(await node.show());
        }
        return this.postOrderArr;
    }

    async #gothroughNode(node,level,dataMap) {
        if(!(node == null)) {
            const fetchLevel = dataMap.get(level) || [];
        const nodeData = await node.show();
        dataMap.set(level, [...fetchLevel, nodeData]);
            await this.#gothroughNode(node.left, level+1,dataMap);
            await this.#gothroughNode(node.right, level+1,dataMap);
        }
        return dataMap;
    }
    /**
     * 
     * @param {*} node 
     * @returns {Promise<Map>}
     */
    async linearOrder(node) {
        let level = 0;
        let dataMap = new Map();
        let dataFinal = await this.#gothroughNode(node,level,dataMap);
        return dataFinal;  
    }
}

module.exports = BSTClass;