//PDraw.js
let pDraw;
const canvasWidth = 500;
const canvasHeight = 500;
const fps = 30;

//Matter.js
let runner;
let engine;
let world;
let gravityY = 0;
let gravityX = 0;
let boundaries = [];

function initPDraw() {
    pDraw = new PDraw();
    pDraw.initCanvas(canvasWidth, canvasHeight, fps)
}

function initMap() {
    var boundaryOption = {
        color: 'black',
        friction: 0,
    }

    boundaries.push(new Boundary(new Pos(canvasWidth / 2, canvasHeight), canvasWidth, 30, boundaryOption));
    boundaries.push(new Boundary(new Pos(canvasWidth / 2, 0), canvasWidth, 30, boundaryOption));
    boundaries.push(new Boundary(new Pos(canvasWidth, canvasHeight / 2), 30, canvasHeight, boundaryOption));
    boundaries.push(new Boundary(new Pos(0, canvasHeight / 2), 30, canvasHeight, boundaryOption));
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