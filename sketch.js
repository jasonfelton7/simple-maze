let left;
let down;
let right;
let W;
let xVal;
let yVal;

function setup() {
    createCanvas(500, 470);
    frameRate(25);
    rectMode(CENTER);

    xVal = 450;
    yVal = 80;

    // Assigns the variables ASCII decimal values
    left = 37;
    right = 39;
    down = 40;
    up = 38;
}

function draw() {

    background(220);

    textSize(25);
    fill(0, 180, 120);

    text(key, 10, 30);
    drawMaze();

    // Use keyCode and assigned A. S, D, W variables to move rectangle through the maze.
    if (keyCode === left) {
        xVal -= 5;
    } else if (keyCode === right) {
        xVal += 5;
    } else if (keyCode === down) {
        yVal += 5;
    } else if (keyCode === up) {
        yVal -= 5;
    }

    // Winning condition
    if(yVal - 27 > 450 && xVal - 27 < 75) {
        textSize(80);
        background(0, 0, 130, 80);
        text('YOU WON!!', 20, height / 2 + 10);
    }

    textSize(25);
    fill(0, 0, 200);
    text('Start', 420, 40);
    text('End', 26, 450);
    fill(90, 90, 180);
    rect(xVal, yVal, 55, 55);
}

function drawMaze(){
    line(10, 50, 410, 50);
    line(10, 50, 10,450);
    line(490, 50, 490, 450);
    line(90, 450, 490, 450);
    line(170, 50, 170, 130);
    line(10, 290, 90, 290);
    line(90, 130, 90, 210);
    line(90, 210, 250, 210);
    line(250, 130, 250, 290);
    line(250, 290, 330,290);
    line(330, 290, 330, 370);
    line(90, 370, 410, 370);
    line(170, 290, 170, 370);
    line(490, 130, 330, 130);
    line(330, 130, 330, 210);
    line(330, 210, 410, 210);
    line(410, 210, 410, 370);
  }