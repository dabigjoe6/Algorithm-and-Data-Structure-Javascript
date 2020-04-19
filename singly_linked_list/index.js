//Singly link list implementation in Javascript

class Node {

	constructor(value) {
		this.value = value;
		this.next = null;
	}

	get printValue() {
		return " " + this.value + " ";
	}

}

class SinglyLinkedList {

	constructor(value = null) {
		if(value != null) {
			this.head = new Node(value);
		} else {
			this.head = null;
		}
	} 

	addFirst(value) {
		let temp = this.head
		let node = new Node(value);
		this.head = node;
		this.head.next = temp;

		return true;
	}

	addNode(value) {
		let current = this.head;
		while(current.next != null) {
			current = current.next;
		}

		let node = new Node(value);
		current.next = node;

		return true;
	}

	deleteFirst() {
		if(this.head == null) {
			return "List is empty";
		}

		let temp = this.head;
		this.head = temp.next;

		return "Deleted " + temp.printValue;
	}

	deleteLast() {
		let current = this.head;

		while(current.next.next !== null) {
			current = current.next;
		}

		current.next = null;

		return true;

	}

	deleteNode(value) {
		let current = this.head;

		if(this.head.value == value) {
			this.head = this.head.next;
		}

		while(current.next != null && current.next.value != value) {
			current = current.next;
		}

		if(current.next) {
			if(current.next.next) {
				current.next = current.next.next;
			}
		} 

		return true;
	
	}

	traverse() {
		let current = this.head;

		let result = "";
		while(current !== null) {
			result += current.printValue;
			current = current.next;
		}

		return result;
	}

}

let list = new SinglyLinkedList(5);

console.log(list.traverse()); // 5

console.log(list.addFirst(11)); // true
console.log(list.traverse()); // 11 5

console.log(list.addNode(2)); // true
console.log(list.traverse()); // 11 5 2

console.log(list.deleteFirst()); // Deleted 11

console.log(list.traverse()); // 5 2

console.log(list.deleteLast()); // true
console.log(list.traverse()); // 5

console.log(list.deleteNode(5)); // true
console.log(list.traverse()); // 
