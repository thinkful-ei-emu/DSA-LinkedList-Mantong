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
    
  }
    
}
//get rid of the repeted items
//O(n^2) beacuse of nested loop
function reverseList(linkedList){
    let currNode = linkedList.head;
    let prevNode = null;
    let nextNode;
    if (linkedList.head === null) {
        console.log('No items in list');
        return;
    }
    while (currNode !== null) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    linkedList.head = prevNode;
    
    return prevNode;

}
function thirdFromEnd(lst) {
  let thirdEnd = lst.head;
  let end = lst.head.next.next.next;
  while(end !== null) {
    thirdEnd = thirdEnd.next;
    end = end.next;
  }
  return thirdEnd.value;
}
function middleOfList(lst) {
  let end = lst.head;
  let middle = lst.head;
  // two cases cover even and odd length
  while(end !== null && end.next !== null) {
    // advance one pointer 2 times faster than the other
    end = end.next.next;
    middle = middle.next;
  }
  // return the value of the node which was advanced at regular speed
  return middle.value;
}
function hasCycle (lst) {
  // has a high probability of preventing false positives
  var flag = Math.random();
  var current = lst.head; //1 2 3 4
  while(current !== null) {
    if(current.value === flag) {
      return true;
    }
    current.value = flag;
    current = current.next;
  }
  return false;
}
function findCycle(lst){
  let fast = lst.head;
  let slow = lst.head;
// two cases cover even and odd length
 while(slow !== null && fast !== null && fast.next !== null) {
 // advance one pointer 2 times faster than the other
     slow = slow.next;
     fast = fast.next.next;
     if (slow === fast) {
         console.log("Found CYCLE!!!!");
         return;
     }
 }
 console.log("NO Cycle Found");
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
  //WhatDoesThisProgramDo(SLL);
 

  //reverse a List
    //console.log(reverseList(SLL.head));
    //displayList(reverse(SLL));

    //thirdFromEnd
    //console.log(thirdFromEnd(SLL));

    //middle of List
    //console.log(middleOfList(SLL));

    //cycle in a list
    //Create a cycle in the list
    findCycle(SLL);
    console.log(hasCycle(SLL));

    SLL.head.next.next = SLL.head;
    findCycle(SLL);
    console.log(hasCycle(SLL));
}
    
main();