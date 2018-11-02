var dusty;



function setup() {
	createCanvas(windowWidth/1.1, windowHeight/1.1).parent('game');
	dusty = new player(width/10);
	// newWall = new wall(0,0,width/25, height);
	// walls.push(newWall);
}


function draw() {
    background(102, 153, 0);
    dusty.draw();
    // newWall.draw();
}


function windowResized() {
  resizeCanvas(windowWidth/1.1, windowHeight/1.1);
  dusty.setSize(width/10);
  // window reSize
}
