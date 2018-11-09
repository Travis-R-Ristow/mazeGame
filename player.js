class player {
	constructor(size){
		this.sz = size;
		this.x = (width/2) - size/2;
		this.y = (height/2) - size/2;;
		this.right = false;
		this.left = false;
		this.up = false;
		this.down = false;
		this.spd = 3;
	}

	draw(){
		rect(this.x, this.y, this.sz, this.sz);
	}


	// move(){
	// 	if(this.right){
	// 		this.x += this.spd;
	// 	}
	// 	if(this.left){
	// 		this.x -= this.spd;
	// 	}
	// 	if(this.up){
	// 		this.y -= this.spd;
	// 	}
	// 	if(this.down){
	// 		this.y += this.spd;
	// 	}
	// }

	getSize(){
		return this.sz;
	}
		setSize(size){
			this.sz = size;
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

	screenResize(){
		var offSetX = this.x/this.sz;
		var offSetY = this.y/this.sz;

		this.sz = width/10;

		this.x = offSetX*this.sz;
		this.y = offSetY*this.sz;
	}

	
}