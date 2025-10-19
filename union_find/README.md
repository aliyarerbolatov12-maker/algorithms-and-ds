**Union-Find Explanation (Quick-Find version):**

Union-Find is a data structure that keeps track of the connections between elements.
For example, imagine we have a set of elements:

```
1  2  3  4  5
```

Initially, each element is its own group. Now, if we want to "unite" (union) some of them — say we connect **1 and 2** — the data structure updates so that both belong to the same group.

So the idea is:

- Each element has a group ID.
- The `union(a, b)` operation merges the groups of `a` and `b`.
- The `connected(a, b)` operation checks if `a` and `b` have the same group ID.

Example:

```
Start: [1][2][3][4][5]

Union(1,2): [1-2][3][4][5]

Union(3,4): [1-2][3-4][5]

Union(2,3): [1-2-3-4][5]
```

Now, `connected(1,4)` → true, because they are in the same group, and `connected(1,5)` → false, because 5 is still separate.

        Окей, вот аккуратно в виде **готового блока для README**, который можно прямо скопировать:

---

### Optimizations

**Path Compression (partial)**

```js
this.ids[i] = this.ids[this.ids[i]];
```

Performs partial path compression — each node points to its grandparent, reducing tree height and improving future lookup speed.

**Weighted Union by Rank**

```js
if (rank[rootP] < rank[rootQ]) {
  ids[rootP] = rootQ;
} else if (rank[rootP] > rank[rootQ]) {
  ids[rootQ] = rootP;
} else {
  ids[rootQ] = rootP;
  rank[rootP]++;
}
```

Uses the rank (approximate tree depth) to attach the smaller tree under the larger one, keeping the trees balanced and ensuring near-constant time operations.
