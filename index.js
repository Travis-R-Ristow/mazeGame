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
    walls.printWalls();
}


function draw() {
    background(102, 153, 0);
    // dusty.draw();
    walls.drawAllWalls();
}


function windowResized() {
    resizeCanvas(windowWidth/1.1, windowHeight/1.1);

    // PLAYER \\
    dusty.setSize(width/10);

    // WALLS \\
    var runnerNode = walls.getHead();
    while(runnerNode != null){
        runnerNode.setSize(dusty.getSize()*3);
        
        if(runnerNode.getPrev() != null){
            var previousNode = runnerNode.getPrev(); 
            runnerNode.setXpos();
            runnerNode.setYpos();
        }            
        
        runnerNode = runnerNode.getPointer();
    }
}

//  ~  MAKE WALLS  ~  \\

function makeSomeWalls(){
	
    walls.addWall(new wall());
}

function randomDir(){
    var rando = floor(random(5));
    if(rando === 1){
        return "+x";
    }
    if(rando === 2){
        return "-x";
    }
    if(rando === 3){
        return "+y";
    }
    if(rando === 4){
        return "-y";
    }
}
