var headX = 250;
var headY = 260;
var headDirection = 10;

var lefteyeX = 150;
var lefteyeY = 200;
var lefteyeDirection = 5;

var righteyeX = 350;
var righteyeY = 200;
var righteyeDirection = 5;

var lipsX = 250;
var lipsY = 400;
var lipsDirection = 6;

var rightpupilX = 350;
var rightpupilY = 200;
var rightpupilDirection = 12;

var header = 20;
var count = 40;
var headerDirection = 1;

function setup()
{
createCanvas(500, 600);
}
function draw()
{
background(290, 60, 90);

//head
fill('#fae');
circle(headX,headY,450);
headX+=headDirection;
if(headX >= 500 || headX <= 90)
{
    headDirection *= -1;
}


//left eye
fill(500, 520, 200)
ellipse(lefteyeX,lefteyeY,115, 80);
lefteyeX+=lefteyeDirection;
if(lefteyeX >= 350 || lefteyeX <= 70)
{
    lefteyeDirection *= -1;
}

//right eye
fill(500, 520, 200)
ellipse(350, 200, 115, 80)

//right pupil
fill('rgb(100%, 0%, 10%)');
circle(rightpupilX,rightpupilY, 70);
rightpupilY += rightpupilDirection;
if(rightpupilY <= 0 || rightpupilY >= 400 )
{
  rightpupilDirection *= -1;
}

//left pupil
fill(50, 50, 0)
circle(150,200, 70)

// top-right.
point(205, 260);

// bottem-left.
point(100, 415);

//nose
fill(220, 100, 300)
triangle(250, 180, 300, 320, 200, 320);

//lips
fill(200, 50, 40)
ellipse(lipsX,lipsY,150, 80);
lipsY += lipsDirection;
if(lipsY <= 0 || lipsY >= 600 )
{
    lipsDirection *= -1;
}

line(180, 400, 320, 400);

stroke('black');
  strokeWeight(5);

  //hair
line(16, 590, 26, 230);
line(478, 590, 474, 230);

//body
fill(60, 10, 90)
rect(200, 485, 100, 112);

//shirt
fill(500, 10, 400)
triangle(250, 580, 300, 485, 200, 485);

//header
fill(155, 204, 0)
text('Portrait of Feather', 20, 40);
textSize(header);
  header+= headerDirection;
    count++;
    if(count > 40)
    {
      headerDirection *=-1;
        count = 1;
    }

//signature
fill(155, 204, 0)
text('Juliayn Magpie', 390, 580);

}
