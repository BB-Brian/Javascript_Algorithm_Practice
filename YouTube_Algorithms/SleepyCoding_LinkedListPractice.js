// // 7 starting methods for SLL

// // isEmpty
// // size
// // prepend
// // append
// // remove
// // contains
// // print

// Example: 
// LinkedList with 3 nodes [10] -> [20] -> [30] -> null

// Example: To add to the front of the Linked List (or prepend to the list)
// 1st) Create a new node with val, for example: [5]
// 2nd) Make the new node point to the current head
// 3rd) Update this.head point to the new node


function LinkedList() {
    this.head = null;
}

LinkedList.prototype.isEmpty = function() {
    return this.head === null;
};

LinkedList.prototype.size = function () {
    var current = this.head;
    var count = 0;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
};

LinkedList.prototype.prepend = function(val) {
    var newNode = {
        data: val,
        next: this.head
    };
    this.head = newNode;
    return;
};


// 1. Create a new node using val
// 2. Traverse to the end of the list
// 3. Make the last node's 'next' value point to the new node

LinkedList.prototype.append = function(val) {
    var newNode = {
        data: val,
        next: null
    };
    if (this.isEmpty()) {
        this.head = newNode;
        return;
    };

    var current = this.head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return;
};


LinkedList.prototype.contains = function(val) {
    var current = this.head;
    while (current !== null) {
        if (current.val === val) {
            return true;
        }
    current = current.next;
    }
    return false;
};


// Conditions to consider:
// 1. If node to be removed is head node, make this.head point to next node of the head.
// 2. If node to be removed is somewhere other than the head node.

LinkedList.prototype.remove = function(val) {
    if (!this.contains(va)) {
        return;
    }
    if (this.head.data === val) {
        this.head = this.head.next;
        return;
    }
    var prev = null;
    var curr = this.head;
    while (curr.data !== val) {
        prev = curr;
        curr = curr.next; 
    } 
    prev.next = curr.next;
};

// Print to the console the values of the list in a string formatted like an array
LinkedList.prototype.print = function() {
    var output = '[';
    var current = this.head; 
    while (current !== null) {
        output += current.data;
        if (current.next !== null) {
            output += ',';
        }
        curent = current.next;
    }
    ouptut += ']';
    console.log(output);
};

let list = new LinkedList();

list.append(10);
list.append(20);

console.log(list);
console.log(list.size());
console.log(list.isEmpty());
console.log(list);
list.print();
