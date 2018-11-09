// var walls = [];
// var newWall;
// var lastWall = {x: 0, y: 0, w: width/25, h: height};

class wall{
	constructor(x, y, size, direction, health, previous, pointer){
		this.x = x;
		this.y = y;
		this.size = size;
		this.dir = direction;
		if(health == null){
			this.hp = 3;
		} else {
			this.hp = health;
		}
		this.p = pointer;
		this.prev = previous;
		// maybe a before-pointer for resizing walls	
	}


	draw(){
		strokeWeight(this.size/5);
		if(this.dir == "+x"){
			line(this.x, this.y, this.x + this.size, this.y);
		}
		if(this.dir == "-x"){
			line(this.x, this.y, this.x - this.size, this.y);
		}
		if(this.dir == "+y"){
			line(this.x, this.y, this.x, this.y + this.size);
		}
		if(this.dir == "-y"){
			line(this.x, this.y, this.x, this.y - this.size);
		}
		strokeWeight(1);
	}


// GETTERS AND SETTERS
	getX(){
		return this.x;
	}
		setX(x){
			this.x = x;
		}


	getY(){
		return this.y;
	}
		setY(y){
			this.y = y;
		}


	getSize(){
		return this.size;
	}
		setSize(sz){
			this.size = sz
		}


	getDir(){
		return this.dir;
	}
		setDir(direction){
			this.dir = direction
		}


	getPointer(){
		return this.p;
	}
		setPointer(pointer){
			this.p = pointer;
		}


	getPrev(){
		return this.prev;
	}
		setPrev(previous){
			this.prev = previous;
		}


}

