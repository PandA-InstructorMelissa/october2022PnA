// Why linked if we have arrays?
// Linked lists are dynamic in size which makes inserting and deleting easier.

// Singly Linked Lists -  Each node has 2 parts in this case the value and next

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SingleList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // Pushes new node to the end of the list - first checking to see if there is anything at the head if so moving past that
    push(val) {
        let newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    // This will insert a Node to the beginning of the list
    unshift(val) {
        var newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    // This removes or deletes the last node in the list - returning undefined if the list is empty
    pop() {
        if(!this.head) {
            return undefined
        }
        var current = this.head
        var newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    // This will remove the 1st node from the list
    shift() {
        if(!this.head) {
            return undefined
        }
        var current = this.head
        this.head = current.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return current
    }
    // Get will allow us to find the node by a given index
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    // Set will allow us to change a node in our list
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // Insert is how we will actually add our nodes to the list.  
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // Remove is the actual function that will allow us to remove nodes from the list
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    // What if we wanted to reverse the list
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}