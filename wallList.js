class wallList{
	constructor(firstNode){
		this.head = firstNode;
		this.tail = firstNode;
	}

	add(newNode){
		this.tail.setPointer(newNode);
		this.tail = newNode;
	}

	getHead(){
		return this.head;
	}
		setHead(node){

		}

	showAllWalls(){
		var runnerNode = this.head;
		while(runnerNode.getPointer() != null){
			console.log(runnerNode);
			runnerNode = runnerNode.getPointer();
		}
	}
}