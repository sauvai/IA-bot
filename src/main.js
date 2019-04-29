let sketchMode = 'editor';

function setup() {
    initPDraw();
    initMatter();
    initGame();
    initMap();
}

function draw() {
    //update
    // Matter.Engine.update(engine);

    if (sketchMode == 'game') {

    } else if (sketchMode == 'editor') {}

    gameUpdate();
    gameDraw();
    editorDraw();
}

function mouseReleased() {
    mouseButton = '';
}

function keyReleased() {
    keyCode = -1;
}