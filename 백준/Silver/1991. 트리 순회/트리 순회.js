const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const N = +input[0];

  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(parentValue, value, direction) {
      const node = new TreeNode(value);

      if (!this.root) {
        this.root = node; // 루트가 없으면 root로 설정하고 return
        return this;
      }

      const parent = this.findNode(parentValue);
      if (!parent) return null; // 부모 노드 못 찾음
      parent[direction] = node;
      return this;
    }

    findNode(value) {
      if (!this.root) return null;
      const queue = [this.root];
      while (queue.length) {
        const node = queue.shift();
        if (node.value === value) return node;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return null;
    }

    // 전위 순회
    preorder(node = this.root, result = []) {
      if (!node) return result;
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
      return result;
    }

    // 중위 순회
    inorder(node = this.root, result = []) {
      if (!node) return result;
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
      return result;
    }

    // 후위 순회
    postorder(node = this.root, result = []) {
      if (!node) return result;
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
      return result;
    }
  }

  const tree = new BinarySearchTree();

  const [parentNode, _, __] = input[1].split(" ");
  tree.insert(null, parentNode);

  for (let i = 1; i <= N; i++) {
    const [parentNode, leftNode, rightNode] = input[i].split(" ");
    if (leftNode !== ".") tree.insert(parentNode, leftNode, "left");
    if (rightNode !== ".") tree.insert(parentNode, rightNode, "right");
  }

  console.log(
    tree.preorder().join("") +
      "\n" +
      tree.inorder().join("") +
      "\n" +
      tree.postorder().join(""),
  );
});
