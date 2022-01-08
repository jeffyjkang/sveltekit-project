import {Node} from './node';

export class DoublyLinkedList {
  head: Node;
  tail: Node;
  size: number;

  constructor(node: Node = null) {
    this.head = node;
    this.tail = node;
    this.size = node ? 1 : 0;
  }

  getSize(): number {
    return this.size;
  }

  getFirst(): Node | null {
    return this.head ?? null;
  }

  getLast(): Node | null {
    return this.tail ?? null;
  }

  addToHead(value: unknown): void {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    else {
      this.head = node;
      this.tail = node;
    }
  }

  addToTail(value: unknown): void {
    const node = new Node(value);
    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    else {
      this.head = node;
      this.tail = node;
    }
  }

  clearList(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

