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
