//PDraw.js
let pDraw;
const canvasWidth = 500;
const canvasHeight = 500;
const fps = 30;

//Matter.js
let runner;
let engine;
let world;
let gravityY;
let gravityX;

let boxes = [];
let boundaries = [];
let player;
let portal;

$('#addBall').click(function () {
    boxes.push(new Ball(new Pos(random(0 + 100, canvasWidth - 100), random(0 + 100, canvasHeight - 100)), random(10, 25), {
        color: 'red'
    }));
    console.log('addBall');
});

function initPDraw() {
    pDraw = new PDraw();
    pDraw.initCanvas(canvasWidth, canvasHeight, fps)
}

function initMatter() {
    engine = Matter.Engine.create();
    world = engine.world;
    // Matter.Engine.run(engine);

    world.gravity.x = gravityX;
    world.gravity.y = gravityY;

    runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
}

function mousePressed() {
    var mousePos = pDraw.mousePos();
    if (mousePos.x > 0 && mousePos.x < canvasWidth &&
        mousePos.y > 0 && mousePos.y < canvasHeight)
        boxes.push(new Box(mousePos, random(10, 100), random(10, 100), {
            color: 'red'
        }));
}

function setupPhysics() {
    gravityX = 0;
    gravityY = 0;
}

function setup() {
    setupPhysics();
    initPDraw();
    initMatter();

    var boundaryOption = {
        color: 'black',
        friction: 0,
    }

    boundaries.push(new Boundary(new Pos(canvasWidth / 2, canvasHeight), canvasWidth, 30, boundaryOption));
    boundaries.push(new Boundary(new Pos(canvasWidth / 2, 0), canvasWidth, 30, boundaryOption));
    boundaries.push(new Boundary(new Pos(canvasWidth, canvasHeight / 2), 30, canvasHeight, boundaryOption));
    boundaries.push(new Boundary(new Pos(0, canvasHeight / 2), 30, canvasHeight, boundaryOption));

    portal = new Portal(new Pos(random(0 + 80, canvasWidth - 80), random(0 + 20, canvasHeight - 20)),
        new Pos(random(0 + 80, canvasWidth - 80), random(0 + 20, canvasHeight - 20)), 20, {
            color1: 'red',
            color2: 'yellow'
        });

    player = new Player(new Pos(50, 50), {
        color: 'blue'
    });
}

function gameUpdate() {
    player.move();
}

function draw() {
    //update
    Matter.Engine.update(engine);
    gameUpdate();

    //game
    gameDraw();
}

function keyReleased() {
    keyCode = -1;
}