var circleX = 450;
var circleY = 165;
var circleSpeed = 3;

var myXs = []
var myYs = []
var myDiameters = []

function setup()
{
createCanvas(500, 600);
myXs[0] = 60;
myYs[0] = 100;
myDiameters[0] = 40;
myXs[1] = 50;
myYs[1] = 200;
myDiameters[1] = 30;
myXs[2] = 40;
myYs[2] = 550;
myDiameters[2] = 20;
}

function draw()
{
background('turquoise');

for(var s = 0; s < myXs.length; s++)
{
square(myXs[s], myYs[s], myDiameters[s]);
}

createPlayer();
playerMotion();
    
createMaze();

squareMotion();

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

function mousePressed()
{
myXs.push(mouseX);
myYs.push(mouseY);
myDiameters.push(50);
}

function squareMotion()
{
for (var s = 0; s < myXs.length; s++)
{
myXs[s] += 1; 
if (myXs[s] > width) 
{
myXs[s] = -myDiameters[s];  
myYs[s] = random(60, height - 60);
}
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