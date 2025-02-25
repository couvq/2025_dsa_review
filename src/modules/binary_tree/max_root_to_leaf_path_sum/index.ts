import BinaryTreeNode from "../abstractions";
import { buildMaxRootToLeafPathSumExample } from "../examples";

const maxRootToLeafPathSum = (root: BinaryTreeNode<number> | null): number => {
  if (!root) return 0;
  if (root.left === null && root.right === null) return root.val;
  return (
    root.val +
    Math.max(maxRootToLeafPathSum(root.left), maxRootToLeafPathSum(root.right))
  );
};

const root = buildMaxRootToLeafPathSumExample();
const result = maxRootToLeafPathSum(root);
console.log(`Max root to leaf path sum is: ${result}`);
