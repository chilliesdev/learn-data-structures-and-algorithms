const linkedList = require("./linked-list");

function mergeSort(linkedList) {
    /*
    Sorts a linked list in ascending order
    - Recursively divide the linked list into sublists containing a single node
    - Repeatedly merge the sublist to produce sorted sublist until one remains

    returns a sorted linked list
    */

    if (linkedList.size() === 0){
        return linkedList;
    } else if (linkedList.head === null) {
        return linkedList;
    }

    let leftHalf = split(linkedList).left;
    let rightHalf = split(linkedList).right;

    let left = mergeSort(leftHalf);
    let right = mergeSort(rightHalf);

    return merge(left, right);
}

function split(linkedlist) {
    /*
    Divide the unsorted list at midpoint into sublist
    */
   if(linkedlist === null || linkedlist.head === null){
       let leftHalf = linkedlist;
       let rightHalf = null;

       return { leftHalf, rightHalf };
   } else {
       let mid = Math.floor(linkedlist.size() / 2 );
        console.log("mid: ", mid);
       let midNode = linkedlist.nodeAtIndex(mid - 1);
    
       var leftHalf = linkedlist;
    
       var rightHalf = new linkedList();
       rightHalf.head = midNode.nextNode;
    
       midNode.nextNode = null;
    
       return { leftHalf, rightHalf };
   }

}

function merge(left, right) {
    /**
     * Merges two linked list, sorting by data in nodes
     * Returns a new marged list
     */

    // Create a new linked list that contains node from
    // merging left and right
    let merged = new linkedList();

    // Add a fake head that is discarded later
    merged.add(0);

    // Set current to the head of the linked list 
    let current = merged.head;

    // Obtain head nodes for left and right linked lists
    let leftHead = left.head;
    let rightHead = right.head;

    // Iterate over left and right until reach the tail node
    // of either
    while (leftHead || rightHead) {

        // If the head node of left is null, we're passed the tail
        // Add the node from right to merged linked list
        if(leftHead === null){
            current.nextNode = rightHead;
            // call next on right to set looop condition to false
            rightHead = rightHead.nextNode;
        }

        // If he head node of right is null, we're pased the tail
        // Add the tail node from left to merged linked list
        else if (rightHead === null) {
            current.nextNode = leftHead;
            // call next on left to set looop condition to false
            leftHead = leftHead.nextNode;
        }

        else {
            // Not at either tail node
            // obtain node data to perform comparism operations
            let leftData = leftHead.data;
            let rightData = rightHead.data;

            // If data on left is less than right, set current to left node
            if(leftData < rightData) {
                current.nextNode = leftHead;
                
                // Move left head to next node
                leftHead = leftHead.nextNode;
            }

            // If data on right is less than left, set current to right node
            else {
                current.nextNode = rightHead;

                // Move right head to next node
                rightHead = rightHead.nextNode;
            }
        }

        // Move current to next node
        current = current.nextNode;
    }

    // Discard fake head and set first merged node as head
    let head = merged.head.nextNode;
    merged.head = head;

    return merged;
}

let list = new linkedList();
list.add(10);
list.add(2);
list.add(44);
list.add(15);
list.add(200);

// console.log(list.repr());
// console.log(split(list));
let sortedLinkedList = mergeSort(list);
console.log(sortedLinkedList);