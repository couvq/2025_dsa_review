import BinaryTreeNode from "../abstractions";

/**
 *          a
 *         / \
 *        b   c
 *       / \   \
 *      d   e   f
 */
export const buildBasicExample = (): BinaryTreeNode<string> => {
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

/**
 *          5
 *         / \
 *        11  3
 *       / \   \
 *      4   2   1
 */
export const buildMaxRootToLeafPathSumExample = (): BinaryTreeNode<number> => {
  const five = new BinaryTreeNode(5);
  const eleven = new BinaryTreeNode(11);
  const four = new BinaryTreeNode(4);
  const two = new BinaryTreeNode(2);
  const three = new BinaryTreeNode(3);
  const one = new BinaryTreeNode(1);

  five.left = eleven;
  five.right = three;
  eleven.left = four;
  eleven.right = two;
  three.right = one;

  return five;
};
