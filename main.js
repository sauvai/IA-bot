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
    boxes.push(new Box(pDraw.mousePos(), random(10, 100), random(10, 100), {
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
        friction: 0
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
    return;
}

function gameUpdate() {
    player.move();
}

function draw() {
    //update
    Matter.Engine.update(engine);
    gameUpdate();

    //drawing
    pDraw.drawBackground('white');

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].draw();
        if (boxes[i].offScreen()) {
            Matter.World.remove(world, boxes[i].body);
            boxes.splice(i, 1);
        }
    }

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].draw();
    }

    // portal.draw();
    player.draw();
}

function keyReleased() {
    keyCode = -1;
}