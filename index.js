var dusty;

var startingWall;
var walls;
var gridSZ;


function setup() {
	createCanvas(windowWidth/1.1, windowHeight/1.1).parent('game');
	dusty = new player(width/10);
	gridSZ = dusty.getSize()*3;
    startingWall = new wall(0, 0, gridSZ, "+y");
	walls = new wallList(startingWall);
	for(var c=0; c < 1000; c++){
    	makeSomeWalls();
	}
    // walls.printWalls();
    console.log(document.getElementById("game"));
    
}


function draw() {
    background(102, 153, 0);
    dusty.draw();
    // dusty.move();

    walls.drawAllWalls();
}


function windowResized() {
    resizeCanvas(windowWidth/1.1, windowHeight/1.1);

    // PLAYER \\
    dusty.screenResize();

    // WALLS \\
    walls.screenResize();
}

//  ~  MAKE WALLS  ~  \\

function makeSomeWalls(){
	var lastWall = walls.getTail();
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
    walls.add(newWall);
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

function keyPressed(){
    if(keyCode == 68){
        dusty.setDir("right", true);
    }
    if(keyCode == 65){
        dusty.setDir("left", true);
    }
    if(keyCode == 87){
        dusty.setDir("up", true);
    }
    if(keyCode == 83){
        dusty.setDir("down", true);
    }
}
function keyReleased(){
    if(keyCode == 68){
        dusty.setDir("right", false);
    }
    if(keyCode == 65){
        dusty.setDir("left", false);
    }
    if(keyCode == 87){
        dusty.setDir("up", false);
    }
    if(keyCode == 83){
        dusty.setDir("down", false);
    }
}