// Singly linked List

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Sll {
    constructor() {
        this.head = null // This represents the beginning of the list and as it is a new list it's value is null
        this.tail = null  // This represents the last node or the end of the list
        this.length = 0
    }
    // Add a new node to the end of the list
    // First we are going to check to see if there is anything at the head of the list if yes move to next
    push(val) {
        let newNode = new Node(val)  // this is how we start to create the new node
        if(!this.head) {
            this.head = newNode
            this.tail = this.head

        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    // Add a step to the front of the list
    unshift(val){
        let newNode = new Node(val)  // this is how we start to create the new node
        if(!this.head) {
            this.head = newNode
            this.tail = this.head

        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    pop(){
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
}
let test = new Sll
test.push("Turn on Computer").push("Log into Computer").unshift("Plug Computer into power").push("Log into website").pop()
// console.log("do we console log test?", test)

console.log("why yes we do log test: ", test)

let newTest = new Sll
newTest.pop()
console.log("why yes we do log test: ", newTest)