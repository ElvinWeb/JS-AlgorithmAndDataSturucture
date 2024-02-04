//#region SinglyLinkedList

class Node {
  constructor(val) {
    this.node = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.head = this.tail;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.node = val;
      return true;
    }

    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;

    return removed;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.node);
      current = current.next;
    }

    return arr;
  }
  reverse() {
    let node = this.head;
    this.head = node.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

//#endregion

//#region DoublyLinkedList
class Node {
  constructor(val) {
    this.node = val;
    this.next = null;
    this.prev = null;
  }
}

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     var poppedNode = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = poppedNode.prev;
//       this.tail.next = null;
//       poppedNode.prev = null;
//     }

//     this.length--;
//     return poppedNode;
//   }
//   shift() {
//     if (this.length === 0) return undefined;
//     let oldHead = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = oldHead.next;
//       this.head.prev = null;
//       oldHead.next = null;
//     }

//     this.length--;
//     return oldHead;
//   }
//   unShift(val) {
//     var newNode = new Node(val);

//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }

//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let count, current;
//     if (index <= this.length / 2) {
//       count = 0;
//       current = this.head;
//       while (count !== index) {
//         current = current.next;
//         count++;
//       }
//     } else {
//       count = this.length - 1;
//       current = this.tail;
//       while (count !== index) {
//         current = current.prev;
//         count--;
//       }
//     }
//     return current;
//   }
//   set(index, val) {
//     let wantedNode = this.get(index);
//     if (wantedNode != null) {
//       wantedNode.val = val;
//       return true;
//     }
//     return false;
//   }
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return !!this.unShift(val);
//     if (this.length === index) return !!this.push(val);

//     let newNode = new Node(val);
//     let beforeNode = this.get(index - 1);
//     let afterNode = beforeNode.next;

//     beforeNode.next = newNode;
//     newNode.prev = beforeNode;
//     newNode.next = afterNode;
//     afterNode.prev = newNode;

//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index > this.length) return undefined;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();

//     let removedNode = this.get(index);
//     removedNode.prev.next = removedNode.next;
//     removedNode.next.prev = removedNode.prev;
//     removedNode.next = null;
//     removedNode.prev = null;

//     this.length--;
//     return removedNode;
//   }
// }

//#endregion

//#region StacksAndQueues
class Node {
  constructor(val) {
    this.node = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.length--;
    return temp.val;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

//#endregion

//#region BinarySearchTrees
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  contains(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  BFS() {
    let queue = [];
    let data = [];
    let node = null;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
//#endregion

//#region
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const addedElement = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (addedElement > parent) {
        this.values[parentIdx] = addedElement;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();

    return element;
  }
}

//#endregion
