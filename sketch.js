/// <reference path='./libs/p5/p5.global-mode.d.ts' />

const canvasWidth = 500;
const canvasHeight = 500;
const fr = 15;

const xStart = canvasWidth / 2; //starting x coordinate
const yStart = canvasHeight / 2; //starting y coordinate
const vehicleSize = 10;

let xObstacles = [200, 60, 250, 40];
let yObstacles = [60, 300, 150, 150];

let xCor;
let yCor;

function setup() {
  direction = 'right';
  xCor = xStart;
  yCor = yStart;

  createCanvas(canvasWidth, canvasHeight + 20);
  frameRate(fr);
  stroke(255);
  strokeWeight(1);
}

function draw() {
  background(0);

  move();
  fill(color('white'));
  rect(xCor, yCor, vehicleSize, vehicleSize);
  for (let i = 0; i < xObstacles.length; i++) {
    fill(color('red'));
    rect(xObstacles[i], yObstacles[i], 10, 10);
  }
  stroke('red');
  fill(color('white'));
  for (let x = 0; x <= canvasWidth; x += canvasWidth) {
    line(x, 0, x, canvasHeight);
  }
  for (let y = 0; y <= canvasHeight; y += canvasHeight) {
    line(0, y, canvasWidth, y);
  }
  stroke('white');
}

function obstacle(x, y) {
  for (let i = 0; i < xObstacles.length; i++) {
    if (x == xObstacles[i] && y == yObstacles[i]) {
      text('Obstacle (' + x + ', ' + y + ')', 30, canvasHeight + 15);
      return true;
    }
  }
  return false;
}

function canMove(x, y) {
  if (
    xCor + x < canvasWidth &&
    xCor + x >= 0 &&
    yCor + y < canvasHeight &&
    yCor + y >= 0 &&
    !obstacle(xCor + x, yCor + y)) {
    return true;
  } else {
    return false;
  }
}

function move() {
  text(keyCode, 0, canvasHeight + 15);

  if (keyIsDown(RIGHT_ARROW) && canMove(vehicleSize, 0)) {
    xCor += vehicleSize;
  }
  if (keyIsDown(LEFT_ARROW) && canMove(-vehicleSize, 0)) {
    xCor -= vehicleSize;
  }
  if (keyIsDown(DOWN_ARROW) && canMove(0, vehicleSize)) {
    yCor += vehicleSize;
  }
  if (keyIsDown(UP_ARROW) && canMove(0, -vehicleSize)) {
    yCor -= vehicleSize;
  }
}

function keyReleased() {
  keyCode = -1;
}