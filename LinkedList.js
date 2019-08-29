class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  
  constructor() {
    this.head = null;
    
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  remove(item){
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !==item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !==item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  insertBefore(item, key){
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while( currNode.next !== null){
      if (currNode.next.value === key){
        let n = new _Node(item, null);
        n.next = currNode.next;
        currNode.next = n;
        return;
      }
      currNode = currNode.next;
    }

  }
  insertAfter(item, key){
    let currNode = this.head;
    
    if (!this.head) {
      return null;
    }

    while (currNode !==null){
      if (currNode.value === key){
        currNode.next = new _Node(item, currNode.next);
        return;
      }else {
        currNode = currNode.next;
      }
    }
      
  }

  getAt(index){
    let counter = 0;
    let currNode = this.head;
    while (currNode) {
      if (counter === index){
        return currNode;
      }
      counter++;
      currNode = currNode.next;
    }
    return null;
  }
  insertAt(item, index){  
    if (!this.head) {
      return null;
    }
    const previous = this.getAt(index-2);
    let n = new _Node(item);
    n.next = previous.next;
    previous.next = n;
    return this.head;
  }
}

module.exports = LinkedList;


