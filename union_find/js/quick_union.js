class QuickUnion {
  ids = [];

  constructor(n) {
    for (let i = 0; i < this.ids.length; i++) {
      this.ids[i] = i;
    }
  }

  root(i) {
    while (i != this.ids[i]) i = this.ids[i];
    return i;
  }

  connected(p, q) {
    return this.root(p) === this.root(q);
  }

  union(p, q) {
    const i = this.root(p);
    const j = this.root(q);
    this.ids[i] = j;
  }
}
