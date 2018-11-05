class wallList{
	constructor(firstNode){
		this.head = firstNode;
		this.tail = firstNode;
	}


	add(newNode){
		this.tail.setPointer(newNode);
		newNode.setPrev(this.tail);
		this.tail = newNode;
	}


	getHead(){
		return this.head;
	}
	setHead(node){
		this.head = node;
	}


	getTail(){
		return this.tail;
	}
	setTail(node){
		this.tail = node;
	}


	printWalls(){
		var runnerNode = this.head;
		console.log("Walls:\t")
		while(runnerNode != null){
			console.log(runnerNode);
			runnerNode = runnerNode.getPointer();
		}
	}


	drawAllWalls(){
		var runnerNode = this.head;
		while(runnerNode != null){
			runnerNode.draw();
			runnerNode = runnerNode.getPointer();
		}
	}
}

