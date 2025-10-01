class UnionFindBasic {
  ids = [];

  constructor(n) {
    for (let i = 0; i < n; i++) {
      this.ids[i] = i;
    }
  }

  connected(a, b) {
    return this.ids[a] === this.ids[b];
  }

  union(a, b) {
    const idA = this.ids[a];
    const idB = this.ids[b];

    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === idA) {
        this.ids[i] = idB;
      }
    }
  }
}
