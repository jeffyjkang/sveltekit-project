import {Node} from './node';

export class Queue {
  size: number;
  front: Node | null;
  back: Node | null;

  constructor(size = 0, front = null, back = null) {
    this.size = size;
    this.front = front;
    this.back = back;
  }

  enqueue(value: unknown): void {
    const newNode = new Node(value);
    
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
      this.size += 1;
    }
    else {
      this.back.next = newNode;
      this.back = newNode
      this.size += 1;
    }
  }

  dequeue(): Node | null {
    if (!this.front) {
      return null;
    }
    else if (this.front === this.back) {
      const node = this.front;
      this.front = null;
      this.back = null;
      this.size = 0;
      return node;
    }
    else {
      const node = this.front;
      this.front = this.front.next;
      this.size -= 1;
      return node;
    }
  }

  getSize(): number {
    return this.size;
  }

  getFront(): Node | null {
    if (!this.front) {
      return null;
    } 
    else {
      return this.front;
    }
  }

  getBack(): Node | null {
    if (!this.back) {
      return null;
    }
    else {
      return this.back;
    }
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

