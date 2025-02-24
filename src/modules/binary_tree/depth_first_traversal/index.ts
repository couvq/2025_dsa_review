import BinaryTreeNode from "../abstractions";

/**
 *          a
 *         / \
 *        b   c
 *       / \   \
 *      d   e   f
 */
const buildBasicExample = (): BinaryTreeNode<string> => {
  const a = new BinaryTreeNode("a");
  const b = new BinaryTreeNode("b");
  const c = new BinaryTreeNode("c");
  const d = new BinaryTreeNode("d");
  const e = new BinaryTreeNode("e");
  const f = new BinaryTreeNode("f");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  return a;
};

const dfsIterative = (
  root: BinaryTreeNode<string> | null
): (string | undefined)[] => {
  if (!root) return [];
  const results = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    results.push(current?.val);

    if (current?.right) stack.push(current.right);
    if (current?.left) stack.push(current.left);
  }

  return results;
};

const dfsRecursive = (
  root: BinaryTreeNode<string> | null
): (string | undefined)[] => {
  if (!root) return [];
  return [root.val, ...dfsRecursive(root.left), ...dfsRecursive(root.right)];
};

// should print out the depth first traversal of our basic example
const root = buildBasicExample();
const iterativeDfsResults = dfsIterative(root);
console.log("Iterative results: \n", iterativeDfsResults);

const recursiveDfsResults = dfsRecursive(root);
console.log("Recursive results: \n", recursiveDfsResults);
