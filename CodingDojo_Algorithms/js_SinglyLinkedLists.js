// Singly Linked List Algorithms (SSL)

// Sample Values: 
let value = 32;


// Challenge: SSL Basic
// Create a singly linked list with one node only.

function SLL() {
    this.head = null;
    this.addToFront = function() {
        let node = new Node(val);
        if(this.head == null) { 
            this.head = node;
            this.head.next = null;
        }
        else {
            this.head.next = node;
            this.head = node;
        }
    }
};

function Node(v) {
    this.val = v;
    this.next = null;
};

SLL();

console.log(Node.val);