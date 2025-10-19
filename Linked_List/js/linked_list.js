class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove(value) {
    if (!this.head) return;
    if (this.head && this.head.val === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current && current.next) {
      if (current.next.val === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  read() {
    let current = this.head;
    let arr = [];

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr.join(" → "));
  }
}
