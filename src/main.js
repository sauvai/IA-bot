// let boxes = [];
let boundaries = [];
let player;

// function mousePressed() {
//     var mousePos = pDraw.mousePos();
//     if (mousePos.x > 0 && mousePos.x < canvasWidth &&
//         mousePos.y > 0 && mousePos.y < canvasHeight)
//         boxes.push(new Box(mousePos, random(10, 100), random(10, 100), {
//             color: 'red'
//         }));
// }

function setup() {
    initPDraw();
    initMatter();
    initGame();
    initMap();
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