class Node {
    constructor(val) {
      this.data = val;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    addFront(val) {
      let new_node = new Node(val);
      if (!this.head) {
        this.head = new_node;
        return this;
      }
      new_node.next = this.head;
      this.head = new_node;
      return this;
    }
  }
  
  var sll1 = new SLL();
  sll1.addFront(8);
  console.log(sll1);
  sll1.addFront(13);
  console.log(sll1);
  sll1.addFront(2);
  console.log(sll1);
  console.log(sll1.head.next.next);
  
  // // addFront(9)
  // var n1 = new Node(9);
  // sll1.head = n1;
  // // addFront(7)
  // var n2 = new Node(3);
  // n2.next = sll1.head;
  // sll1.head = n2;
  
  // create new SLL
  // var sll1 = new SLL();
  // console.log(sll1);
  // // create new Node
  // var n1 = new Node(1);
  // console.log(n1);
  // // assign sll1.head = Node instance created above
  // sll1.head = n1;
  // console.log(sll1);
  // var n2 = new Node(9);
  // sll1.head.next = n2;
  // console.log(sll1);
  // var n3 = new Node(33);
  // console.log(sll1.head.next);
  // sll1.head.next.next = n3;
  // this.head = node