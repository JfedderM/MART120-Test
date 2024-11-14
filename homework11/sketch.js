var x = 60; 
var y = 210;
var squareSize = 40;

function setup()
{
    createCanvas(500, 600);
}
function draw()
{
    background(150,600,400);

    // player
    fill(400, 200, 200);
    circle(450, 165, 50);

    // obstacle
    line(10, 500, 10, 10);
    line(10, 10, 490, 10);
    line(490, 590, 490, 10);
    line(70, 590, 490, 590);
    line(10, 400, 430, 400);

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

    // obstacle 2
    fill('rgba(100%, 0%, 100%, 0.5)');
    square(x, y, squareSize);

    // obstacle motion
    x++;
    if (x > width)
    {
    x = 0;
    }

    fill('rgba(100%, 0%, 100%, 0.5)');
    textSize(25);
    text("EXIT", width-490, height-10);

}