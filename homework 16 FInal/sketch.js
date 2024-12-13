var heroX = 517; 
var heroY = 25; 

var hostages =
[
{x: 27, y: 27, diameter: 55, collected: false},
{x: 27, y: 617, diameter: 55, collected: false},
];

var hostages =
[   
{x: 27, y: 27, diameter: 55},
{x: 27, y: 617, diameter: 55},
{x: 517, y: 617, diameter: 55},
{x: 272, y: 217, diameter: 55},
{x: 272, y: 427, diameter: 55},
{x: 27, y: 368, diameter: 55},
{x: 27, y: 275, diameter: 55},
{x: 517, y: 275, diameter: 55},
{x: 517, y: 368, diameter: 55},
{x: 117, y: 117, diameter: 55},
{x: 427, y: 117, diameter: 55},
{x: 427, y: 527, diameter: 55},
{x: 117, y: 527, diameter: 55},
]; 

var evils =
[ 
{x: 50, y: 50, speedX: 4, speedY: 3, radius: 37.5}, // bouncing evilCircle 
{x: 300, y: 300, speed: 3, radius: 37.5} // looping evilCircle 
]; 

var mazeWalls =
[ 
{x1: 590, y1: 10, x2: 10, y2: 10}, 
{x1: 590, y1: 10, x2: 590, y2: 690}, 
{x1: 590, y1: 690, x2: 10, y2: 690}, 
{x1: 10, y1: 10, x2: 10, y2: 690}, 
{x1: 100, y1: 200, x2: 100, y2: 100}, 
{x1: 100, y1: 100, x2: 200, y2: 100}, 
{x1: 400, y1: 100, x2: 500, y2: 100}, 
{x1: 500, y1: 100, x2: 500, y2: 200}, 
{x1: 100, y1: 600, x2: 100, y2: 500}, 
{x1: 100, y1: 600, x2: 200, y2: 600}, 
{x1: 500, y1: 600, x2: 400, y2: 600}, 
{x1: 500, y1: 500, x2: 500, y2: 600}, 
{x1: 300, y1: 100, x2: 300, y2: 200}, 
{x1: 300, y1: 600, x2: 300, y2: 500}, 
{x1: 10, y1: 350, x2: 200, y2: 350}, 
{x1: 400, y1: 350, x2: 590, y2: 350}, 
{x1: 200, y1: 200, x2: 400, y2: 200}, 
{x1: 200, y1: 500, x2: 400, y2: 500}, 
{x1: 300, y1: 300, x2: 300, y2: 400} 
]; 

function setup()
{
createCanvas(600, 700);
}
function draw()
{
background("yellow");

maze();

moveHero();

heroSquare(heroX, heroY);

hostage();

title();
  
// loop through each evilCircle and update their movement
for (let e = 0; e < evils.length; e++)
{
let evil = evils[e];
if (e === 0)
{
evil.x += evil.speedX;
evil.y += evil.speedY;
if (evil.x <= evil.radius || evil.x >= width - evil.radius)
{
evil.speedX *= -1;
}
if (evil.y <= evil.radius || evil.y >= height - evil.radius)
{
evil.speedY *= -1;
}
} else if (e === 1)
{
evil.x += evil.speed;
if (evil.x > width + evil.radius)
{
evil.x = -evil.radius;
evil.y = random(10 + evil.radius, height - evil.radius);
}}
evilCircle(evil.x, evil.y);
checkCollision(heroX, heroY, evil.x, evil.y, evil.radius);
}}

function hostage()
{
for (var h = 0; h < hostages.length; h++)
{
var hostage = hostages[h];
if (!hostage.collected)
{
fill('rgb(0, 255, 0)');
square(hostage.x, hostage.y, hostage.diameter);
// Draw the features of the hostage (eyes, mouth, etc.)
eyeBall(hostage.x + 15, hostage.y + 20, 25, 15, 255, 255, 255, 20, 20, 60);
eyeBall(hostage.x + 40, hostage.y + 20, 25, 15, 255, 255, 255, 20, 20, 60);
fill('black');
circle(hostage.x + 28, hostage.y + 41, 15);
// Check for collision with heroSquare
if (dist(heroX + 30, heroY + 30, hostage.x + 28, hostage.y + 28) < 30 + hostage.diameter / 2) {
hostage.collected = true;
}}}}


function maze()
{
for (let wall of mazeWalls)
{
line(wall.x1, wall.y1, wall.x2, wall.y2);
}
}

// collision for heroSquare and maze
function checkMazeCollision(x, y, size)
{
for (let wall of mazeWalls)
{
if (lineIntersect(x, y, x + size, y, wall.x1, wall.y1, wall.x2, wall.y2) || 
lineIntersect(x, y, x, y + size, wall.x1, wall.y1, wall.x2, wall.y2))
{
return true;
}
}
return false;
}

// line intersection
function lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4)
{
let denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
if (denom === 0) return false;

let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
let u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / denom;

return (t >= 0 && t <= 1 && u >= 0 && u <= 1);
}

// heroSquare movement
function moveHero()
{
let newX = heroX;
let newY = heroY;

if (keyIsDown(87)) newY -= 5; // up
if (keyIsDown(83)) newY += 5; // down
if (keyIsDown(65)) newX -= 5; // left
if (keyIsDown(68)) newX += 5; // right

// collisions with maze
if (!checkMazeCollision(newX, newY, 60))
{
heroX = newX;
heroY = newY;
}}

function heroSquare(x, y)
{
fill(10, 200, 250);
square(x, y, 60);

eyeBall(x + 15, y + 20, 25, 15, 255, 255, 255, 20, 20, 60); // left eye
eyeBall(x + 45, y + 20, 25, 15, 255, 255, 255, 20, 20, 60); // right eye

// mouth
fill('white');
ellipse(x + 30, y + 46, 35, 16);
teeth(x + 12, y + 46, x + 47, y + 46, x + 30, y + 39, x + 30, y + 54, x + 20, y + 40, x + 20, y + 53, x + 40, y + 40, x + 40, y + 53);
}

function evilCircle(x, y)
{
fill('red');
circle(x, y, 75);

// eyebrows
strokeWeight(3);
line(x - 22, y - 24, x - 4, y - 20);
line(x + 3, y - 20, x + 22, y - 25);

eyeBall(x - 15, y - 5, 25, 15, 255, 255, 255, 20, 20, 60); // left eye
eyeBall(x + 15, y - 5, 25, 15, 255, 255, 255, 20, 20, 60); // right eye

// Mouth
line(x - 15, y + 18, x + 15, y + 18);
}

function checkCollision(heroX, heroY, evilX, evilY, evilRadius)
{
let distance = dist(heroX + 30, heroY + 30, evilX, evilY);
if (distance < evilRadius + 30)
{
noLoop();
}}

function eyeBall(x, y, outer_diameter, inner_diameter, outer_red, outer_green, outer_blue, inner_red, inner_green, inner_blue) {
fill(outer_red, outer_green, outer_blue);
circle(x, y, outer_diameter);
fill(inner_red, inner_green, inner_blue);
circle(x, y, inner_diameter);
}

function teeth(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8)
{
line(x1, y1, x2, y2); // horizontal line
line(x3, y3, x4, y4); // middle vertical line
line(x5, y5, x6, y6); // left vertical line
line(x7, y7, x8, y8); // right vertical line
}

function title()
{
fill(0);
textSize(26);
text("Save The Hostages", width/3, height/15);
}
