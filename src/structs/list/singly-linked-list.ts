import { Node } from './node';

export class SinglyLinkedList {
  head: Node;
  size: number;
  
  constructor(node: Node = null) {
    this.head = node;
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  getFirst(): Node | null {
    return this.head ?? null;
  }

  getLast(): Node | null {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    }
    else {
      return null;
    }
  }
  
  prepend(value: unknown): void {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
      this.size += 1;
    }
    else {
      this.head = node;
      this.size += 1;
    }
  }

  append(value: unknown): void {
    const node = new Node(value);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size += 1;
    }
    else {
      this.head = node;
      this.size += 1;
    }
  }

  clearList(): void {
    this.head = null;
  }
}

