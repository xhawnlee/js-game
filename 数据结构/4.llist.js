function Node(element) {    
  this.element = element;    
  this.next = null;
  // 如果是双向链表
  this.previous = null;

}  
function LList() {    
  this.head = new Node("head");    
  this.find = find;    
  this.insert = insert;    
  this.display = display;    
  this.findPrevious = findPrevious;    
  this.remove = remove; 
}  
function remove(item) {    
  var prevNode = this.findPrevious(item);    
  if (!(prevNode.next == null)) {       
    prevNode.next = prevNode.next.next;   
  } 
}  
function findPrevious(item) {    
  var currNode = this.head;    
  while (!(currNode.next == null) && (currNode.next.element != item)) {       
    currNode = currNode.next;    
  }    
  return currNode; 
}  
function display() {    
  var currNode = this.head;    
  while (!(currNode.next == null)) {       
    print(currNode.next.element);       
    currNode = currNode.next;    
  } 
}  
function find(item) {    
  var currNode = this.head;  
  while (currNode.element != item) {       
    currNode = currNode.next;    
  }    
  return currNode; 
}  
function insert(newElement, item) {    
  var newNode = new Node(newElement);    
  var current = this.find(item);    
  newNode.next = current.next;    
  newNode.previous = current;
  current.next = newNode; 
  
}