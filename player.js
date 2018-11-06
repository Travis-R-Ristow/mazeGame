class player {
	constructor(size){
		this.sz = size;
		this.x = width/2-(this.sz/2);
		this.y = height/2-(this.sz/2);
	}

	draw(){
		rect(this.x, this.y, this.sz, this.sz);
	}

	getSize(){
		return this.sz;
	}
		setSize(size){
			this.sz = size;
		}
}