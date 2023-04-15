// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.arrayTree = []
  }
  root() {
    return this.arrayTree.length == 0 ? null : this.arrayTree[0]
  }

  add(data) {
    this.arrayTree.push(data)
  }

  has(data) {
    return this.arrayTree.includes(data)
  }

  find(data) {
    function findEl(node, data) {
      if (node.includes(data)) {
        return data
      } else {
        return null
      }
    }
    return findEl(this.arrayTree, data)
  }
  remove(data) {
    return this.arrayTree.length == 0 || !this.arrayTree.includes(data) ? null : this.arrayTree.splice(this.arrayTree.indexOf(data), 1)
  }

  min() {
    return this.arrayTree.length == 0 ? null : Math.min(...this.arrayTree)
  }

  max() {
    return this.arrayTree.length == 0 ? null : Math.max(...this.arrayTree)
  }
}


module.exports = {
  BinarySearchTree
};