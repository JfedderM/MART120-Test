var circleX = 450;
var circleY = 165;
var circleSpeed = 3;

var x = 60; 
var y = 210;
var squareSize = 40;

function setup()
{
createCanvas(500, 600);
}

function draw()
{
background('turquoise');

createPlayer();
playerMotion();
    
createMaze();

evilSquare();
esMotion();

createExit();

}

function createPlayer()
{
fill('pink');
circle(circleX, circleY, 40);
}

function playerMotion()
{
if (keyIsDown(87))
    {
circleY -= circleSpeed; 
} else if (keyIsDown(83))
    { 
circleY += circleSpeed; 
} else if (keyIsDown(65))
    { 
circleX -= circleSpeed; 
} else if (keyIsDown(68))
    { 
circleX += circleSpeed;
}
}

function evilSquare()
{
fill('#A251FA');
square(x, y, squareSize);
}

function esMotion()
{
x += 2; 
if (x > width) {
x = -squareSize;  
y = random(50, height - 50);
}
}

function createMaze()
{
//outter maze
line(10, 530, 10, 10);
line(10, 10, 490, 10);
line(490, 590, 490, 10);
line(70, 590, 490, 590);
line(10, 400, 430, 400);

//inner maze
line(70, 70, 70, 330);

line(70, 200, 490, 200);
line(130, 400, 130, 270);
line(190, 200, 190, 330);
line(250, 400, 250, 270);
line(310, 200, 310, 330);
line(370, 400, 370, 260);

line(430, 260, 370, 260);
line(430, 330, 490, 330);

line(150, 130, 490, 130);
line(70, 70, 390, 70);
    
line(10, 530, 400, 530);
line(70, 470, 490, 470);
}

function createExit()
{
fill('purple');
textSize(25);
text("EXIT", width-492, height-10);

}