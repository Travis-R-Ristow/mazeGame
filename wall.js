// var walls = [];
// var newWall;
// var lastWall = {x: 0, y: 0, w: width/25, h: height};

class wall{
	constructor(x, y, width , height, pointer){
		this.x = x;
		this.y = y;
		this.w = width;
		this.h = height;
		this.p = pointer;		
	}

	draw(){
		rect(this.x, this.y, this.w, this.h);
	}


// GETTERS AND SETTERS
	getXpos(){
		return this.x;
	}
		setXpos(xPos){
			this.x = xPos;
		}

	getYpos(){
		return this.y;
	}
		setYpos(yPos){
			this.y = yPos;
		}

	getWidth(){
		return this.w;
	}
		setWidth(width){
			this.w = width;
		}

	getHeight(){
		return this.h;
	}
		setHeight(height){
			this.h = height;
		}

	getPointer(){
		return this.p;
	}
		setPointer(pointer){
			this.p = pointer;
		}
}


// function makeWalls(){
// 	newWall = new wall(0,0,width/25,height);
// 	walls.push(newWall);
// 	// lastWall = {x: 0, y: 0, w: width/25, h: height};
// }
