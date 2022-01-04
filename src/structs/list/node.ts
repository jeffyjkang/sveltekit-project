export class Node {
  value: unknown;
  prev: Node | null;
  next: Node | null;

  constructor(value: unknown, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

}

