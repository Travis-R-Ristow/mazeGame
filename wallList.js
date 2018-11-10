class wallList{
	constructor(firstNode){
		this.head = firstNode;
		this.tail = firstNode;
		this.right = false;
		this.left = false;
		this.up = false;
		this.down = false;
	}


	// add(newNode, index){
	// 	if(index == null){
	// 		this.tail.setPointer(newNode);
	// 		newNode.setPrev(this.tail);
	// 		this.tail = newNode;
	// 	} else {
			
	// 	}
	// }


	addWall(){
		var lastWall = this.tail;
		var newWall;
		if(lastWall.getDir() == "+x"){
			newWall = new wall(lastWall.getX()+lastWall.getSize(), lastWall.getY(), gridSZ, randomDir(1));
		}
		if(lastWall.getDir() == "-x"){
			newWall = new wall(lastWall.getX()-lastWall.getSize(), lastWall.getY(), gridSZ, randomDir(0));
		}
		if(lastWall.getDir() == "+y"){
			newWall = new wall(lastWall.getX(), lastWall.getY()+lastWall.getSize(), gridSZ, randomDir(3));
		}
		if(lastWall.getDir() == "-y"){
			newWall = new wall(lastWall.getX(), lastWall.getY()-lastWall.getSize(), gridSZ, randomDir(2));
		}
    	lastWall.setPointer(newWall);
		newWall.setPrev(this.tail);
		this.tail = newWall;
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

	getDir(direction){
		if(direction == "right"){
			return this.right;
		}
		if(direction == "left"){
			return this.left;
		}
		if(direction == "up"){
			return this.up;
		}
		if(direction == "down"){
			return this.down;
		}
	}
		setDir(direction, bool){
			if(direction == "right"){
				this.right = bool;
			}
			if(direction == "left"){
				this.left = bool;
			}
			if(direction == "up"){
				this.up = bool;
			}
			if(direction == "down"){
				this.down = bool;
			}
		}


	move(){
		if(this.right){
			var runnerNode = this.head;
			while(runnerNode != null){
				runnerNode.setX( runnerNode.getX()-dusty.getSpd());
				runnerNode = runnerNode.getPointer();
			}
		}
		if(this.left){
			var runnerNode = this.head;
			while(runnerNode != null){
				runnerNode.setX( runnerNode.getX()+dusty.getSpd());
				runnerNode = runnerNode.getPointer();
			}
		}
		if(this.up){
			var runnerNode = this.head;
			while(runnerNode != null){
				runnerNode.setY( runnerNode.getY()+dusty.getSpd());
				runnerNode = runnerNode.getPointer();
			}
		}
		if(this.down){
			var runnerNode = this.head;
			while(runnerNode != null){
				runnerNode.setY( runnerNode.getY()-dusty.getSpd());
				runnerNode = runnerNode.getPointer();
			}
		}
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
		var offSetX = runnerNode.getX()/runnerNode.getSize();
		var offSetY = runnerNode.getY()/runnerNode.getSize();
	    while(runnerNode != null){
	        runnerNode.setSize(dusty.getSize()*3);
	        runnerNode.setX(offSetX*runnerNode.getSize());
	        runnerNode.setY(offSetY*runnerNode.getSize());
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

function randomDir(CantB){
    var rando = floor(random(4));;
    while(rando == CantB){
    	rando = floor(random(4));
    }
    if(rando === 0){
        return "+x";
    }
    if(rando === 1){
        return "-x";
    }
    if(rando === 2){
        return "+y";
    }
    if(rando === 3){
        return "-y";
    }
}