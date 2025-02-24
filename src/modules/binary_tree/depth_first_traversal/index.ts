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

const dfs = (root: BinaryTreeNode<string> | null) => {
  if (!root) return;

  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    console.log(current?.val);

    if (current?.right) stack.push(current.right);
    if (current?.left) stack.push(current.left);
  }
};

// should print out the dfs of our basic example
const root = buildBasicExample();
dfs(root)
