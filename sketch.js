/// <reference path='./libs/p5/p5.global-mode.d.ts' />

const canvasWidth = 500;
const canvasHeight = 500;
const fr = 15;

const scale = 10;
// const xStart = (canvasWidth / scale) / 2; //starting x coordinate
// const yStart = (canvasHeight / scale) / 2; //starting y coordinate
const xStart = 0;
const yStart = 0;

let e1;
let e2;
let player;
let entities = [];

function setup() {
  direction = 'right';

  createCanvas(canvasWidth, canvasHeight + 20);
  frameRate(fr);
  stroke(255);
  strokeWeight(1);

  player = new Player(new Position(xStart, yStart));
  entities = [new Entity(new Position((canvasWidth / scale) / 2, (canvasHeight / scale) / 2), 9, 9, 10),
    new Entity(new Position(5, 10), 3, 3, 10),
    new Wall(new Position(10, 20), 15, 2),
    new Wall(new Position(10, 20), 2, 20)
  ];

  entities[0].matrix.elements = [
    0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  entities[1].matrix.elements = [
    0, 1, 0,
    1, 1, 1,
    0, 1, 0
  ];

}

function drawEntity(entity) {
  fill(color('white'));
  for (var i = 0; i < entity.matrix.elements.length; i++) {
    if (entity.getElementByIndex(i) == 1) {
      var pos = entity.matrix.getPosFromIndex(i);
      if (entity.lethal)
        fill(color('red'));
      if (typeof entity.color != 'undefined')
        fill(color(entity.color));
      rect(pos.x * scale, pos.y * scale, entity.size, entity.size);
    }
  }
}

function draw() {
  background(0);
  fill(color('white'));
  for (var i = 0; i < entities.length; i++) {
    drawEntity(entities[i]);
  }

  move();
  fill(color('white'));
  drawEntity(player);

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

function playerCollide(player) {
  for (var i = 0; i < entities.length; i++) {
    if (player.collide(entities[i]))
      return true;
  }
  return false;
}

function canMove(x, y) {
  x += player.x();
  y += player.y();

  if (
    x < canvasWidth / scale &&
    x >= 0 &&
    y < canvasHeight / scale &&
    y >= 0 &&
    !playerCollide(new Player(new Position(x, y)))) {
    return true;
  } else {
    return false;
  }
}

function move() {
  // console.log(player.pos.toString());
  text(keyCode, 0, canvasHeight + 15);

  if (keyIsDown(RIGHT_ARROW) && canMove(1, 0)) {
    player.move('right');
  }
  if (keyIsDown(LEFT_ARROW) && canMove(-1, 0)) {
    player.move('left');
  }
  if (keyIsDown(DOWN_ARROW) && canMove(0, 1)) {
    player.move('down');
  }
  if (keyIsDown(UP_ARROW) && canMove(0, -1)) {
    player.move('up');
  }
}

function keyReleased() {
  keyCode = -1;
}