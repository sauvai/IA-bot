let sketchMode = 'game';

function setup() {
    initPDraw();
    initMatter();
    initGame();
    initMap();
}

function draw() {
    //update
    Matter.Engine.update(engine);

    if (sketchMode == 'game') {
        gameUpdate();
        gameDraw();
    }
}

function keyReleased() {
    keyCode = -1;
}