class player {
	constructor(size){
		this.sz = size;
	}

	draw(){
		rect(width/2-(this.sz/2), height/2-(this.sz/2), this.sz, this.sz);
	}

	getSize(){
		return this.sz;
	}
		setSize(size){
			this.sz = size;
		}
}