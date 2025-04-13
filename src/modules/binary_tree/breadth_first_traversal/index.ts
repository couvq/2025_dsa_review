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

/**
 * Returns a mapping of levels -> tree node values at each level
 * TODO - not efficient with my current queue as shift is a O(n) algo, implement my own queue that has O(1) enqueue and dequeue
 */
const bfsWithLevels = (
  root: BinaryTreeNode<string> | null
): Map<number, Array<string>> => {
  const result = new Map<number, Array<string>>();
  if (root === null) return result;
  const queue = [root];
  let level = 1;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      const nodesAtLevel = result.get(level) ?? []
      // @ts-ignore
      result.set(level, [...nodesAtLevel, cur.val])
      if (cur?.left) queue.push(cur.left);
      if (cur?.right) queue.push(cur.right);
    }
    level++
  }

  return result;
};

const root = buildBasicExample();
console.log("Breadth first traversal: \n", bfs(root));
console.log("Level mappings: ", bfsWithLevels(root))
