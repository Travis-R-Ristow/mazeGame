class wallList{
	constructor(firstNode){
		this.head = firstNode;
		this.tail = firstNode;
	}


	add(newNode, index){
		if(index == null){
			this.tail.setPointer(newNode);
			newNode.setPrev(this.tail);
			this.tail = newNode;
		} else {
			
		}
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

	screenResize(){
		var runnerNode = this.head;
	    while(runnerNode != null){
	        runnerNode.setSize(dusty.getSize()*3);
	        
	        if(runnerNode.getPrev() != null){
	            var previousNode = runnerNode.getPrev();
	            if(previousNode.getDir() == "+x"){
					runnerNode.setX(previousNode.getX()+previousNode.getSize());
	            	runnerNode.setY(previousNode.getY());
				}
				if(previousNode.getDir() == "-x"){
					runnerNode.setX(previousNode.getX()-previousNode.getSize());
	            	runnerNode.setY(previousNode.getY());
				}
				if(previousNode.getDir() == "+y"){
					runnerNode.setX(previousNode.getX());
	            	runnerNode.setY(previousNode.getY()+previousNode.getSize());
				}
				if(previousNode.getDir() == "-y"){
					runnerNode.setX(previousNode.getX());
	            	runnerNode.setY(previousNode.getY()-previousNode.getSize());
				}
	        }            
	        
	        runnerNode = runnerNode.getPointer();
	    }
	}
}

