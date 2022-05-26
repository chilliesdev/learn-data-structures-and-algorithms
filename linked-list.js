class Node{
    // An object for storing a single node of a linked list .
    // Models two attributes - data and the link to the next node in the list

    data = null;
    nextNode = null;

    constructor(data){
        this.data = data;
    }

    repr(){
        return `<Node data: ${this.data}>`;
    }
}

class linkedList{
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        // Returns the number of nodes in the list
        // Take 0(n) time

        let current = this.head;
        let count = 0;

        while (current !== null) {
            count += 1;
            current = current.nextNode;
        }

        return count;
    }

    add(data) {
        // Add new node containing data at head of the list
        // Takes 0(1) time

        let newNode = new Node(data);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    search(key) {
        // Search for the first node contaiing data that matches the key
        // Return the node or "null" if not found

        // Taken 0(n) time

        let current = this.head;

        while (current) {
            if (current.data === key) {
                return current = current.repr();
            } else {
                current = current.nextNode;
            }
        }

        return null;
    }

    insert(data, index) {
        // Inserts a new Node conaining data at index position
        // Insertion taskes O(1) but finding at the 
        // Insertion point a takes O(n)

        // Takes overall O(n) time

        if (index === 0) {
            this.add(data);
        }

        if (index > 0) {
            let newNode = new Node(data);

            let position = index;
            let current = this.head;

            while (position > 1) {
                current = current.nextNode;
                position -= 1;
            }

            let prevNode = current;
            let nextNode = current.nextNode; 

            prevNode.nextNode = newNode;
            newNode = nextNode;
        }
    }

    remove(key) {
        // Removes Node containing data that matches the key
        // Returns the node or None if key doesn't exist
        // Takes 0(n) time

        let current = this.head;
        let previous = null;
        let found = false;

        while (current && !found) {
            if (current.data === key && current === this.head) {
                found = true;
                this.head = current.nextNode;
            }

            else if (current.data === key) {
                found = true;
                previous.nextNode = current.nextNode;
            }

            else {
                previous = current;
                current = current.nextNode;
            }
        }
    }

    nodeAtIndex(index) {
        if(index === 0){
            return this.head;
        } else {
            let current = this.head;
            let position = 0;
    
            while (position < index){
                current = current.nextNode;
                position += 1;
            }
            
            return current;
        }
    }

    repr() {
        // Return a string representation of the list
        // Takes 0(n)

        let node = [];
        let current = this.head;

        while (current) {
            if (current === this.head) {
                node.push(`[Head: ${current.data}]`);
            } else if (current.nextNode === null) {
                node.push(`[Tail: ${current.data}]`);
            } else {
                node.push(`[${current.data}]`);
            }

            current = current.nextNode;
        }

        return node.join(" -> ");
    }
}

module.exports = linkedList
// ADD
let list = new linkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

// console.log(list.nodeAtIndex(4));
// console.log(list.repr());
// // INSERT
// console.log(list.insert(40, 1));
// console.log(list.repr());

// console.log(list.size());
// console.log(list.repr());
// console.log(list.search(20));


// LINKED LIST
// let list = new linkedList();
// list.head = new Node(10);
// console.log(list.isEmpty());
// console.log(list.size());

// NODE
// let N1 = new Node(10);
// console.log(N1.repr());

// let N2 = new Node(20);
// console.log(N2.repr());

// N1.nextNode = N2;
// console.log(N1.nextNode.repr());