import BinaryTreeNode from "../abstractions";
import { buildBasicExample } from "../examples";

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
