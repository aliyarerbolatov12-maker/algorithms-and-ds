import UnionFindBasic from "./union_find_basic.js";

// Example task: count connected components
// Suppose we have 5 elements: 0,1,2,3,4
// And connections: (0,1), (1,2), (3,4)

const uf = new UnionFindBasic(5);

// Make unions
uf.union(0, 1);
uf.union(1, 2);
uf.union(3, 4);

// Check connectivity
console.log("0 and 2 connected? ->", uf.connected(0, 2)); // true
console.log("0 and 4 connected? ->", uf.connected(0, 4)); // false
console.log("3 and 4 connected? ->", uf.connected(3, 4)); // true
