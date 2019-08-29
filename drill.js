const LinkedList = require ('./LinkedList');

//displays the linked list
function display(linkedList){
  console.log(JSON.stringify(linkedList, null, 2));
//   let currNode = linkedList.head;
//   let arr = [];
//   while (currNode) {
//     arr.push(currNode.value);
//     currNode = currNode.next;
//   }
//   console.log(arr);
}

 
//returns the size of the linked list
function size(linkedList){
  let counter = 0;
  let currNode = linkedList.head;
  while (currNode) {
    counter = counter + 1;
    currNode = currNode.next; 
  }
  return counter;
}

//finds if the list is empty or not (without using the size() function)
function isEmpty(linkedList){
  if (!linkedList.head) return 'The list is empty';
  else return 'The list is not empty';
}


//finds the node before the item you are looking for
function findPrevious(item, linkedList){
  if (linkedList.head === null){
    console.log ('List is empty');
  } else {
    let currNode = linkedList.head;
    let previousNode;
  
    
    while (currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    return previousNode;
    //console.log (`${previousNode.value}`);
  }
}

//returns the last node in the linked list
function findLast(linkedList){
  let currNode = linkedList.head;

  while (currNode !== null) {
    if (!currNode.next){
      return currNode;
    }  
    
    currNode = currNode.next;
  }
  
}

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
    //return current;
  }
    
}
//return the second item in the list
//O(n^2) beacuse of nested loop
function reverseList(linkedList){
    

}
function main () {
  const SLL = new LinkedList() ;
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Boomer');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Boomer');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  //SLL.remove('squirrel');
  SLL.insertBefore('Atena','Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat',3);
  SLL.remove('Tauhida');
  SLL.insertLast('Boomer');

  //console.log (JSON.stringify(SLL, null, 2)); 
  
  //console.log(size(SLL));
  //console.log(isEmpty(SLL));
  //console.log('previous:', findPrevious('Hotdog', SLL));
  //console.log(findPrevious('Hotdog', SLL));
  //console.log('last:', findLast(SLL));
  WhatDoesThisProgramDo(SLL);
  display(SLL);
}
    
main();