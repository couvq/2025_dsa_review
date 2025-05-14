// @ts-nocheck
class UnionFind {
  #parent: Map<number, number>;
  #rank: Map<number, number>;

  constructor(nodes: number[]) {
    this.#parent = new Map();
    this.#rank = new Map();

    for (let i = 0; i < nodes.length; i++) {
      this.#parent.set(nodes[i], nodes[i]);
      this.#rank.set(nodes[i], 0);
    }
  }

  // find the parent for the given number n
  find(n: number): number {
    let parent = this.#parent.get(n);
    while (parent !== this.#parent.get(parent)) {
      parent = this.#parent.get(parent);
    }

    return parent;
  }

  // for two nodes x & y, determine if we can create a union of the two nodes (don't have same parent)
  union(x: number, y: number): boolean {
    let p1 = this.find(x);
    let p2 = this.find(y);

    if (p1 === p2) return false;

    if (this.#rank.get(p1) < this.#rank.get(p2)) {
      // set node with bigger rank as parent of node with smaller rank
      this.#parent.set(p1, p2);
    } else if (this.#rank.get(p2) > this.#rank.get(p1)) {
      this.#parent.set(p2, p1);
    } else {
      // ranks are equal
      this.#parent.set(p2, p1);
      this.#rank.set(p1, this.#rank.get(p1) + 1);
    }
    return true;
  }
}
