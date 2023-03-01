class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  prepend(value) {
    const previousHead = this.head;
    this.head = new Node(value);
    this.head.value = value;
    this.head.nextNode = previousHead;
  }

  size() {
    if (!this.head) return 0;
    let counter = 1;
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    return counter;
  }

  headNode() {
    return this.head.value;
  }

  tail() {
    let beforeLastNode = this.head;
    if (!beforeLastNode.nextNode) return beforeLastNode.value;
    while (beforeLastNode.nextNode) beforeLastNode = beforeLastNode.nextNode;
    return beforeLastNode.value;
  }

  index(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }

  pop() {
    if (!this.head.nextNode) this.head = null;
    else {
      let beforeLastNode = this.head;
      while (beforeLastNode.nextNode.nextNode)
        beforeLastNode = beforeLastNode.nextNode;
      beforeLastNode.nextNode = null;
    }
  }

  contains(value) {
    let currentNode = this.head;
    if (this.head.value === value) return true;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      if (currentNode.value === value) return true;
    }
    return false;
  }

  find(value) {
    let currentNode = list.head;
    let counter = 0;
    if (this.head.value === value) return counter;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      counter++;
      if (currentNode.value === value) return counter;
    }
    return null;
  }

  toString() {
    let string = "";
    let currentNode = this.head;
    if (currentNode) {
      string = string + "( " + currentNode.value + " )";
      currentNode = currentNode.nextNode;
    }
    while (currentNode) {
      string = string + " -> ( " + currentNode.value + " )";
      currentNode = currentNode.nextNode;
    }
    return string;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

// Create Linked List
const list = new LinkedList();

// Add 4 nodes at the end of the list
list.append("Node 1");
list.append("Node 2");
list.append("Node 3");
list.append("Node 4");

// Add 1 node at the beginning of the list
list.prepend("Node 0");

// Display size of the list
console.log("The size ot he list is " + list.size());

// Display de head first of the list
console.log("The first node of the list is " + list.headNode());

// Display the last node of the list
console.log("The last node of the list is " + list.tail());

// Display the node with index 2
console.log("The node with index 2 is " + list.index(2));

// Removes the las element from the list
list.pop();

// Display all the elements of the list on a singles string
console.log(list.toString());

// Check if the list contain a node with the value "Node 1"
console.log(
  'The list contain a node with the value "Node 1": ' + list.contains("Node 1")
);

// Display the index of the node with value "Node 1"
console.log(
  'The index of the node with value "Node 1" is ' + list.find("Node 1")
);
