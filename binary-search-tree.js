class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    // if root is null then insert root
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();
      // console.log(current);
      if (current.val > val) {
        if (current.left) {
          stack.push(current.left);

        } else {
          current.left = new Node(val);

        }
      } else {
        if (current.right) {
          stack.push(current.right);

        } else {
          current.right = new Node(val);

        }

      }
    }

    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {


    if (!node) {
      this.root = new Node(val);
      return this;
    }

    if (node.val > val) {
      if (node.left) {
        // stack.push(node.left);
        return this.insertRecursively(val, node.left);

      } else {
        node.left = new Node(val);

      }
    } else {
      if (node.right) {
        return this.insertRecursively(val, node.right);

      } else {
        node.right = new Node(val);
      }
    }

    return this;

  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // if root is null then insert root
    if (!this.root) {
      return undefined;
    }

    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();
      if (current.val === val) { return current; }
      else {
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
      }
    }

    return undefined;
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {

    if (!this.root) {
      return undefined;
    }
    if (node.val === val) return node;
    if (node.left) return this.findRecursively(val, node.left);
    if (node.right) return this.findRecursively(val, node.right);

    return undefined;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, array = []) {


    if (!node) {

      return array;
    }

    array.push(node.val);
    this.dfsPreOrder(node.left, array);
    this.dfsPreOrder(node.right, array);


    return array;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, array = []) {

    if (!node) {

      return array;
    }

    this.dfsInOrder(node.left, array);
    array.push(node.val);
    this.dfsInOrder(node.right, array);


    return array;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, array = []) {
    if (!node) {

      return array;
    }

    this.dfsPostOrder(node.left, array);

    this.dfsPostOrder(node.right, array);
    array.push(node.val);


    return array;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {


    // if root is null then insert root
    if (!this.root) {

      return [];
    }

    let queue = [this.root];
    let array = [];

    while (queue.length) {
      let current = queue.shift();
      array.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return array;


  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {
    if (!node.right && !node.left) {

      return undefined;
    }

    if (node.right) return node.right;
    /**
     *
     *            1
     *          2   3
     *
     *
     */





  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
