import {Node} from './node'

export class Stack {
  size: number;
  top: Node | null;

  constructor(size = 0, top = null) {
    this.size = size;
    this.top = top;
  }

  push(value: unknown): void {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.size += 1;
    }
    else {
      this.top.next = newNode;
      newNode.prev = this.top;
      this.top = newNode;
      this.size += 1;
    }
  }

  pop(): Node | null {
    if (!this.top) {
      return null;
    }
    else {
      const node = this.top;
      this.top = node.prev;
      this.top.next = null;
      this.size -= 1;
      return node;
    }
  }

  getSize(): number {
    return this.size;
  }

  getTop(): Node | null {
    if (!this.top) {
      return null;
    }
    else {
      return this.top;
    }
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

