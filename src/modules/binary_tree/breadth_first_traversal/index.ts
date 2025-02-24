import BinaryTreeNode from "../abstractions";
import { buildBasicExample } from "../examples";

const bfs = (root: BinaryTreeNode<string> | null): (string | undefined)[] => {
  if (!root) return [];

  const results = [];
  const queue = [root];

  while (queue.length) {
    const current = queue.pop();
    results.push(current?.val);

    if (current?.left) queue.unshift(current.left);
    if (current?.right) queue.unshift(current.right);
  }

  return results;
};

const root = buildBasicExample();
console.log("Breadth first traversal: \n", bfs(root));
