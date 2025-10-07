class WeightedQuickUnion {
  ids = [];
  size = [];

  constructor(n) {
    for (let i = 0; i < n; i++) {
      this.ids[i] = i;
      this.size[i] = 1;
    }
  }

  root(i) {
    while (i !== this.ids[i]) {
      i = this.ids[i];
    }
    return i;
  }

  connected(p, q) {
    return this.root(p) === this.root(q);
  }

  union(p, q) {
    const rootP = this.root(p);
    const rootQ = this.root(q);

    if (rootP === rootQ) return;

    if (this.size[rootP] < this.size[rootQ]) {
      this.ids[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    } else {
      this.ids[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }
  }
}
